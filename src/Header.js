import React from 'react'

function Header() {
    return (
        <div>

            
<body>
    <div class="preloader">
        <img src="assets/images/loader.gif" alt="Gif"/>
    </div>


    <div class="product-quick-view-panel">
        <div class="img">
            <img class="quick-view-image" src="assets/images/index.html" alt="image"/>
        </div>
    </div>


    <div class="header-cart-wrap" id="headerCartWrap">
        <div class="cart-list">
            <div class="title">
                <h3>Shopping Cart</h3>
                <button class="cart-close"><i class="fa-regular fa-xmark"></i></button>
            </div>
            <ul>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-3.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Diamond wedding ring</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-2.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Living Summer Chair</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-10.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Wireless Headphone</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
            </ul>
            <div class="total">
                <p>Subtotal: <span>$15:00</span></p>
            </div>
            <div class="btn-box">
                <a href="#" class="def-btn">View Cart</a>
                <a href="#" class="def-btn">Checkout</a>
            </div>
        </div>
    </div>


    <div class="header-cart-wrap" id="headerWishWrap">
        <div class="cart-list">
            <div class="title">
                <h3>Wish List</h3>
                <button class="wish-close"><i class="fa-regular fa-xmark"></i></button>
            </div>
            <ul>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-3.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Diamond wedding ring</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-2.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Living Summer Chair</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-10.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Wireless Headphone</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
            </ul>
            <div class="total">
                <p>Subtotal: <span>$15:00</span></p>
            </div>
            <div class="btn-box">
                <a href="#" class="def-btn">View Wish List</a>
                <a href="#" class="def-btn">Add All To Cart</a>
            </div>
        </div>
    </div>


    <div class="header">
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-6 col-xl-7 col-lg-7">
                        <ul class="top-header-link d-lg-flex d-none">
                            <li>
                                <span>SHOP EVENTS & SAVE UP TO 65% OFF!</span>
                            </li>
                            <li>
                                <span class="mr-5px">Call Us:</span><a href="tel:001-1234-88888"> 001-1234-88888</a>
                            </li>
                            <li>
                                <a href="#">Sell On Revel </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xxl-6 col-xl-5 col-lg-5">
                        <ul class="top-header-link justify-content-lg-end justify-content-center">
                            <li>
                                <a href="#">Track my order</a>
                            </li>
                            <li>
                                <select name="currency" id="currency" class="select">
                                    <option value="USD">Dollar (USD)</option>
                                    <option value="BDT">Taka (BDT)</option>
                                </select>
                            </li>
                            <li>
                                <div class="select-language">
                                    <div class="language">
                                        <div class="select-lang">
                                            <div id="aw" data-input-name="country" data-selected-country="UK" data-scrollable-height="250px"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-header">
            <div class="container">
                <div class="row justify-content-between align-items-center g-md-4 g-sm-0">
                    <div class="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-sm-6 col-12 search-col">
                        <div class="header-search">
                            <form>
                                <div class="wrap">
                                    <select name="category" class="select">
                                        <option value="">All Categories</option>
                                        <option value="1">Women's Fashion</option>
                                        <option value="2">Men's Fashion</option>
                                        <option value="3">Photography </option>
                                        <option value="4">Watches & Accessories</option>
                                        <option value="5">TV & Home Appliances</option>
                                        <option value="6">Bags & Shoes</option>
                                        <option value="7">Toys , Kids & Babies</option>
                                        <option value="8">Headphone</option>
                                    </select>
                                    <span class="devider"></span>
                                    <input type="search" name="search" placeholder="What do you need?"/>
                                </div>
                                <button type="submit">
                                    <span><i class="fa-light fa-magnifying-glass"></i></span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xl-3 col-lg-2 col-sm-3 col-6">
                        <ul class="bottom-header-right d-flex align-items-center justify-content-end">
                            <li class="live-chat d-xl-flex d-none align-items-center">
                                <div class="icon">
                                    <img src="assets/images/call-icon.png" alt="call"/>
                                </div>
                                <div class="txt">
                                    <span class="d-block">Live Chat or :</span>
                                    <a class="d-block" href="tel:+997509153">+997 509 153</a>
                                </div>
                            </li>
                            <li class="header-cart-options">
                                <a role="button" class="search-open d-sm-none"><i class="fa-light fa-magnifying-glass"></i></a>
                                <a href="compare.html" class="compare-list-btn"><i class="fa-light fa-shuffle"></i></a>
                                <a role="button" class="wish-list-btn">
                                    <i class="fa-light fa-heart"></i>
                                    <span class="quantity">02</span>
                                </a>
                                <a role="button" class="cart-list-btn">
                                    <i class="fa-light fa-cart-shopping"></i>
                                    <span class="quantity">03</span>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-3 col-xl-3 col-lg-4">
                        <div class="all-department">
                            <span>all Departments</span>
                            <button class="category-list-close"><i class="fa-light fa-bars"></i></button>
                            <div class="banner">
                                <div class="category-list">
                                    <ul>
                                        <li class="category-item has-sub">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-user-tie-hair-long"></i></span>
                                                </div>
                                                <span>Women's Fashion</span>
                                            </a>
                                            <div class="category-sub-menu bg-1">
                                                <div class="row g-4">
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-wedding-dress"></i></span> Clothing</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeggings</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Kurtis</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Palazzo Pants & Culottes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Pants</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shapewear</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Skirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Tunics</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-heels"></i></span> Shoes</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Ballet Flats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Pumps</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Closed-Toe Wedges</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fashion Boots</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Flat Sandals</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Flip Flops</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Heeled Sandals</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">House Slippers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Slip-Ons</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sneakers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Wedge Sandals</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-watch"></i></span> Watches</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Fashion</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Casual</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Business</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sports</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Accessories</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-user-tie-hair"></i></span>
                                                </div>
                                                <span>Men's Fashion</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-camera"></i></span>
                                                </div>
                                                <span>Photography</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-watch-smart"></i></span>
                                                </div>
                                                <span>Watches & Accessories</span>
                                            </a>
                                        </li>
                                        <li class="category-item has-sub">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-tv-retro"></i></span>
                                                </div>
                                                <span>TV & Home Appliances</span>
                                            </a>
                                            <div class="category-sub-menu">
                                                <div class="row g-4">
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-television"></i></span> Televisions</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Smart Televisions</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">LED Televisions</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">OLED Televisions</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Other Televisions</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Mini Televisions</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-speaker"></i></span> Home Audio</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Sondbars</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Home Entertainment</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Portable Players</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fashion Boots</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Live Sound</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-refrigerator"></i></span> Large Appliances</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Refrigerators</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Freezers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Washing Machines</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Microwave Oven</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Electric Oven</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-cooking"></i></span> Kitchen Appliances</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Rice Cooker</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Blender, Mixer & Grinder</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Electric Kettle</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Juicer & Fruit Extraction</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fryer</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Coffee Machine</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-air-conditioner"></i></span> Cooling & Heating</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Air Conditioner</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Air Coolers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Air Purifiers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dehumidifiers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Water Heater</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-season"></i></span> Season Sale</h4>
                                                        <a href="#">
                                                            <img src="assets/images/mega-menu-bg-2.jpg" alt="Image"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-backpack"></i></span>
                                                </div>
                                                <span>Bags & Shoes</span>
                                            </a>
                                        </li>
                                        <li class="category-item has-sub">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-teddy-bear"></i></span>
                                                </div>
                                                <span>Toys , Kids & Babies</span>
                                            </a>
                                            <div class="category-sub-menu">
                                                <div class="row g-4">
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-baby-boy"></i></span> Mother & Baby</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Baby & Toddler Foods</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Milk Formula</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cloth Diapers & Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Diaper Bags</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Wipes & Holders</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-rocking-horse"></i></span> Baby Gear</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Baby Walkers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Backpacks & Carriers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Strollers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Swings, Jumpers & Bouncers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Activity Gym & Playmats</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <h4><span><i class="flaticon-baby-dress"></i></span> Clothing & Accessories</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Girls Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Girls Shoes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Boys Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Maternity Wear</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">New Born Unisex (0 - 6 months)</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <h4><span><i class="flaticon-season"></i></span> Season Sale</h4>
                                                        <a href="#">
                                                            <img src="assets/images/mega-menu-bg-3.jpg" alt="Image"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-headphones-simple"></i></span>
                                                </div>
                                                <span>Headphone</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-baseball-bat-ball"></i></span>
                                                </div>
                                                <span>Sports & Outdoor</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="#">
                                                <div class="icon">
                                                    <span><i class="fa-thin fa-shuffle"></i></span>
                                                </div>
                                                <span>Other</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                                                <a class="nav-link" href="index.html">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="about.html">About</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Shop
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="shopDropdown">
                                                    <li><a class="dropdown-item" href="shop.html">Shop Left Bar</a></li>
                                                    <li><a class="dropdown-item" href="shop-right-bar.html">Shop Right Bar</a></li>
                                                    <li><a class="dropdown-item" href="shop-details.html">Shop Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="pageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    PAGES
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="pageDropdown">
                                                    <li><a class="dropdown-item" href="account.html">Account Page</a></li>
                                                    <li><a class="dropdown-item" href="cart.html">Cart Page</a></li>
                                                    <li><a class="dropdown-item" href="compare.html">Compare Page</a></li>
                                                    <li><a class="dropdown-item" href="faq.html">FAQ Page</a></li>
                                                    <li><a class="dropdown-item" href="wishlist.html">Wishlist</a></li>
                                                    <li><a class="dropdown-item" href="register.html">Register Page</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Blog
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="blogDropdown">
                                                    <li><a class="dropdown-item" href="blog.html">Blog Page</a></li>
                                                    <li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-2">
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





    
    <div class="mobile-menu d-lg-none d-block">
        <div class="mobile-category-list">
            <button class="mobile-menu-close-btn"><i class="fa-solid fa-xmark-large"></i></button>
            <ul class="category-nav">
                <li class="title">All Categories</li>
                <li class="category-item has-sub">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-user-tie-hair-long"></i></span>
                        </div>
                        <span>Women's Fashion</span>
                    </a>
                    <div class="category-sub-menu">
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-wedding-dress"></i></span> Clothing</h4>
                                <ul>
                                    <li>
                                        <a href="#">Dresses</a>
                                    </li>
                                    <li>
                                        <a href="#">Jeggings</a>
                                    </li>
                                    <li>
                                        <a href="#">Kurtis</a>
                                    </li>
                                    <li>
                                        <a href="#">Palazzo Pants & Culottes</a>
                                    </li>
                                    <li>
                                        <a href="#">Pants</a>
                                    </li>
                                    <li>
                                        <a href="#">Shapewear</a>
                                    </li>
                                    <li>
                                        <a href="#">Skirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Tops</a>
                                    </li>
                                    <li>
                                        <a href="#">T-Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Tunics</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-heels"></i></span> Shoes</h4>
                                <ul>
                                    <li>
                                        <a href="#">Ballet Flats</a>
                                    </li>
                                    <li>
                                        <a href="#">Pumps</a>
                                    </li>
                                    <li>
                                        <a href="#">Closed-Toe Wedges</a>
                                    </li>
                                    <li>
                                        <a href="#">Fashion Boots</a>
                                    </li>
                                    <li>
                                        <a href="#">Flat Sandals</a>
                                    </li>
                                    <li>
                                        <a href="#">Flip Flops</a>
                                    </li>
                                    <li>
                                        <a href="#">Heeled Sandals</a>
                                    </li>
                                    <li>
                                        <a href="#">House Slippers</a>
                                    </li>
                                    <li>
                                        <a href="#">Slip-Ons</a>
                                    </li>
                                    <li>
                                        <a href="#">Sneakers</a>
                                    </li>
                                    <li>
                                        <a href="#">Wedge Sandals</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-watch"></i></span> Watches</h4>
                                <ul>
                                    <li>
                                        <a href="#">Fashion</a>
                                    </li>
                                    <li>
                                        <a href="#">Casual</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Sports</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessories</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-user-tie-hair"></i></span>
                        </div>
                        <span>Men's Fashion</span>
                    </a>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-camera"></i></span>
                        </div>
                        <span>Photography</span>
                    </a>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-watch-smart"></i></span>
                        </div>
                        <span>Watches & Accessories</span>
                    </a>
                </li>
                <li class="category-item has-sub">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-tv-retro"></i></span>
                        </div>
                        <span>TV & Home Appliances</span>
                    </a>
                    <div class="category-sub-menu">
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-television"></i></span> Televisions</h4>
                                <ul>
                                    <li>
                                        <a href="#">Smart Televisions</a>
                                    </li>
                                    <li>
                                        <a href="#">LED Televisions</a>
                                    </li>
                                    <li>
                                        <a href="#">OLED Televisions</a>
                                    </li>
                                    <li>
                                        <a href="#">Other Televisions</a>
                                    </li>
                                    <li>
                                        <a href="#">Mini Televisions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-speaker"></i></span> Home Audio</h4>
                                <ul>
                                    <li>
                                        <a href="#">Sondbars</a>
                                    </li>
                                    <li>
                                        <a href="#">Home Entertainment</a>
                                    </li>
                                    <li>
                                        <a href="#">Portable Players</a>
                                    </li>
                                    <li>
                                        <a href="#">Fashion Boots</a>
                                    </li>
                                    <li>
                                        <a href="#">Live Sound</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-refrigerator"></i></span> Large Appliances</h4>
                                <ul>
                                    <li>
                                        <a href="#">Refrigerators</a>
                                    </li>
                                    <li>
                                        <a href="#">Freezers</a>
                                    </li>
                                    <li>
                                        <a href="#">Washing Machines</a>
                                    </li>
                                    <li>
                                        <a href="#">Microwave Oven</a>
                                    </li>
                                    <li>
                                        <a href="#">Electric Oven</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-cooking"></i></span> Kitchen Appliances</h4>
                                <ul>
                                    <li>
                                        <a href="#">Rice Cooker</a>
                                    </li>
                                    <li>
                                        <a href="#">Blender, Mixer & Grinder</a>
                                    </li>
                                    <li>
                                        <a href="#">Electric Kettle</a>
                                    </li>
                                    <li>
                                        <a href="#">Juicer & Fruit Extraction</a>
                                    </li>
                                    <li>
                                        <a href="#">Fryer</a>
                                    </li>
                                    <li>
                                        <a href="#">Coffee Machine</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-air-conditioner"></i></span> Cooling & Heating</h4>
                                <ul>
                                    <li>
                                        <a href="#">Air Conditioner</a>
                                    </li>
                                    <li>
                                        <a href="#">Air Coolers</a>
                                    </li>
                                    <li>
                                        <a href="#">Air Purifiers</a>
                                    </li>
                                    <li>
                                        <a href="#">Dehumidifiers</a>
                                    </li>
                                    <li>
                                        <a href="#">Water Heater</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-season"></i></span> Season Sale</h4>
                                <a href="#">
                                    <img src="assets/images/mega-menu-bg-2.jpg" alt="Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-backpack"></i></span>
                        </div>
                        <span>Bags & Shoes</span>
                    </a>
                </li>
                <li class="category-item has-sub">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-teddy-bear"></i></span>
                        </div>
                        <span>Toys , Kids & Babies</span>
                    </a>
                    <div class="category-sub-menu">
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-baby-boy"></i></span> Mother & Baby</h4>
                                <ul>
                                    <li>
                                        <a href="#">Baby & Toddler Foods</a>
                                    </li>
                                    <li>
                                        <a href="#">Milk Formula</a>
                                    </li>
                                    <li>
                                        <a href="#">Cloth Diapers & Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#">Diaper Bags</a>
                                    </li>
                                    <li>
                                        <a href="#">Wipes & Holders</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-rocking-horse"></i></span> Baby Gear</h4>
                                <ul>
                                    <li>
                                        <a href="#">Baby Walkers</a>
                                    </li>
                                    <li>
                                        <a href="#">Backpacks & Carriers</a>
                                    </li>
                                    <li>
                                        <a href="#">Strollers</a>
                                    </li>
                                    <li>
                                        <a href="#">Swings, Jumpers & Bouncers</a>
                                    </li>
                                    <li>
                                        <a href="#">Activity Gym & Playmats</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4><span><i class="flaticon-baby-dress"></i></span> Clothing & Accessories</h4>
                                <ul>
                                    <li>
                                        <a href="#">Girls Clothing</a>
                                    </li>
                                    <li>
                                        <a href="#">Girls Shoes</a>
                                    </li>
                                    <li>
                                        <a href="#">Boys Clothing</a>
                                    </li>
                                    <li>
                                        <a href="#">Maternity Wear</a>
                                    </li>
                                    <li>
                                        <a href="#">New Born Unisex (0 - 6 months)</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-12">
                                <h4><span><i class="flaticon-season"></i></span> Season Sale</h4>
                                <a href="#">
                                    <img src="assets/images/mega-menu-bg-3.jpg" alt="Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-headphones-simple"></i></span>
                        </div>
                        <span>Headphone</span>
                    </a>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-baseball-bat-ball"></i></span>
                        </div>
                        <span>Sports & Outdoor</span>
                    </a>
                </li>
                <li class="category-item">
                    <a href="#">
                        <div class="icon">
                            <span><i class="fa-thin fa-shuffle"></i></span>
                        </div>
                        <span>Other</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="m-main-menu">
            <button class="mobile-menu-close-btn"><i class="fa-solid fa-xmark-large"></i></button>
            <ul class="menu-bar">
                <li class="logo">
                    <img src="assets/images/Logo.html" alt="Logo"/>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="account.html" class="nav-link">Account</a>
                </li>
                <li class="nav-item">
                    <a href="register.html" class="nav-link">Login / Register</a>
                </li>
                <li class="nav-item">
                    <a href="about.html" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul class="dropdown-menu">
                        <li><a href="shop.html" class="dropdown-item">Shop Left Bar</a></li>
                        <li><a href="shop-right-bar.html" class="dropdown-item">Shop Right Bar</a></li>
                        <li><a href="shop-details.html" class="dropdown-item">Shop Details Page</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="faq.html" class="nav-link">FAQ</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                    <ul class="dropdown-menu">
                        <li><a href="blog.html" class="dropdown-item">Blog Page</a></li>
                        <li><a href="blog-details.html" class="dropdown-item">Blog Details Page</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul class="dropdown-menu">
                        <li><a href="cart.html" class="dropdown-item">Cart Page</a></li>
                        <li><a href="compare.html" class="dropdown-item">Compare Page</a></li>
                        <li><a href="wishlist.html" class="dropdown-item">Wishlist Page</a></li>
                        <li><a href="register.html" class="dropdown-item">Register Page</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <ul class="mobile-nav">
            <li><a role="button" data-target="mobile-category-list" class="m-nav-link"><i class="fa-light fa-grid-2"></i></a></li>
            <li><a href="cart.html" class="m-nav-link"><i class="fa-light fa-cart-shopping"></i></a></li>
            <li><a href="index.html" class="center"><i class="fa-light fa-house"></i></a></li>
            <li><a href="account.html" class="m-nav-link"><i class="fa-light fa-user-large"></i></a></li>
            <li><a role="button" data-target="m-main-menu" class="m-nav-link"><i class="fa-light fa-ellipsis-stroke"></i></a></li>
        </ul>
    </div>


    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-2 category-col">

                </div>
                <div class="col-xl-6 col-lg-8">
                    <div class="slider-area">
                        <div class="slide-1">
                            <div class="banner-txt">
                                <h6>Fashion</h6>
                                <h1>New Women</h1>
                                <p>The 10 Best Fashion Collection 2021</p>
                                <div class="price"><span>$320.00</span> <span>$295.00</span></div>
                                <a href="shop-details.html" class="def-btn">buy now</a>
                            </div>
                        </div>
                        <div class="slide-2">
                            <div class="banner-txt">
                                <h6>Fashion</h6>
                                <h1>New Women</h1>
                                <p>The 10 Best Fashion Collection 2021</p>
                                <div class="price"><span>$320.00</span> <span>$295.00</span></div>
                                <a href="shop-details.html" class="def-btn">buy now</a>
                            </div>
                        </div>
                        <div class="slide-3">
                            <div class="banner-txt">
                                <h6>Fashion</h6>
                                <h1>New Women</h1>
                                <p>The 10 Best Fashion Collection 2021</p>
                                <div class="price"><span>$320.00</span> <span>$295.00</span></div>
                                <a href="shop-details.html" class="def-btn">buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <div class="sidebar-area">
                        <div class="best-selling-panel">
                            <div class="panel-header">
                                <h4>Best Selling</h4>
                            </div>
                            <div class="panel-body">
                                <div class="product-slider-1">
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="shop-details.html"><img src="assets/images/best-selling-1.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <h4 class="product-name"><a href="shop-details.html">Cuisinart Barrel</a></h4>
                                            <p class="price">$75.00 <span>$94.00</span></p>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="shop-details.html"><img src="assets/images/best-selling-2.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <h4 class="product-name"><a href="shop-details.html">Ut enim ad minima</a></h4>
                                            <p class="price">$25.00</p>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="shop-details.html"><img src="assets/images/best-selling-3.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <h4 class="product-name"><a href="shop-details.html">Aut odit aut fugit</a></h4>
                                            <p class="price">$98.00</p>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="shop-details.html"><img src="assets/images/best-selling-4.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <h4 class="product-name"><a href="shop-details.html">Aut odit aut fugit</a></h4>
                                            <p class="price">$98.00</p>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="shop-details.html"><img src="assets/images/best-selling-1.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <h4 class="product-name"><a href="shop-details.html">Cuisinart Barrel</a></h4>
                                            <p class="price">$75.00 <span>$94.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

        </div>


    )
}

export default Header