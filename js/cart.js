let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");

const total = document.getElementById("totalPrice");

function displayCart(){

container.innerHTML="";

let grandTotal=0;

cart.forEach((item,index)=>{

grandTotal += item.price;

container.innerHTML += `

<div class="card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>$${item.price}</p>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

total.innerHTML="Grand Total : $" + grandTotal;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

displayCart();