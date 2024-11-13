// Referência aos elementos
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const closeCartButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout');
// Elementos de login
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Simula itens do carrinho para demonstração (podem ser carregados do banco de dados no futuro)
let cart = [];

// Função para abrir/fechar o carrinho
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
    updateCartUI();
});

// Função para fechar o carrinho
closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Função para atualizar a interface do carrinho
function updateCartUI() {
    cartItems.innerHTML = '';  // Limpa os itens do carrinho
    cart.forEach(item => {
        const li = document.createElement('li');
        
        const itemContent = document.createElement('span');
        itemContent.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        
        // Controles de quantidade (para adicionar e remover itens)
        const controls = document.createElement('div');
        controls.classList.add('cart-item-controls');
        
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', () => {
            item.quantity += 1;
            updateCartUI();
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== item.id);
            }
            updateCartUI();
        });

        controls.appendChild(removeButton);
        controls.appendChild(addButton);

        li.appendChild(itemContent);
        li.appendChild(controls);
        
        cartItems.appendChild(li);
    });
}


// Evento de checkout (futuro: integração com banco de dados ou lógica de pagamento)
checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada!');
    cart = [];  // Limpa o carrinho
    updateCartUI();
    cartSidebar.classList.remove('open');  // Fecha o carrinho
});

//Lógica do login//
// Dados de login simulados (para teste, sem segurança)
const validUser = { username: "usuario123", password: "senha123" };

// Evento de login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores inseridos pelo usuário
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Verifica se o login é válido
    if (enteredUsername === validUser.username && enteredPassword === validUser.password) {
        alert("Login bem-sucedido!");
        window.location.href = "C:/Users/ehosh/Documents/_ProgWebJane/Trabalho/TelaPrincipal/TelaPrincipal.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});