// src/js/api.js
export async function fetchGitHubUser(userName) {
    const baseUrl = 'https://api.github.com';
    try {
        const response = await fetch(`${baseUrl}/users/${userName}`);
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}
