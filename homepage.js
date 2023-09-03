//Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

//Creating header
var clothingGrid = document.getElementById("clothing-grid")
var accessoriesGrid = document.getElementById("accessories-grid")
var headerElement = document.getElementById("header")
headerElement.innerHTML +=`
        <nav id="topbar">
            <div id="left-menu">
                <div id="logo">
                    <a href="index.html">
                        <span>shop</span>lane
                    </a>
                </div>
                <a href="#clothing-section">Clothing</a>
                <a href="#accessories-section">Accessories</a>
            </div>
            <div id="search-wrapper">
                <i  class="fas fa-search" aria-hidden="true"></i>
                <input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories"/>
            </div>
            <div id="right-menu">
                <div id="cart-wrapper">
                    <p id="cart-count">0</p>
                    <a href="checkout.html">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </div>
                <img src="https://test-hosting-8f9bf.web.app/assets/avatar.jpg"/>
            </div>
        </nav>
        `
//Getting data from the api and adding content to the elements
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
    var productData = response
    for(var i = 0 ; i<productData.length;i++){
        if(productData[i].isAccessory == false){
            clothingGrid.innerHTML +=
            `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
                <a href="productdetails.html?p=${productData[i].id}">
                    <img src="${productData[i].preview}" class="product-image1"/>
                </a>
                <div class="product-meta">
                    <h4>${productData[i].name}</h4>
                    <h5>${productData[i].brand}</h5>
                    <p>Rs ${productData[i].price}</p>
                </div>
            </div>`
        }else{
            accessoriesGrid.innerHTML +=
            `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
                <a href="productdetails.html?p=${productData[i].id}">
                    <img src="${productData[i].preview}" class="product-image1"/>
                </a>
                <div class="product-meta">
                    <h4>${productData[i].name}</h4>
                    <h5>${productData[i].brand}</h5>
                    <p>Rs ${productData[i].price}</p>
                </div>
            </div>`

        }
    }
})

//Creating footer
var footerElement = document.getElementById("footer")
footerElement.innerHTML+=`
        <div>
            <p id="footer-heading">Online store</p>
            <a href="" class="footer-link">Men Clothing</a>
            <a href="" class="footer-link">Women Clothing</a>
            <a href="" class="footer-link">Men Accessories</a>
            <a href="" class="footer-link">Women Accessories</a>
        </div>
        <div>
            <p id="footer-heading">Helpful Links</p>
            <a href="" class="footer-link">Home</a>
            <a href="" class="footer-link">About</a>
            <a href="" class="footer-link">Contact</a>
        </div>
        <div>
            <p id="footer-heading">Partners</p>
            <a href="" class="footer-link">Zara</a>
            <a href="" class="footer-link">PANTALOONS</a>
            <a href="" class="footer-link">LEVIS</a>
            <a href="" class="footer-link">Ucb</a>
            <a href="" class="footer-link">+ Many more</a>
        </div>
        <div>
            <p id="footer-heading">Address</p>
            <p class="footer-link">Building 101</p>
            <p class="footer-link">Central Avenue</p>
            <p class="footer-link">LA - 902722</p>
            <p class="footer-link">UNITED STATES</p>
        </div>
`
//pushing id of the product to the localStorage and 
function clickedOnTheProduct(id){
    localStorage.setItem("id",id)
}

var count = JSON.parse(localStorage.getItem("cartitemscount"))
if(count == null){
    cartCount.textContent = 0;
}
var cartCount = document.getElementById("cart-count")
cartCount.textContent = count;