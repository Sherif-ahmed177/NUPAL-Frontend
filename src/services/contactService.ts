const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5009';

export interface ContactMessage {
    studentName: string;
    studentEmail: string;
    message: string;
}

export const submitContactMessage = async (data: ContactMessage) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to submit message');
    }

    return response.json();
};
