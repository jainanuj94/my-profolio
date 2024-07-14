import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export interface Repositories {
    description: string,
    html_url: string,
    language: string,
    name: string,
    pushed_at: string
}

export const fetchRepositories = async (username: string) : Promise<Repositories[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
};