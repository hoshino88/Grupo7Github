document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    // tem q substituir aqui, esses são pra teste
    let cart = [
        { id: 1, title: "The Hobbit", price: 12.99, image: "assets/images/hobbit.jpg" },
        { id: 2, title: "The Silmarillion", price: 15.49, image: "assets/images/silmarillion.jpg" },
    ];

    const renderCart = () => {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item) => {
            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <span>${item.title}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(itemEl);
            totalPrice += item.price;
        });

        totalPriceEl.textContent = totalPrice.toFixed(2);
    };

    checkoutBtn.addEventListener("click", () => {
        alert("Redirecionando para a página de checkout...");
        window.location.href = "/tela/checkout";
    });

    renderCart();
});
