import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function STEVIA() {
    return (
        <div>
            <Header />
            <div class="header">
                <div class="menu-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4">
                                <div class="all-department">
                                    <button href="Products" class="category-list-close"><i
                                        class="fa-light fa-bars"></i></button>
                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-6">
                                <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
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

            <div class="shop-details py-120">
                <div class="container">
                    <div class="product-view-area">
                        <div class="row">
                            <div class="col-xl-6 col-lg-5 col-md-6">
                                <div class="part-img mr-30">
                                    <div class="img-box" id="bigPreview">
                                        <img src="assets/images/classic/health supplement/image_14.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE PRE GLUCOHEALTH</h2>
                                    <p class="price"><span >₹160.00</span> ₹140.00</p>
                                    <ul class="short-details">
                                        <li></li>
                                        <li>Product Code :  <span> 21008</span></li>
                                        <li>PV  :  <span>4.67</span></li>
                                        <li>NET VOLUMES  : <span>100 tablets</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Rebaudioside in stevia is a 100% natural low-calorie sugar substitute. It is a healthier alternative to sugar as it is made from natural herbs and does not contain Aspartame. Rebaudioside is a natural and fat free (less than 2% calories of sugar per tablet) sugar substitute, suitable for weight conscious and low calorie diets. Each uncoated tablets contains Rebaudioside A 97%, Excipients q.s. (Lactose, Croscarmellose Sodium, Colloidal Silicon Dioxide, Hydroxy Propyl Cellulose, Magnesium Stearate.)</p>

                                    <p>
                                        {/* Recommended Usage :  One capsule twice a day or as directed by a healthcare practitioner. */}
                                    </p>
                                    <form>
                                    </form>
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

export default STEVIA