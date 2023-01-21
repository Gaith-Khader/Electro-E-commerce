// const getData = "https://fakestoreapi.com/products/category/electronics";
// let products = [];
// let viewData = document.getElementById("viewData");

// async function getProduct(){
//     let response = await fetch(getData);
//     products = await response.json();
//     console.log(products);
//     display();
// }

// getProduct();

// function display(){
//     let data = '';
//     products.forEach(product=>{
//         data +=`
//         <div class="col-md-3">
//             <div class="product">
//                 <div class="offer d-flex justify-content-end p-2">
//                     <div class="discount">
//                         <span class="price-discount me-1">-30%</span>
//                     </div>
//                     <div class="new-box">
//                         <span class="text-uppercase new">new</span>
//                     </div>
//                 </div>
//                 <div class="product-img">
//                     <img src="${product.image}" alt="laptop1" class="w-100">
//                 </div>
//                 <div class="product-body d-flex flex-column justify-content-center align-items-center">
//                     <p class="text-uppercase product-cat pb-1">category</p>
//                     <a class="text-uppercase product-title py-1">${product.title}</a>
//                     <div class="price py-1">
//                         <span class="new">$1199.99</span>
//                         <span class="old text-decoration-line-through">$1800.00</span>
//                     </div>
//                     <div class="product-rate py-1">
//                         <i class="fa-regular fa-star fill"></i>
//                         <i class="fa-regular fa-star fill"></i>
//                         <i class="fa-regular fa-star fill"></i>
//                         <i class="fa-regular fa-star fill"></i>
//                         <i class="fa-regular fa-star fill"></i>
//                     </div>
//                     <div class="product-icons p-3">
//                         <i class="fa-regular fa-heart me-4 heart">
//                             <span class="text-uppercase wishlist">add to wishlist</span>
//                         </i>
//                         <i class="fa-solid fa-right-left me-4 arrow">
//                             <span class="text-uppercase compare">add to compare</span>
//                         </i>
//                             <i class="fa-regular fa-eye eye">
//                                 <span class="text-uppercase view">quick view</span>
//                             </i>
//                     </div>
//                 </div>
//                 <div class="add-cart">
//                         <a href="#" class="text-uppercase"><i class="fa-solid fa-cart-shopping"></i> add to cart</a>
//                 </div>
//             </div>
//         </div>
//         `
//     })
//     viewData.innerHTML=data;
// }
