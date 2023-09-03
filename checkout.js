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

var count = JSON.parse(localStorage.getItem("cartitemscount"))
var cartCount = document.getElementById("cart-count")
if(count == null || count == 0){
    cartCount.textContent = 0;  
}else{
    cartCount.textContent = count;
}

//getting ids and prices of products from the local storage
var arrayOfProductIdAndPrice = JSON.parse(localStorage.getItem("itemsAddedToCart"))
console.log(arrayOfProductIdAndPrice)
var cartList = document.getElementById("card-list")
var totalItemsCount = document.getElementById("item-count")

//getting ids of the total products
var arrayOfIds = []
for(var k=0 ; k < arrayOfProductIdAndPrice.length;k++){
    arrayOfIds.push(arrayOfProductIdAndPrice[k].id)
}
var arrayOfIds = arrayOfIds
console.log(arrayOfIds)

//Updating the total items count
var arrayOfIdsNotSimilar = []
for(var j = 0 ; j < arrayOfIds.length ; j++){
    var isInclude = false
    if(arrayOfIdsNotSimilar.includes(arrayOfIds[j])){
        isInclude = true
    }
    if(!(isInclude)){
        arrayOfIdsNotSimilar.push(arrayOfIds[j])
    }
}
console.log(arrayOfIdsNotSimilar)
totalItemsCount.textContent = arrayOfIdsNotSimilar.length

//calculating the count of the products
var countOfProducts = []
for(var l =0 ; l < arrayOfIdsNotSimilar.length ; l++){
    var countOfProduct = 0
    for(var j = 0 ; j< arrayOfIds.length;j++){
        if(arrayOfIdsNotSimilar[l] == arrayOfIds[j]){
            countOfProduct+=1
        }
    }
    countOfProducts.push(countOfProduct)
}
console.log(countOfProducts)

var totalAmount = document.getElementById("total-amount")
var totalprice = 0
for(var i = 0 ; i < arrayOfProductIdAndPrice.length ; i++){
    $.ajax({
        url:"https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+arrayOfIdsNotSimilar[i],
        type:'GET',
        async:false,  //set this to false to make it synchronous
        success:function(data){
            var eachItemResponse = data
            console.log(eachItemResponse)
            cartList.innerHTML +=`
            <div id="checkout-card">
                <div>
                    <img class="checkout-product-image" src="${eachItemResponse.preview}"/>
                </div>
                <div>
                    <h4>${eachItemResponse.name}</h4>
                    <p>x${countOfProducts[i]}</p>
                    <p><span>Amount :Rs </span><span>${eachItemResponse.price}</span></p>
                </div>
            </div>
        ` 
        //calculating total price of the products
        totalprice+=(eachItemResponse.price)*parseInt(countOfProducts[i])
        totalAmount.textContent = totalprice
        },
        error:function(error){
            //Handling error here
        }
    }) 
}

var hrefChangeLinkElement = document.getElementById("hrefChangeLink")
function placeOrder(){ 
    if(totalItemsCount.textContent == 0){
        alert("You don't have in your cart.Please add items to your cart")
        $("#hrefChangeLink").attr("href","checkout.html")
    }else{
        $("#hrefChangeLink").attr("href","placeorder.html")
        localStorage.removeItem("itemsAddedToCart")
        localStorage.removeItem("cartitemscount")
        localStorage.removeItem("id")
    } 
    
}