export function showLoading(container) {
    container.innerHTML = `<p class="profile-loading">Carregando perfil...</p>`;
}

export function showProfile(container, userData, userRepos) {
    const userReposList = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <div class="repo-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || 'Não informada'}</span>
                </div>
            </div>
        </a>
        `).join('') : '<p class="no-repos">Este usuário não possui repositórios públicos.</p>';

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2 class="profile-name">${userData.name}</h2>
                <p class="profile-bio">${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>

        <div class="profile-stats">
            <div class="followers">
                <h4>👥 SEGUIDORES</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 SEGUINDO</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="repos-section">
            <h2>Repositórios Públicos</h2>
            <div class="repos-list">
                ${userReposList}
            </div>
        </div>
    `;
}

export function showError(container, message) {
    container.innerHTML = '';
    alert(message);
}