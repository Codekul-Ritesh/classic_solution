import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    return (
        <div>

            <Header />



            <div class="header">

                <div class="menu-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4">
                                <div class="all-department">
                                    <span>All Products</span>
                                    <button href="Products" class="category-list-close"><i class="fa-light fa-bars"></i></button>

                                </div>
                            </div>
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
                            <div class="col-lg-2">
                                <li class="live-chat d-xl-flex d-none align-items-center">
                                    <div class="icon">
                                        <img src="assets/images/call-icon.png" alt="call" />
                                    </div>
                                    <div class="txt">
                                        <span class="d-block">Contact :</span>
                                        <a class="d-block" href="tel:+997509153">+997 509 153</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact py-120">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-4 col-lg-5 col-md-6">
                            <div class="contact-info">
                                <h2 class="title">Contact info</h2>
                                <ul>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-phone-flip"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <a href="mailto:Support@gmail.com">Support@gmail.com</a>
                                            <a href="tel:+1212-683-9756">+1 212-683-9756</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-location-dot"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <span>799 W 6th St Hoisington, Kansas 121 Sparrow Hawk, Alberta</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-clock"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <span>Mon - Sat : 8:00am - 5:00pm</span>
                                            <span>Sunday: Closed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xxl-7 col-lg-7 col-md-6">
                            <div class="contact-form">
                                <h2 class="title">Leave a Message</h2>
                                <form class="row g-lg-4 g-3">
                                    <div class="col-lg-6 col-md-12 col-sm-6">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-6">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div class="col-12">
                                        <textarea placeholder="Your message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="def-btn btn-border w-100">Find an agent</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.426811590003!2d90.40170455!3d23.8680958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661416116390!5m2!1sen!2sbd" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>



            <div class="features" id="feature">
                <div class="container">
                    <div class="panel panel-shadow px-0">
                        <div class="custom-row">
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-money-saving"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>Free Delivery</h4>
                                        <p>For all order over $99</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-dollar"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>30 Days Return</h4>
                                        <p>If goods have Problems</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-credit-card"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>Secure Payment</h4>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-call-center"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>24/7 Support</h4>
                                        <p>Dedicated support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default Contact