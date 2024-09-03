import React from 'react'

function Footer() {
  return (
    <div>
        {/* <!-- footer section start --> */}
   <div class="footer_section layout_padding">
      <div class="container">
         <div class="row">
            <div class="col-lg-3 col-sm-6">
               <div class="fooer_logo"><img src="images/footer-logo.png"/></div>
               <p class="footer_lorem_text">There are many variat
                  ions of passages of L
                  orem Ipsum available
                  , but the majority h
                  ave suffered altera
                  tion in some form, by 
               </p>
            </div>
            <div class="col-lg-3 col-sm-6">
               <h1 class="customer_text">LET US HELP YOU</h1>
               <p class="footer_lorem_text">There are many variat
                  ions of passages of L
                  orem Ipsum available
                  , but the majority h
                  ave suffered altera
                  tion in some form, by 
               </p>
            </div>
            <div class="col-lg-3 col-sm-6">
               <h1 class="customer_text">INFORMATION</h1>
               <p class="footer_lorem_text1">About Us<br/>
                  Careers<br/>
                  Sell on shopee<br/>
                  Press & News<br/>
                  Competitions<br/>
                  Terms & Conditions
               </p>
            </div>
            <div class="col-lg-3 col-sm-6">
               <h1 class="customer_text">OUR Design</h1>
               <p class="footer_lorem_text">There are many variat
                  ions of passages of L
                  orem Ipsum available
                  , but the majority h
                  ave suffered altera
                  tion in some form, by 
               </p>
            </div>
         </div>
         <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
               <span class="input-group-text" id="basic-addon2"><a href="#">Subscribe</a></span>
            </div>
         </div>
      </div>
   </div>

   {/* <!-- copyright section start --> */}
   <div class="container">
      <div class="social_icon">
         <ul>
            <li><a href="#"><img src="images/fb-icon.png"/></a></li>
            <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
            <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
            <li><a href="#"><img src="images/linkedin-icon.png"/></a></li>
         </ul>
      </div>
      <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
   </div>
    </div>
  )
}

export default Footer;