const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup-btn");

const hintItems = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special"),
};

// Validação da senha
const validatePassword = () => {
    const value = password.value;
    let isValid = true;

    if (value.length >= 8) {
        hintItems.length.classList.remove("invalid");
        hintItems.length.classList.add("valid");
    } else {
        hintItems.length.classList.remove("valid");
        hintItems.length.classList.add("invalid");
        isValid = false;
    }

    if (/[A-Z]/.test(value)) {
        hintItems.uppercase.classList.remove("invalid");
        hintItems.uppercase.classList.add("valid");
    } else {
        hintItems.uppercase.classList.remove("valid");
        hintItems.uppercase.classList.add("invalid");
        isValid = false;
    }

    if (/\d/.test(value)) {
        hintItems.number.classList.remove("invalid");
        hintItems.number.classList.add("valid");
    } else {
        hintItems.number.classList.remove("valid");
        hintItems.number.classList.add("invalid");
        isValid = false;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        hintItems.special.classList.remove("invalid");
        hintItems.special.classList.add("valid");
    } else {
        hintItems.special.classList.remove("valid");
        hintItems.special.classList.add("invalid");
        isValid = false;
    }

    return isValid;
};

// Validação do formulário
const validateForm = () => {
    const isPasswordValid = validatePassword();
    const isConfirmMatch = password.value === confirmPassword.value;

    if (isPasswordValid && isConfirmMatch) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
};

password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);

// Envio do formulário
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Dados do formulário
    const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    // Requisição ao backend
    fetch("/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (response.ok) {
                alert("Conta criada com sucesso!");
                window.location.href = "/tela/login"; // Redireciona para a tela de login
            } else {
                response.text().then((message) => alert(`Erro: ${message}`));
            }
        })
        .catch((error) => {
            alert("Erro ao se conectar ao servidor. Tente novamente mais tarde.");
            console.error(error);
        });
});
