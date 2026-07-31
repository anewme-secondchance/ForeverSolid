/* =====================================
   FOREVER SOLID APP
   script.js
===================================== */

// Home Buttons

function openForeverSolid() {
    window.location.href = "pages/shop.html";
}

function openGreenBox() {
    window.location.href = "pages/greenbox.html";
}

// Bottom Navigation

function goHome() {
    window.location.href = "../index.html";
}

function goShop() {
    window.location.href = "shop.html";
}

function goOrder() {
    window.location.href = "order.html";
}

function goPayment() {
    window.location.href = "payment.html";
}

// Product Page

function viewProduct(productId) {
    localStorage.setItem("selectedProduct", productId);
    window.location.href = "product.html";
}

// Place Order

function placeOrder() {
    window.location.href = "order.html";
}

// Green Box

function openGreenProduct(productId) {
    localStorage.setItem("selectedGreenProduct", productId);
    window.location.href = "product.html";
}

// Hats

function openHat(productId) {
    localStorage.setItem("selectedHat", productId);
    window.location.href = "product.html";
}

// Scroll to Top

function topPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
