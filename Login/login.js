const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Mostrar/ocultar senha
togglePassword.addEventListener('change', function () {
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Validação simples de usuário e senha
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = passwordInput.value.trim();

    if (username === 'rosiel.ferreira' && password === 'ferreira2025') {
        alert('Login bem-sucedido! Bem-vindo, ' + username);
        sessionStorage.setItem('logado', 'true');
        window.location.href = "/PDV-locacao/locacao/locacao.html"; // caminho absoluto correto
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
