import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AYUSANTE_TOXCLEAN() {
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
                                        <img src="assets/images/classic/ayurveda/image_50.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">AYUSANTE TOXCLEAN </h2>
                                    <p class="price"><span >₹825.00 </span> ₹705.00 </p>
                                    <ul class="short-details">
                                        <li>Product Code :  <span>20011</span></li>
                                        <li>PV  :  <span>23.50</span></li>
                                        <li>NET CONTENT  : <span>60 capsules</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr"> A unique powerful formulation of natural ingredients (Emblica officinalis, Terminalia bellirica, Terminalia chebula, Azadirachta indica, Curcuma longa, Swertia chirata, Cassia angustifolia, Piper nigrum) that are known to help regulate digestion, relieve constipation, flush out body toxins, cleanse colon and purify blood. They are well-researched for their antimicrobial, anti-allergic and laxative properties. It helps colon cleansing, thus expelling various toxins from our body.</p>
                                    <p>
                                        Dosage :  One capsule twice daily or as advised by a physician.
                                    </p>
                                    <p>
                                        Indications :  Rakta Sodhaka (helps in purifying blood) </p>
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

export default AYUSANTE_TOXCLEAN 
