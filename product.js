const products = [

{
id:1,
name:"Laptop",
price:799,
image:"assets/images/laptop.webp",
description:"Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD.",
rating:"⭐⭐⭐⭐⭐"
},

{
id:2,
name:"Headphones",
price:99,
image:"assets/images/headphone.webp",
description:"Wireless Bluetooth headphones with noise cancellation.",
rating:"⭐⭐⭐⭐"
},

{
id:3,
name:"Mobile",
price:499,
image:"assets/images/mobile.webp",
description:"6.5-inch smartphone with 128GB storage and 5G support.",
rating:"⭐⭐⭐⭐⭐"
}

];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

const details = document.getElementById("productDetails");

if(product){

details.innerHTML = `

<div class="details-card">

<img 
src="${product.image}" 
loading="lazy" 
alt="${product.name}">
<h1>${product.name}</h1>

<h2>$${product.price}</h2>

<p>${product.description}</p>

<h3>${product.rating}</h3>

<button onclick="history.back()">
Back
</button>

</div>

`;

}