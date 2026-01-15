const baseUrl = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
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

export async function fetchGitHubUserRepos(userName) {
    try {
        const response = await fetch(`${baseUrl}/users/${userName}/repos?per_page=10&sort=created`);
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}