const products = [

{
id:1,
name:"Laptop",
category:"Electronics",
price:799,
image:"assets/images/laptop.webp",
rating:5
},

{
id:2,
name:"Headphones",
category:"Accessories",
price:99,
image:"assets/images/headphone.webp",
rating:4
},

{
id:3,
name:"Mobile",
category:"Electronics",
price:499,
image:"assets/images/mobile.webp",
rating:5
}

];


const container =
document.getElementById("productContainer");


function displayProducts(productList){

container.innerHTML="";


productList.forEach(product=>{


let stars="";


for(let i=0;i<product.rating;i++){

stars+="⭐";

}


container.innerHTML+=`

<div class="card">


<img 
src="${product.image}"
loading="lazy"
alt="${product.name}">

<h3>${product.name}</h3>


<p>Category:
${product.category}
</p>


<p>$${product.price}</p>


<p>${stars}</p>



<button onclick="viewProduct(${product.id})">

View Details

</button>



<button onclick="addWishlist(${product.id})">

❤️ Wishlist

</button>



<button onclick="addToCart(${product.id})">

Add Cart

</button>



</div>

`;

});


}



displayProducts(products);



// Search Function


document
.getElementById("searchBox")
.addEventListener("keyup",function(){


let value=this.value.toLowerCase();


let filtered=products.filter(product=>


product.name
.toLowerCase()
.includes(value)


);


displayProducts(filtered);


});




// Category Filter


document
.getElementById("categoryFilter")
.addEventListener("change",function(){


let category=this.value;



if(category==="all"){

displayProducts(products);

}

else{


let filtered=products.filter(product=>

product.category===category

);


displayProducts(filtered);


}


});





function viewProduct(id){

window.location.href=
`product.html?id=${id}`;

}





function addWishlist(id){


let wishlist=
JSON.parse(localStorage.getItem("wishlist"))
|| [];



let product=
products.find(item=>item.id===id);



wishlist.push(product);



localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);



alert("Added to Wishlist ❤️");


}





function addToCart(id){


let cart=
JSON.parse(localStorage.getItem("cart"))
|| [];



let product=
products.find(item=>item.id===id);



cart.push(product);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert("Added to Cart 🛒");


}