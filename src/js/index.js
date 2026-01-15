import { fetchGitHubUser } from './api.js';
import { showLoading, showProfile, showError } from './dom.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }
    showLoading(profileResults);
    try {
        const userData = await fetchGitHubUser(userName);
        if (!userData) {
            showError(profileResults, 'Usuário não encontrado!');
            return;
        }
        showProfile(profileResults, userData);
    } catch (error) {
        showError(profileResults, 'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
        console.error('Erro ao buscar o perfil do usuário:', error);
    }
});
