import { API_ENDPOINTS } from '../config/api';
import { getToken } from '../lib/auth';


export interface Skill {
    name: string;
    level: number;
    category: string;
}

export interface DynamicSkillsProfile {
    name: string;
    skills: Skill[];
}

export async function fetchDynamicSkillsProfile(): Promise<DynamicSkillsProfile | null> {
    try {
        const token = getToken();

        console.log('Token found:', token ? 'Yes' : 'No');

        if (!token) {
            console.warn('No authentication token found');
            return null;
        }

        console.log('Fetching dynamic skills profile from API...');
        const response = await fetch(`${API_ENDPOINTS.SKILLS}/profile`, {

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('API Response status:', response.status);

        if (!response.ok) {
            if (response.status === 401) {
                console.warn('Unauthorized - token may be invalid');
                return null;
            }
            throw new Error(`Failed to fetch dynamic skills profile: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Dynamic skills profile data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching dynamic skills profile:', error);
        return null;
    }
}
