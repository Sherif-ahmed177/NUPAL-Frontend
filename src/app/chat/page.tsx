'use client';

import { useState, useCallback } from 'react';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatInterface from '@/components/chat/ChatInterface';
import { sendMessage } from '@/services/chatService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  messages: Message[];
}

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get active chat messages
  const activeChat = chats.find((chat) => chat.id === activeChatId);
  const messages = activeChat?.messages || [];


  // Generate chat title from first message
  const generateChatTitle = (message: string): string => {
    const trimmed = message.trim();
    if (trimmed.length === 0) return 'New Chat';
    // Take first 30 characters or first sentence
    const firstSentence = trimmed.split(/[.!?]/)[0];
    const title = firstSentence.length > 30
      ? trimmed.substring(0, 30) + '...'
      : firstSentence || trimmed.substring(0, 30);
    return title || 'New Chat';
  };

  const handleNewChat = useCallback(() => {
    const newChatId = `chat-${Date.now()}`;
    const newChat: Chat = {
      id: newChatId,
      title: 'New Chat',
      lastMessage: 'Start a conversation...',
      timestamp: 'Just now',
      messages: [],
    };

    setChats((prevChats) => [newChat, ...prevChats]);
    setActiveChatId(newChatId);
  }, []);

  const handleSendMessage = useCallback(
    async (messageText: string) => {
      let currentChatId = activeChatId;

      // Create new chat if none is active
      if (!currentChatId) {
        const newChatId = `chat-${Date.now()}`;
        const newChat: Chat = {
          id: newChatId,
          title: 'New Chat',
          lastMessage: messageText,
          timestamp: 'Just now',
          messages: [],
        };
        setChats((prevChats) => [newChat, ...prevChats]);
        setActiveChatId(newChatId);
        currentChatId = newChatId;
      }

      const userMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      // Update chat with user message and generate title if it's the first message
      setChats((prevChats) =>
        prevChats.map((chat) => {
          if (chat.id === currentChatId) {
            const isFirstMessage = chat.messages.length === 0;
            return {
              ...chat,
              messages: [...chat.messages, userMessage],
              lastMessage: messageText,
              timestamp: 'Just now',
              title: isFirstMessage ? generateChatTitle(messageText) : chat.title,
            };
          }
          return chat;
        })
      );

      setIsLoading(true);

      try {
        // Prepare API request
        // If the ID starts with 'chat-', it's a local temporary ID, so don't send it as conversation_id
        const apiConversationId = currentChatId.startsWith('chat-') ? undefined : currentChatId;

        const response = await sendMessage({
          conversation_id: apiConversationId,
          message: messageText,
        });

        const newConversationId = response.conversation_id;

        // Map replies to Message objects
        const botMessages: Message[] = response.replies.map((reply, index) => ({
          id: `${newConversationId}-${Date.now()}-${index}`,
          text: reply.content,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        }));

        setChats((prevChats) =>
          prevChats.map((chat) => {
            if (chat.id === currentChatId) {
              return {
                ...chat,
                id: newConversationId, // Update to the real conversation ID from backend
                messages: [...chat.messages, ...botMessages],
                lastMessage: botMessages[botMessages.length - 1]?.text || chat.lastMessage,
                timestamp: 'Just now',
              };
            }
            return chat;
          })
        );

        // Also update activeChatId if it was the one we just updated
        if (activeChatId === currentChatId) {
          setActiveChatId(newConversationId);
        }
      } catch (error: any) {
        console.error('Failed to get bot response:', error);
        // Add an error message to the chat
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          text: error.message || 'Sorry, I encountered an error. Please try again later.',
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };

        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === currentChatId
              ? {
                ...chat,
                messages: [...chat.messages, errorMessage],
              }
              : chat
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [activeChatId]
  );

  const handleSelectChat = useCallback((chatId: string) => {
    setActiveChatId(chatId);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    // Search is handled in ChatSidebar component
    // This callback can be used for additional search logic if needed
  }, []);

  const handleDeleteChat = useCallback((chatId: string) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));

    // If the deleted chat was active, clear the active chat
    if (activeChatId === chatId) {
      setActiveChatId(null);
    }
  }, [activeChatId]);

  return (
    <div className="flex h-[calc(99vh-64px)] w-full overflow-hidden bg-white">
      <ChatSidebar
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
        onSearchChange={handleSearchChange}
      />
      <ChatInterface
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
}

