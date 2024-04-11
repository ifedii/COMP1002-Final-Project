const header = document.querySelector("header.header1");
const footer = document.querySelector("footer.footer1");

const headerHTML = `
    <div id="logo"> 
        <img src="images/weblogo.jpg">
            <p>COMMODORE INC</p>
    </div>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Product.html">Product</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
`;

header.innerHTML = headerHTML;

const footerHTML = `
        
    <div class="get-email">
        <form action="subscribe.php" method="get">
            <label> SUBSCRIBE TO OUR EMAIL LIST</label>
            <input type="email">
            <button>SUBSCRIBE</button>
        </form>
    </div>

    <div class="footer-nav">
        <div class="sitemap footer-content">

            <h2>SITEMAP</h2>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="Product.html">PRODUCTS</a></li>
                <li><a href="about.html">ABOUT US</a></li>
                <li><a href="contact.html">CONTACT US</a></li>
            </ul>
        </div>

        <div class="refund-policy footer-content">
            <h2>LEGAL</h2>
            <ul>
                <li><a href="#">REFUND POLICY</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS & CONDITIONS</a></li>
            </ul>
        
        </div>
    </div>
`;
footer.innerHTML = footerHTML;



