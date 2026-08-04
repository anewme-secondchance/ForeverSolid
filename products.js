/*=========================================
        FOREVER SOLID PRODUCTS
=========================================*/

const products = [
/*=========================================
        FOREVER SOLID T-SHIRT COLLECTION
=========================================*/

{
    id: "fs-shirt",
    brand: "Forever Solid",
    name: "Forever Solid T-Shirt Collection",
    category: "Shirts",
    gallery: [
        "images/IMG_FS3.png",
        "images/IMG_FS4.jpg",
        "images/IMG_FS9.jpg",
        "images/IMG_FS11.jpg",
        "images/IMG_FS22.jpg"
    ],
    image: "images/IMG_FS3.png",
    description: "Customize your Forever Solid T-Shirt Collection",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

/*=========================================
        FOREVER SOLID PARENT + BABY MATCHING
=========================================*/

{
    id: "fs-family",
    brand: "Forever Solid",
    name: "Forever Solid Parent + Baby Matching Set",
    category: "Family Matching",
    gallery: [
        "images/IMG_FS12.jpg",
        "images/IMG_FS17.jpg"
    ],
    image: "images/IMG_FS12.jpg",
    description: "Matching parent t-shirt and baby onesie collection. Customize your sizes, colors, and design.",
    priceSmall: 45,
    priceLarge: 50,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

        /*=========================================
        FOREVER SOLID HOODIES & LONG SLEEVES
=========================================*/

{
    id: "fs-outerwear",
    brand: "Forever Solid",
    name: "Forever Solid Hoodies & Long Sleeve Collection",
    category: "Hoodies & Long Sleeve",
    gallery: [
        "images/IMG_FS1.jpg",
        "images/IMG_FS2.jpg",
        "images/IMG_FS7.jpg",
        "images/IMG_FS8.jpg",
        "images/IMG_FS18.jpg",
        "images/IMG_FS19.jpg",
        "images/IMG_FS20.jpg",
        "images/IMG_FS23.jpg",
        "images/IMG_FSHMP1.jpg"
    ],
    image: "images/IMG_FS7.jpg",
    description: "Customize your Forever Solid hoodie or long sleeve. Choose style, color, and size.",
    priceSmall: 40,
    priceLarge: 60,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

        /*=========================================
        FOREVER SOLID SHORTS & SETS
=========================================*/

{
    id: "fs-sets",
    brand: "Forever Solid",
    name: "Forever Solid Shorts & Sets Collection",
    category: "Shorts & Sets",
    gallery: [
        "images/IMG_FS14.jpg",
        "images/IMG_FS15.jpg",
        "images/IMG_FS16.jpg",
        "images/IMG_FS24.jpg",
        "images/IMG_FS25.jpg"
    ],
    image: "images/IMG_FS14.jpg",
    description: "Customize your Forever Solid shorts, short sets, or hoodie sets. Choose style, color, and size.",
    priceSmall: 30,
    priceLarge: 80,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},
/*=========================================
        GREEN BOX BABY PRODUCTS
=========================================*/

{
    id: "gb1",
    brand: "Green Box Baby",
    name: "Green Box Baby Black Graphic Tee",
    category: "Shirts",
    image: "images/IMG_GREENBOX1.jpg",
    description: "Green Box Baby Graphic Collection Tee",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

{
    id: "gb2",
    brand: "Green Box Baby",
    name: "Green Box Baby Classic Black Tee",
    category: "Shirts",
    image: "images/IMG_GREENBOX2.jpg",
    description: "Green Box Baby Classic Collection Tee",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

{
    id: "gb3",
    brand: "Green Box Baby",
    name: "Green Box Baby Green Logo Tee",
    category: "Shirts",
    image: "images/IMG_GREENBOX3.jpg",
    description: "Green Box Baby Signature Tee",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

{
    id: "gb4",
    brand: "Green Box Baby",
    name: "Green Box Baby Blue Collection Tee",
    category: "Shirts",
    image:"images/IMG_GREENBOX4.jpg",
    description: "Green Box Baby Premium Graphic Tee",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

{
    id: "gb5",
    brand: "Green Box Baby",
    name: "Green Box Baby Story Tee",
    category: "Shirts",
    image: "images/IMG_GREENBOX5.jpg",
    description: "Green Box Baby Story Collection Tee",
    priceSmall: 35,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
},

{
    id: "gb6",
    brand: "Green Box Baby",
    name: "Green Box Baby Shorts",
    category: "Shorts",
    image: "images/IMG_GREENBOX6.jpg",
    description: "Green Box Baby Premium Shorts",
    priceSmall: 30,
    priceLarge: 40,
    stock: 50,
    featured: false,
    newArrival: false,
    bestSeller: false
}

];        

   
/*=========================================
        PRODUCT HELPERS
=========================================*/

function getProduct(productId){

    return products.find(product => product.id === productId);

}

function getProductsByBrand(brand){

    return products.filter(product => product.brand === brand);

}

function getProductsByCategory(category){

    if(category === "All"){

        return products;

    }

    return products.filter(product => product.category === category);

}

function searchProductList(searchText){

    const search = searchText.toLowerCase();

    return products.filter(product =>

        product.name.toLowerCase().includes(search) ||

        product.category.toLowerCase().includes(search) ||

        product.brand.toLowerCase().includes(search)

    );

}

function getFeaturedProducts(){

    return products.filter(product => product.featured);

}

function getBestSellers(){

    return products.filter(product => product.bestSeller);

}

function getNewArrivals(){

    return products.filter(product => product.newArrival);

}

/*=========================================
        APP READY
=========================================*/

console.log("===================================");

console.log("Forever Solid Products Loaded");

console.log("Total Products:", products.length);

console.log("Forever Solid:",
    getProductsByBrand("Forever Solid").length);

console.log("Green Box Baby:",
    getProductsByBrand("Green Box Baby").length);

console.log("===================================");
