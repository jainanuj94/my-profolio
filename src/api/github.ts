import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchRepositories = async (username: string) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
};