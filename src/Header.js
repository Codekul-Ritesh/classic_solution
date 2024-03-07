import React from 'react'

function Header() {
    return (
        <div>

            
<body>
    {/* <div class="preloader">
        <img src="assets/images/loader.gif" alt="Gif"/>
    </div> */}


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
      

        <div class="bottom-header">
            <div class="container">
                <div class="row justify-content-between align-items-center g-md-4 g-sm-0">
                    <div class="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/LOGO.JPEG" alt="logonew"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-sm-6 col-12 search-col">
                        <div class="header-search">
                            <form>
                                <div class="wrap">
                                    <select name="category" class="select">
                                        <button href='/'><option>Home</option></button>
                                        <option value="2" >About</option>
                                        <option value="3">Product</option>
                                        <option value="4">Blog</option>
                                        <option value="5">Contact </option>
                                      
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
                                    {/* <i class="fa-light fa-heart"></i>
                                    <span class="quantity">02</span> */}
                                </a>
                                <a role="button" class="cart-list-btn">
                                    {/* <i class="fa-light fa fa-whatsapp"></i>
                                    <span class="quantity">03</span> */}
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    </div>


        
    <div class="header">
  
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
                    <img src="assets/images/Logo.jpeg" alt="Logo"/>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/About" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="/Products" class="nav-link">Product</a>
                </li>
                <li class="nav-item">
                    <a href="/Blog" class="nav-link">Blog</a>
                </li>               
                <li class="nav-item">
                    <a href="/Contact" class="nav-link">Contact</a>
                </li>
               
            </ul>
        </div>
        <ul class="mobile-nav">
            <li><a role="button" data-target="mobile-category-list" class="m-nav-link"><i class="fa-light fa-grid-2"></i></a></li>
            <li><a href="http://wa.me/+917219769682" class="m-nav-link"><i class="fa-light fa-fa-whatsapp"></i></a></li>
            <li><a href="index.html" class="center"><i class="fa-light fa-house"></i></a></li>
            <li><a href="account.html" class="m-nav-link"><i class="fa-light fa-user-large"></i></a></li>
            <li><a role="button" data-target="m-main-menu" class="m-nav-link"><i class="fa-light fa-ellipsis-stroke"></i></a></li>
        </ul>
    </div>



</body>

        </div>


    )
}

export default Header