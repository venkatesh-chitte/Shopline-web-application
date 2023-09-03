//creating Header
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
                    <p id="cart-count"> 0 </p>
                    <a href="checkout.html">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </div>
                <img src="https://test-hosting-8f9bf.web.app/assets/avatar.jpg"/>
            </div>
        </nav>
        `

//Creating Footer
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

//getting id of the product from local storage
var idInLocalStorage = localStorage.getItem("id")
var productWrapperElement = document.getElementById("product-wrapper")
//geting data from the api add adding the content to the elements
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+idInLocalStorage,function(response){
    var productDetailsSection = response
    productWrapperElement.innerHTML += `
                <div id="product-image">
                    <div id="image-wrapper">
                        <img id="product-preview" src=${productDetailsSection.preview} />
                    </div>
                </div>
                <div id="product-details">
                    <h1 id="product-title">
                        ${productDetailsSection.name}
                    </h1>
                    <h1 id="product-brand">${productDetailsSection.brand}</h1>
                    <h4 class="section-heading1">Price: Rs <p id="product-price">${productDetailsSection.price}</p></h4>
                    <h4 class="section-heading1 section-heading2">Description</h4>
                    <p id="description">${productDetailsSection.description}</p>
                    <h4 class="section-heading1">Product Preview</h4>   
                    <div id="product-images">
    
                    </div>
                    <button id="btn-add-to-cart" onclick="addToCart()">Add to Cart</button>
                </div>`
//looping and adding the small images to the web page
    var productImages = document.getElementById("product-images");
    for(var i = 0 ; i < productDetailsSection.photos.length ; i++){
        if(i==0){
            productImages.innerHTML += `
        <img src=${productDetailsSection.photos[i]} class="active-image" onclick=smallImageClicked(${i}) id="activeImage${i}"/>`
        }else{
            productImages.innerHTML += `
        <img src=${productDetailsSection.photos[i]} onclick=smallImageClicked(${i}) id="activeImage${i}" />`
        }
        
    }
    
})
//when small image clicked the big image need to be replaced by the small image
function smallImageClicked(id){
        $(".active-image").removeClass("active-image");
        $("#activeImage"+id).addClass("active-image");
        $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+idInLocalStorage,function(response){
        var productDetailsSection1 = response
        var bigImage = document.getElementById("image-wrapper")
        bigImage.innerHTML =`
        <img id="product-preview" src=${productDetailsSection1.photos[id]} />
        `
})
}

//Counting the added items in the cart
var count = JSON.parse(localStorage.getItem("cartitemscount"))
var cartCount = document.getElementById("cart-count")
if(count == null){
    var countInitial = 0
    count = localStorage.setItem("cartitemscount",JSON.stringify(countInitial))
    cartCount.textContent = countInitial;
}


//Increasing count of cart
function addToCart(){
    count = JSON.parse(localStorage.getItem("cartitemscount"))
    count  +=  1
    localStorage.setItem("cartitemscount",JSON.stringify(count))
    cartCount.textContent = JSON.parse(localStorage.getItem("cartitemscount"));


    //Creating an array to push ids and prices of the product
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+idInLocalStorage,function(response){
        var productDetailsSection1 = response
        console.log(productDetailsSection1)
        var itemsAddedToCart = JSON.parse(localStorage.getItem("itemsAddedToCart"))
        var idOfTheProductAddedTotheCart = productDetailsSection1.id
        var obj = {
            id:idOfTheProductAddedTotheCart
        }
        if(itemsAddedToCart==null){
            var idArray = []
            idArray.push(obj)
            localStorage.setItem("itemsAddedToCart",JSON.stringify(idArray))
        }else{
            itemsAddedToCart.push(obj);
            localStorage.setItem("itemsAddedToCart",JSON.stringify(itemsAddedToCart))   
        }
    })

}
cartCount.textContent = JSON.parse(localStorage.getItem("cartitemscount"));