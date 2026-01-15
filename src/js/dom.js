// src/js/dom.js
export function showLoading(container) {
    container.innerHTML = `<p class="profile-loading">Carregando perfil...</p>`;
}

export function showProfile(container, userData) {
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
    `;
}

export function showError(container, message) {
    container.innerHTML = '';
    alert(message);
}
