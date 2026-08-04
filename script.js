/*=========================================
        TADIE4ENT BUSINESS APP
=========================================*/

/*=========================================
        APP SETTINGS
=========================================*/

const APP_MODE = "FULL";     // TRIAL or FULL

const TRIAL_DAYS = 7;

const OWNER = "TaDie4ENT";

const STORE_NAME = "Forever Solid";

const STORE_PHONE = "9032629694";

const BUSINESS_PRICE = 750;

/*=========================================
        LOCAL STORAGE KEYS
=========================================*/

const CART_KEY = "fs_cart";

const FAVORITES_KEY = "fs_favorites";

const INSTALL_KEY = "fs_install_date";

const ORDER_KEY = "lastOrder";

/*=========================================
        GLOBAL VARIABLES
=========================================*/

let cart = JSON.parse(

localStorage.getItem(CART_KEY)

) || [];

let favorites = JSON.parse(

localStorage.getItem(FAVORITES_KEY)

) || [];

/*=========================================
        SAVE CART
=========================================*/

function saveCart(){

  localStorage.setItem(
"fs_cart",
JSON.stringify(cart)
); 

}

/*=========================================
        SAVE FAVORITES
=========================================*/

function saveFavorites(){

    localStorage.setItem(

        FAVORITES_KEY,

        JSON.stringify(favorites)

    );

}

/*=========================================
        INSTALL DATE
=========================================*/

function setInstallDate(){

    if(!localStorage.getItem(INSTALL_KEY)){

        localStorage.setItem(

            INSTALL_KEY,

            new Date().getTime()

        );

    }

}

/*=========================================
        DAYS USED
=========================================*/

function getDaysUsed(){

    const install = Number(

        localStorage.getItem(INSTALL_KEY)

    );

    const today = new Date().getTime();

    return Math.floor(

        (today-install)/(1000*60*60*24)

    );

}

/*=========================================
        START APP
=========================================*/

setInstallDate();

/*=========================================
        TRIAL CHECK
=========================================*/

function checkTrial(){

    if(APP_MODE === "FULL"){

        return;

    }

    const daysUsed = getDaysUsed();

    if(daysUsed >= TRIAL_DAYS){

        showTrialExpired();

    }

}

/*=========================================
        TRIAL EXPIRED PAGE
=========================================*/

function showTrialExpired(){

document.body.innerHTML = `

<div class="trial-screen">

<div class="trial-box">

<h1>

TaDie4ENT

</h1>

<h2>

Your 7-Day Trial Has Ended

</h2>

<p>

Thank you for trying this custom business app.

</p>

<p>

Ready to own your own custom business app?

</p>

<hr>

<h2>

Business App

</h2>

<h1>

Starting at $750

</h1>

<h3>

💳 Payment Plans Available

</h3>

<hr>

<h2>

Add-On Services

</h2>

<ul>

<li>Additional Pages - Starting at $50</li>

<li>New Features - Starting at $75</li>

<li>Online Payments - Starting at $150</li>

<li>Appointment Booking - Starting at $175</li>

<li>Inventory Management - Starting at $250</li>

<li>Maintenance & Updates - Custom Quote</li>

</ul>

<hr>

<h2>

Need An App For Your Business?

</h2>

<p>

✔ Clothing Brands<br>

✔ Tattoo Shops<br>

✔ Lash Studios<br>

✔ Restaurants<br>

✔ Churches<br>

✔ Small Businesses

</p>

<div class="trial-buttons">

<a

class="big-red-button"

href="sms:${STORE_PHONE}?body=Hi%20TaDie4ENT!%20I'm%20interested%20in%20purchasing%20a%20custom%20business%20app.">

📱 Text Me

</a>

<a

class="big-green-button"

href="mailto:tysharrettaturner@gmail.com"

📧 Email Me

</a>

</div>

<p style="margin-top:40px;">

Designed by

<strong>

TaDie4ENT

</strong>

</p>

</div>

</div>

`;

}

/*=========================================
        START TRIAL
=========================================*/

checkTrial();

/*=========================================
        ADD TO CART
=========================================*/
function addToCart(){
        
const cart = JSON.parse(localStorage.getItem("fs_cart")) || [];

const price = Number(document.getElementById("productPrice").innerHTML);

const quantity = Number(document.getElementById("quantity").value);


const item = {

id: product.id,

name: product.name,

image: product.image,

price: price,

total: price * quantity,

size: document.getElementById("size").value,

color: document.getElementById("color").value,

quantity: quantity,

delivery: document.querySelector('input[name="delivery"]:checked').value,

address: document.getElementById("address").value,

city: document.getElementById("city").value,

state: document.getElementById("state").value,

zip: document.getElementById("zip").value,

notes: document.getElementById("notes").value

};


cart.push(item);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Added to Cart!");


window.location.href = "cart.html";

}

/*=========================================
        REMOVE FROM CART
=========================================*/

function removeFromCart(index){

    cart.splice(index,1);

    saveCart();

    updateCart();

}

/*=========================================
        CLEAR CART
=========================================*/

function clearCart(){

    if(confirm("Remove all items from your cart?")){

        cart = [];

        saveCart();

        updateCart();

    }

}

/*=========================================
        UPDATE CART
=========================================*/

function updateCart(){

    const cartContainer = document.getElementById("cartItems");

    const itemCount = document.getElementById("itemCount");

    const subtotal = document.getElementById("subtotal");

    const grandTotal = document.getElementById("grandTotal");

    const emptyCart = document.getElementById("emptyCart");

    if(!cartContainer) return;

    cartContainer.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        if(emptyCart){

            emptyCart.style.display = "block";

        }

        itemCount.innerHTML = "0";

        subtotal.innerHTML = "$0.00";

        grandTotal.innerHTML = "$0.00";

        updateCartBadge();

        return;

    }

    if(emptyCart){

        emptyCart.style.display = "none";

    }

    cart.forEach((item,index)=>{

        total += item.total;

        cartContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" class="cart-image" alt="${item.name}">

            <div class="cart-details">

                <h3>${item.name}</h3>

                <p><strong>Size:</strong> ${item.size}</p>

                <p><strong>Color:</strong> ${item.color}</p>

                <p><strong>Quantity:</strong> ${item.quantity}</p>

                <p><strong>Price:</strong> $${item.price}</p>

                <h2>$${item.total.toFixed(2)}</h2>

                <div class="quantity-buttons">

                    <button onclick="decreaseQuantity(${index})">

                    ➖

                    </button>

                    <button onclick="increaseQuantity(${index})">

                    ➕

                    </button>

                </div>

                <button

                class="remove-button"

                onclick="removeFromCart(${index})">

                🗑 Remove

                </button>

            </div>

        </div>

        `;

    });

    itemCount.innerHTML = cart.length;

    subtotal.innerHTML = "$" + total.toFixed(2);

    grandTotal.innerHTML = "$" + total.toFixed(2);

    updateCartBadge();

}

/*=========================================
        INCREASE QUANTITY
=========================================*/

function increaseQuantity(index){

    cart[index].quantity++;

    cart[index].total =

    cart[index].price *

    cart[index].quantity;

    saveCart();

    updateCart();

}

/*=========================================
        DECREASE QUANTITY
=========================================*/

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

        cart[index].total =

        cart[index].price *

        cart[index].quantity;

        saveCart();

        updateCart();

    }

}

/*=========================================
        CART BADGE
=========================================*/

function updateCartBadge(){

    const badge = document.getElementById("cartBadge");

    if(!badge) return;

    let totalItems = 0;

    cart.forEach(item=>{

        totalItems += item.quantity;

    });

    badge.innerHTML = totalItems;

}

/*=========================================
        CALCULATE CART TOTAL
=========================================*/

function calculateCartTotal(){

    let total = 0;

    cart.forEach(item=>{

        total += item.total;

    });

    return total;

}

/*=========================================
        PLACE ORDER
=========================================*/

function placeOrder(){

    if(cart.length === 0){

        alert("Your cart is empty.");

        return;

    }

    const order = {

        orderNumber:
        "FS" + Math.floor(100000 + Math.random() * 900000),

        date:
        new Date().toLocaleDateString(),

        firstName:
        document.getElementById("firstName").value,

        lastName:
        document.getElementById("lastName").value,

        phone:
        document.getElementById("phone").value,

        email:
        document.getElementById("email").value,

        delivery:
        document.getElementById("deliveryMethod").value,

        address:
        document.getElementById("address").value,

        city:
        document.getElementById("city").value,

        state:
        document.getElementById("state").value,

        zip:
        document.getElementById("zip").value,

        notes:
        document.getElementById("notes").value,

        items:
        cart,

        total:
        calculateCartTotal()

    };

    localStorage.setItem(

        ORDER_KEY,

        JSON.stringify(order)

    );

    cart = [];

    saveCart();

    window.location.href = "receipt.html";

}

/*=========================================
        LOAD RECEIPT
=========================================*/

function loadReceipt(){

    const order = JSON.parse(

        localStorage.getItem(ORDER_KEY)

    );

    if(!order) return;

    document.getElementById("orderNumber").innerHTML =
    order.orderNumber;

    document.getElementById("orderDate").innerHTML =
    order.date;

    document.getElementById("customerName").innerHTML =
    order.firstName + " " + order.lastName;

    document.getElementById("customerPhone").innerHTML =
    order.phone;

    document.getElementById("customerEmail").innerHTML =
    order.email;

    document.getElementById("receiptDelivery").innerHTML =
    order.delivery;

    document.getElementById("receiptTotal").innerHTML =
    "$" + order.total.toFixed(2);

    const receiptItems =
    document.getElementById("receiptItems");

    receiptItems.innerHTML = "";

    order.items.forEach(item=>{

        receiptItems.innerHTML += `

        <div class="receipt-item">

            <strong>${item.name}</strong><br>

            Size: ${item.size}<br>

            Color: ${item.color}<br>

            Quantity: ${item.quantity}<br>

            Price: $${item.price}<br>

            Total: $${item.total.toFixed(2)}

        </div>

        <hr>

        `;

    });

}

/*=========================================
        PRINT RECEIPT
=========================================*/

function printReceipt(){

    window.print();

}

/*=========================================
        SEND TEXT ORDER
=========================================*/

function sendTextOrder(){

    const order = JSON.parse(

        localStorage.getItem(ORDER_KEY)

    );

    if(!order){

        alert("No order found.");

        return;

    }

    let message =

`🛍 FOREVER SOLID ORDER

Order #: ${order.orderNumber}

Customer:
${order.firstName} ${order.lastName}

Phone:
${order.phone}

Email:
${order.email}

Delivery:
${order.delivery}

--------------------------------
`;

    order.items.forEach(item=>{

        message +=

`${item.name}

Size: ${item.size}

Color: ${item.color}

Qty: ${item.quantity}

Total: $${item.total}

------------------------------
`;

    });

    message +=

`

Grand Total:
$${order.total.toFixed(2)}

Thank you!

`;

    window.location.href =

`sms:${STORE_PHONE}?body=${encodeURIComponent(message)}`;

}

/*=========================================
        FAVORITES
=========================================*/

function toggleFavorite(productId){

    const index = favorites.indexOf(productId);

    if(index === -1){

        favorites.push(productId);

        alert("❤️ Added to Favorites");

    }else{

        favorites.splice(index,1);

        alert("Removed from Favorites");

    }

    saveFavorites();

    updateFavoriteIcons();

}

/*=========================================
        UPDATE FAVORITE ICONS
=========================================*/

function updateFavoriteIcons(){

    document.querySelectorAll(".favorite-btn").forEach(button=>{

        const id = button.dataset.id;

        if(favorites.includes(id)){

            button.innerHTML = "❤️";

        }else{

            button.innerHTML = "🤍";

        }

    });

}


/*=========================================
        FILTER PRODUCTS
=========================================*/

function filterProducts(category){

    document
    .querySelectorAll(".product-card")
    .forEach(card=>{

        if(category === "All"){

            card.style.display = "";

            return;

        }

        if(card.dataset.category === category){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

}

/*=========================================
        BACK TO TOP
=========================================*/

function backToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/*=========================================
        PRODUCT PRICE
=========================================*/

function calculatePrice(product,size){

    if(

        size==="2XL" ||

        size==="3XL" ||

        size==="4XL"

    ){

        return product.priceLarge;

    }

    return product.priceSmall;

}

/*=========================================
        VIEW PRODUCT
=========================================*/

function viewProduct(productId){

    localStorage.setItem(

        "selectedProduct",

        productId

    );

    window.location.href = "product.html?id=" + productId;

}

/*=========================================
        APP STARTUP
=========================================*/

document.addEventListener(

"DOMContentLoaded",

function(){

    updateCartBadge();

    updateFavoriteIcons();

    checkTrial();

    if(document.getElementById("cartItems")){

        updateCart();

    }

    if(document.getElementById("receiptItems")){

        loadReceipt();

    }

});

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});
