import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <div>
    <Header/>

    <div class="header">
  

  <div class="menu-bar">
<div class="container">
    <div class="row align-items-center">           
       
        <div class="col-xxl-7 col-xl-7 col-lg-6">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <nav id="revel-mobile-menu" class="revel-mobile-menu">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/About">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Products">Product</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
        <div class="col-lg-5">
            <div class="account-link">
                <a href="register.html">Register</a>
                <span>/</span>
                <a href="register.html">Sign in</a>
            </div>
        </div>
    </div>
</div>
</div>

</div>


    <Footer/>
    </div> 
  )
}

export default About