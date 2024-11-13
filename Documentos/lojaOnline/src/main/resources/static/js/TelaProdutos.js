// Referência aos elementos
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const closeCartButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout');

// Lista para armazenar itens temporariamente
let cart = [];

// Função para abrir/fechar o carrinho
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

// Função para adicionar um item ao carrinho
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = e.target.closest('.produto-item');
        const itemId = item.getAttribute('data-id');
        const itemName = item.getAttribute('data-name');
        const itemPrice = parseFloat(item.getAttribute('data-price')).toFixed(2);

        // Verifica se o item já está no carrinho
        const existingItem = cart.find(i => i.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
        }

        // Atualiza a lista no carrinho
        updateCartUI();
    });
});

// Função para atualizar o carrinho na interface
function updateCartUI() {
    cartItems.innerHTML = ''; // Limpa o carrinho
    cart.forEach(item => {
        const li = document.createElement('li');
        
        // Cria o conteúdo do item com nome e preço
        const itemContent = document.createElement('span');
        itemContent.textContent = `${item.name} - R$ ${item.price} x ${item.quantity}`;
        
        // Cria os botões de controle de quantidade
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
                // Remove o item do carrinho se a quantidade for 0
                cart = cart.filter(i => i.id !== item.id);
            }
            updateCartUI();
        });

        // Adiciona os botões ao controle
        controls.appendChild(removeButton);
        controls.appendChild(addButton);
        
        // Adiciona conteúdo e controles ao item da lista
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

// Função para fechar o carrinho ao clicar no botão "Fechar"
closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});
