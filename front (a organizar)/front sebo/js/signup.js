const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup-btn");

const hintItems = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special"),
};

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

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Conta criada com sucesso!");
});
