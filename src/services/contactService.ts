import { API_ENDPOINTS } from '../config/api';


export interface ContactMessage {
    studentName: string;
    studentEmail: string;
    message: string;
}

export const submitContactMessage = async (data: ContactMessage) => {
    const response = await fetch(`${API_ENDPOINTS.CONTACT}`, {

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
