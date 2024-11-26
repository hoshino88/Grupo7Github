document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".book-card button");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const bookId = button.parentElement.getAttribute("data-id");
            alert(`Livro ${bookId} adicionado ao carrinho`);
        });
    });
});
