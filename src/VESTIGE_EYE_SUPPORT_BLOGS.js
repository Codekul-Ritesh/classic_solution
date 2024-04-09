import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function VESTIGE_EYE_SUPPORT_BLOGS() {
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
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-details py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="main-img">
                        <img src="assets/images/blog-details-img19.jpg" alt="Image"/>
                    </div>
                    <div class="part-txt">
                        <div class="title-box">
                            <h2 class="blog-title">VESTIGE_EYE_SUPPORT </h2>
                        </div>
                        <h4 class="blog-title">Introduction</h4>
                        <p>Nowadays In this world of technologies it very difficult to keep your eyesight normal.
                   </p> 
                    </div>
                    
                <div class="part-txt"> 
                    <h3 class="secondary-title">Vestige Eye support contains</h3>
                    <p>Marigod<br></br>
                    Bilberry extracts<br></br>
                    Lutein<br></br>
                    Zeaxanthin<br></br>
                    Benefits of consuming Vestige Eye Support<br></br>
                    Helps to improve Eyesight<br></br>
                    night vision<br></br>
                    lowers inflammation<br></br>
                    helps soothe eye irritation</p> 
                </div>
                <div class="part-txt"> 
                    <h3 class="secondary-title">Dose : </h3>
                    <p>1 Teaspoon(5g) in 180ml of hot or cold water</p>
                </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar">
                        <form class="searchbox">
                            <input type="search" placeholder="Search Here"/>
                            <button><i class="fa-light fa-magnifying-glass"></i></button>
                        </form>
                        <div class="recent-post">
                            <h3 class="sidebar-title">Recent Posts</h3>
                            <ul>
                                <li>
                                    <a href="/hairserum">
                                        <div class="part-img">
                                            <img src="assets/images/blog-details-img3.jpg" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">Vestige Hair Serum</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/bodybutterblogs">
                                        <div class="part-img">
                                            <img src="assets/images/blog-details-img16.png" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">Vestige Assure Cherry Blossom Body Butter</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/detoxfootpatch">
                                        <div class="part-img">
                                            <img src="assets/images/blog-details-img10.jpg" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">Vestige Detox Footpatch</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tags">
                            <h3 class="sidebar-title">Tags</h3>
                            <div class="btn-box">
                                <a href="#">Brunch</a>
                                <a href="#">Cook</a>
                                <a href="#">Cuisine</a>
                                <a href="#">Delicious</a>
                                <a href="#">Vegetarian</a>
                                <a href="#">Fish</a>
                                <a href="#">Food</a>
                                <a href="#">Lunch</a>
                                <a href="#">Tasty</a>
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

export default VESTIGE_EYE_SUPPORT_BLOGS