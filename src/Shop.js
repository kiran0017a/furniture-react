import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
function Shop() {
  return (
    <>
    <Navigation/>
     <div>

<div class="furnitures_section layout_padding" id='shop'>
   <div class="container">
      <h1 class="our_text">OUR furnitures</h1>
      <p class="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
      <div class="furnitures_section2 layout_padding">
         <div class="row">
            <div class="col-md-6">
               <div class="container_main">
                  <img src="images/img-2.png" alt="Avatar" class="image"/>
                  <div class="overlay">
                     <a href="#" class="icon" title="User Profile">
                     <i class="fa fa-search"></i>
                     </a>
                  </div>
               </div>
               <h3 class="temper_text">Tempor incididunt ut labore et dolore</h3>
               <p class="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            </div>
            <div class="col-md-6">
               <div class="container_main">
                  <img src="images/img-3.png" alt="Avatar" class="image"/>
                  <div class="overlay">
                     <a href="#" class="icon" title="User Profile">
                     <i class="fa fa-search"></i>
                     </a>
                  </div>
               </div>
               <h3 class="temper_text">Tempor incididunt ut labore et dolore</h3>
               <p class="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            </div>
         </div>
      </div>
   </div>
</div>

{/* <!-- who section start --> */}
<div class="who_section layout_padding">
   <div class="container">
      <h1 class="who_taital">who we are ?</h1>
      <h4 class="designer_text">DESIGNERS & INNOVATORS</h4>
      <p class="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
   </div>
   <div class="get_bt_main">
      <div class="get_bt"><a href="#">Get A Quote</a></div>
   </div>
</div> 
 </div>
 <Footer/>
    </>
   
  )
}

export default Shop