export interface Job {
    id: string;
    title: string;
    companyName: string;
    location: string;
    description: string;
    salaryMin?: number;
    salaryMax?: number;
    redirectUrl: string;
    created: string;
    category: string;
    contractTime?: string;
    workType?: string;
}


export interface JobSearchParams {
    what?: string;
    where?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5009/api';

export const fetchJobs = async (params?: JobSearchParams): Promise<Job[]> => {
    // Build query string from parameters
    const queryParams = new URLSearchParams();
    if (params?.what) queryParams.append('what', params.what);
    if (params?.where) queryParams.append('where', params.where);

    const queryString = queryParams.toString();
    const url = `${API_URL}/jobs${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorMessage = `Failed to fetch jobs (Status: ${response.status})`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
};
