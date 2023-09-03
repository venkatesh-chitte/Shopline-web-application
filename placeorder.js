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

// var count = JSON.parse(localStorage.getItem("cartitemscount"))
// if(count == null){
//     cartCount.textContent = 0;
// }
// var cartCount = document.getElementById("cart-count")
cartCount.textContent = 0;