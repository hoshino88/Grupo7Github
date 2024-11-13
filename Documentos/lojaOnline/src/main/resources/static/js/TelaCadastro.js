// Seleciona o formulário e os campos de entrada
const form = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Valida o nome de usuário
    if (usernameInput.value.length < 4) {
        showError("O nome de usuário deve ter pelo menos 4 caracteres.");
        return;
    }

    // Valida a senha
    if (passwordInput.value.length < 8) {
        showError("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    // Verifica se as senhas coincidem
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError("As senhas não coincidem.");
        return;
    }

    // Limpa a mensagem de erro e redireciona para a TelaPrincipal
    errorMessage.style.display = "none";
    alert("Cadastro realizado com sucesso!");
    window.location.href = "C:\\Users\\ehosh\\Documents\\_ProgWebJane\\Trabalho\\TelaPrincipal\\TelaPrincipal.html";
});

// Função para exibir mensagens de erro
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
