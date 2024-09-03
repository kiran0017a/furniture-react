import React from 'react'

function Navigation() {
  return (
    <div>
        {/* <!-- header section start --> */}
    <div class="header_section">
      <div class="container-fluid">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                     <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/Services">services</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/About">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/Shop">Shop</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/Contact">Contact</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  <h1 class="call_text">Call Us : +01 1234567890</h1>
               </form>
               <div class="search_icon">
                  <ul>
                     <li><a href="#"><img src="images/search-icon.png"/></a></li>
                     <li><a href="/login">LOGIN</a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   </div>
   
    </div>
  )
}

export default Navigation