// Referência aos elementos
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const closeCartButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout');

// Simula itens do carrinho para demonstração (podem ser carregados do banco de dados no futuro)
let cart = [
    { id: '1', name: 'Produto Exemplo 1', price: 20.00, quantity: 1 },
    { id: '2', name: 'Produto Exemplo 2', price: 30.00, quantity: 2 }
];

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
