const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = `<p class="profile-loading">Carregando perfil...</p>`;

        try {
            const response = await fetch(`${baseUrl}/users/${userName}`)

            if (!response.ok) {
                profileResults.innerHTML = '';
                alert('Usuário não encontrado!');
                return;
            }
            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="${userData.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2 class="profile-name">${userData.name}</h2>
                        <p class="profile-bio">${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
                    </div>
                </div>
            `

        } catch (error) {
            profileResults.innerHTML = '';
            console.error('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.')
    }
});
