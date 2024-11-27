document.addEventListener("DOMContentLoaded", () => {
    const paymentSelect = document.getElementById("payment");
    const paymentDetails = document.getElementById("payment-details");
    const checkoutForm = document.getElementById("checkout-form");

    const generateBoletoCode = () => {
        let boleto = "";
        for (let i = 0; i < 13; i++) {
            boleto += Math.floor(Math.random() * 10);
        }
        return boleto;
    };

    const updatePaymentDetails = (method) => {
        paymentDetails.innerHTML = ""; 

        if (method === "credit") {
            paymentDetails.innerHTML = `
                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>

                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" placeholder="MM/YY" required>

                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" required>
            `;
        } else if (method === "pix") {
            paymentDetails.innerHTML = `
                <p>Scan the QR code below to complete your payment:</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" target="_blank">
                    <img src="assets/images/qr-code-placeholder.png" alt="Pix QR Code" style="width: 200px; height: 200px;">
                </a>
            `;
        } else if (method === "boleto") {
            const boletoCode = generateBoletoCode();
            paymentDetails.innerHTML = `
                <p>Your boleto code is:</p>
                <strong style="font-size: 1.2rem; color: #333;">${boletoCode}</strong>
            `;
        }
    };

    paymentSelect.addEventListener("change", (e) => {
        updatePaymentDetails(e.target.value);
    });

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
        window.location.href = "/tela/index"; 
    });
});
