import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Product_view() {
  return (
    <div>
<Header/>

    <div class="shop-details py-120">
        <div class="container">
            <div class="product-view-area">
                <div class="row">
                    <div class="col-xl-6 col-lg-5 col-md-6">
                        <div class="part-img mr-30">
                            <div class="img-box" id="bigPreview">
                                <img src="assets/images/shop-details-img-1.jpg" alt="Image"/>
                                <button class="quick-view"><i class="fa-thin fa-arrows-maximize"></i></button>
                            </div>
                            <div class="btn-box">
                                <button class="small-thumb active">
                                    <img src="assets/images/shop-details-img-1.jpg" alt="image"/>
                                </button>
                                <button class="small-thumb">
                                    <img src="assets/images/shop-details-img-2.jpg" alt="image"/>
                                </button>
                                <button class="small-thumb">
                                    <img src="assets/images/shop-details-img-3.jpg" alt="image"/>
                                </button>
                                <button class="small-thumb">
                                    <img src="assets/images/shop-details-img-4.jpg" alt="image"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-6">
                        <div class="part-txt">
                            <h2 class="main-product-title">Headband Foldable Stereo Bluetooth Headphones Wireless Headset</h2>
                            <div class="review">
                                <span class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </span>
                                <span class="rating-amount">3 Reviews</span>
                            </div>
                            <p class="price"><span>$96.00</span> $75.00</p>
                            <ul class="short-details">
                                <li>Availability: <span>In stock</span></li>
                                <li>Product Code: <span>#4657</span></li>
                                <li>Tags: <span>Fashion, Hood, Classic</span></li>
                            </ul>
                            <p class="dscr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum eveniet esse modi nemo mollitia. Vitae adipisci ab nulla sequi fuga saepe harum placeat voluptatibus ea quam, assumenda illum natus.</p>
                            <form>
                                <div class="row g-xl-4 g-3">
                                    <div class="col-lg-4 col-md-6 col-sm-4 col-6">
                                        <div class="color-select-wrap">
                                            <label>Color</label>
                                            <select name="color" class="select wide color-select">
                                                <option value="*" selected disabled>Select Color</option>
                                                <option value="1">Green</option>
                                                <option value="2">Red</option>
                                                <option value="3">Yellow</option>
                                                <option value="4">Blue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-4 col-6">
                                        <label>Size</label>
                                        <select name="size" class="select wide">
                                            <option value="*" selected disabled>Select Size</option>
                                            <option value="1">SM</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-4">
                                        <div class="quantity-wrap">
                                            <label>QTY</label>
                                            <div class="product-count">
                                                <div class="quantity rapper-quantity">
                                                    <input type="number" min="1" max="100" step="1" value="1" readonly/>
                                                    <div class="quantity-nav">
                                                        <div class="quantity-button quantity-down">
                                                            <i class="fa-solid fa-minus"></i>
                                                        </div>
                                                        <div class="quantity-button quantity-up">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="btn-box">
                                <button id="addToCart"><span><i class="fa-light fa-cart-shopping"></i></span> add to cart</button>
                                <button id="addToWishList"><span><i class="fa-light fa-heart"></i></span> add to wishlist</button>
                            </div>
                            <div class="product-share">
                                <span>Share Link:</span>
                                <div class="social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#"><i class="fa-solid fa-rss"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details-area">
                <nav>
                    <div class="nav" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-dscr-tab" data-bs-toggle="tab" data-bs-target="#nav-dscr" type="button" role="tab" aria-controls="nav-dscr" aria-selected="true">Description</button>
                        <button class="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Information</button>
                        <button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-dscr" role="tabpanel" aria-labelledby="nav-dscr-tab" tabindex="0">
                        <div class="product-dscr">
                            <p>Shank porchetta anim ham in esse. Duis swine mollit incididunt, quis pork belly rump ut ball tip venison strip steak pancetta proident. Ground roun duis beef, eu sunt non dolor esse capicola shoulder strip steak. Ut fatback chuck minim exercitation kielbasa. Cupidatat nostrud prosciutto corned beefdgf meatball sausage lorem.Ground round jowl pig, short ribs turducken cillum labore aliqua bacon ea doner anim esse. Jerky laboris id, fatback ut gfjb Filet mignon corned beef laboris ipsum porchetta beef irure dolor fatback. Pariatur cupim occaecat short ribs</p>
                            <p>consectetur, venison ipsum flank hamburger bacon tri-tip. Eu duis est cupidatat prosciutto alcatra, consectetur aute velit shoulder shankle ham ho Cillum deserunt velit dolor, beef ribs excepteur hamburger flank occaecat. Qui dolor flank picanha t-bone lorem</p>
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="part-img">
                                        <img src="assets/images/product-dscr-img.jpg" alt="Image"/>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6">
                                    <p class="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodt tempor incididunt ut labore et dolore magna aliqua. Quis ipsum vcdisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                            <p>Shank porchetta anim ham in esse. Duis swine mollit incididunt, quis pork belly rump ut ball tip venison strip steak pancetta proident. Ground roun duis beef, eu sunt non dolor esse capicola shoulder strip steak. Ut fatback chuck minim exercitation kielbasa. Cupidatat nostrud prosciutto corned beefdgf meatball sausage lorem.Ground round jowl pig, short ribs turducken cillum labore aliqua bacon ea doner anim esse. Jerky laboris id, fatback ut gfjb Filet mignon corned beef laboris ipsum porchetta beef irure dolor fatback. Pariatur cupim occaecat short ribs</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
                        <div class="product-information">
                            <ul>
                                <li><span>Brand Name:</span>KLGH</li>
                                <li><span>Vocalism Principle:</span>Dynamic</li>
                                <li><span>Style:</span>Over the Ear</li>
                                <li><span>Origin:</span>Mainland China</li>
                                <li><span>Control Button:</span>Yes</li>
                                <li><span>Volume Control:</span>Yes</li>
                                <li><span>Certification:</span>CE</li>
                                <li><span>Number Of Drivers:</span>2</li>
                                <li><span>Plug Type:</span>Line Type</li>
                                <li><span>Range:</span>up to 32 Ω</li>
                                <li><span>Material:</span>Fabric</li>
                                <li><span>Memory Card:</span>Yes</li>
                                <li><span>Waterproof:</span>No</li>
                                <li><span>Magnet Type:</span>Other</li>
                                <li><span>Wireless Type:</span>Bluetooth</li>
                                <li><span>Codecs:</span>AAC</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
                        <div class="product-review">
                            <div class="review-overview">
                                <div class="left">
                                    <h2>4.2 <span>/5</span></h2>
                                    <p>251 Ratings</p>
                                </div>
                                <div class="right">
                                    <ul>
                                        <li>
                                            <div class="stars">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                            </div>
                                            <div class="review-line">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'41%'}} aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="percentage">
                                                <span>103</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="stars">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <div class="review-line">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'29%'}} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="percentage">
                                                <span>73</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="stars">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <div class="review-line">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'16%'}} aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="percentage">
                                                <span>39</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="stars">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <div class="review-line">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'11%'}} aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="percentage">
                                                <span>27</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="stars">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                            <div class="review-line">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'3%'}} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="percentage">
                                                <span>09</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-title">
                                <h3>Reviews</h3>
                            </div>
                            <div class="review-wrap">
                                <div class="single-review">
                                    <div class="user">
                                        <div class="part-img">
                                            <img src="assets/images/avatar.png" alt="User"/>
                                        </div>
                                        <div class="txt">
                                            <span class="name">Shaikh Dardah</span>
                                            <span class="date">17/08/2022</span>
                                            <span class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="comment-area">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                        <div class="bottom-wrap">
                                            <div class="gallery-wrap">
                                                <div class="img-gallery">
                                                    <button class="client-img"><img src="assets/images/review-img-1.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-2.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-3.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-4.jpg" alt="image"/></button>
                                                </div>
                                                <div class="view-panel">
                                                    <img class="client-product" src="assets/images/index.html" alt="image"/>
                                                    <button class="clt-view-panel-close"><i class="fa-light fa-circle-xmark"></i></button>
                                                </div>
                                            </div>
                                            <div class="reaction">
                                                <div class="like">
                                                    <button><i class="fa-duotone fa-thumbs-up"></i></button>
                                                    <span>(2)</span>
                                                </div>
                                                <div class="dislike">
                                                    <button><i class="fa-duotone fa-thumbs-down"></i></button>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-review">
                                    <div class="user">
                                        <div class="part-img">
                                            <img src="assets/images/avatar.png" alt="User"/>
                                        </div>
                                        <div class="txt">
                                            <span class="name">Shaikh Dardah</span>
                                            <span class="date">17/08/2022</span>
                                            <span class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="comment-area">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                        <div class="bottom-wrap">
                                            <div class="gallery-wrap">
                                                <div class="img-gallery">
                                                    <button class="client-img"><img src="assets/images/review-img-1.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-2.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-3.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-4.jpg" alt="image"/></button>
                                                </div>
                                                <div class="view-panel">
                                                    <img class="client-product" src="assets/images/index.html" alt="image"/>
                                                    <button class="clt-view-panel-close"><i class="fa-light fa-circle-xmark"></i></button>
                                                </div>
                                            </div>
                                            <div class="reaction">
                                                <div class="like">
                                                    <button><i class="fa-duotone fa-thumbs-up"></i></button>
                                                    <span>(2)</span>
                                                </div>
                                                <div class="dislike">
                                                    <button><i class="fa-duotone fa-thumbs-down"></i></button>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-review">
                                    <div class="user">
                                        <div class="part-img">
                                            <img src="assets/images/avatar.png" alt="User"/>
                                        </div>
                                        <div class="txt">
                                            <span class="name">Shaikh Dardah</span>
                                            <span class="date">17/08/2022</span>
                                            <span class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="comment-area">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                        <div class="bottom-wrap">
                                            <div class="gallery-wrap">
                                                <div class="img-gallery">
                                                    <button class="client-img"><img src="assets/images/review-img-1.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-2.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-3.jpg" alt="image"/></button>
                                                    <button class="client-img"><img src="assets/images/review-img-4.jpg" alt="image"/></button>
                                                </div>
                                                <div class="view-panel">
                                                    <img class="client-product" src="assets/images/index.html" alt="image"/>
                                                    <button class="clt-view-panel-close"><i class="fa-light fa-circle-xmark"></i></button>
                                                </div>
                                            </div>
                                            <div class="reaction">
                                                <div class="like">
                                                    <button><i class="fa-duotone fa-thumbs-up"></i></button>
                                                    <span>(2)</span>
                                                </div>
                                                <div class="dislike">
                                                    <button><i class="fa-duotone fa-thumbs-down"></i></button>
                                                    <span>(0)</span>
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
        </div>
    </div>


<Footer/>

    </div>
  )
}

export default Product_view