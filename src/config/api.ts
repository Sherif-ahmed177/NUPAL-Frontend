export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5009';

export const API_ENDPOINTS = {
  STUDENTS: `${API_BASE_URL}/api/students`,
  JOBS: `${API_BASE_URL}/api/jobs`,
  CHAT: `${API_BASE_URL}/api/chat`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  SKILLS: `${API_BASE_URL}/api/skills`, // Assuming this based on current usage
};
