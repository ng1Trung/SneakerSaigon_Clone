
// luu file html
const component = {}


// luu tat ca noi dung html


component.begin = `

<div id="header">
    <div class="container">
        <img src="../C4EJS43/Image/logo-3475.png" alt="logo Sneaker" id="img">
        <div id="nav-bar">
            <ul id="infor-menu">
                <li class="infor-menu-list" id="product">
                    <a href="../C4E-official/store/sanpham-page1.html" class="list-name">Sản Phẩm</a>
                    <div id="menu-list">
                        <div id="menu-bar">
                            <ul id="product-menu">
                                <div id="column-1">
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Air Force 1</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Stan Smith</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Vans</a></li>
                                </div>

                                <div id="column-2">
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Human Race</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">ProPhere</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Air Jordan</a></li>
                                </div>

                                <div id="column-3">
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Vapor Max</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">MLB-Fila</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">NMD</a></li>
                                </div>

                                <div id="column-4">
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Super Star</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Arkyn</a></li>
                                    <li class="list-items"><a class="list-product-menu" style="color: white" href="#">Classic</a></li>
                                </div>

                            </ul>
                        </div>
                    </div>

                </li>
                <li class="infor-menu-list"><a href="#" class="list-name">Sale</a></li>
                <li class="infor-menu-list"><a href="#" class="list-name">Tin Tức</a></li>
                <li class="infor-menu-list"><a href="#" class="list-name">Limited</a></li>
                <li class="infor-menu-list"><a href="#" class="list-name">Phụ Kiện</a></li>
                <li id="search-logo" class="infor-menu-list"
                    style="transform: scale(1.2) ; border-right: 1px solid black;">
                    <a href="#" id="finding"><i class="fas fa-search" style="transform: scale(1.3)"></i><br></a>
                    <input type="search" placeholder="Tìm Kiếm" id="search-bar">

                </li>
                <li id="shopping-logo" class="infor-menu-list"
                    style="transform: scale(1.2); position: relative; right: 25px; border-right: 1px solid black; ">
                    <a href="#"><i class="fas fa-shopping-cart" style="transform: scale(1.3)"></i></a>

                </li>
                <li id="phone-logo" class="infor-menu-list">
                   
                    <a href="#"  style="transform: scale(1.2); position: relative; right: 48px;"><i class="fas fa-phone-alt" style="transform: scale(1.3)"></i></a>

                    <span style="font-size: 13px" id="support">HOTLINE HỖ TRỢ <br>
                        <span style="font-size: 15px">0901375677</span>
                    </span>
                </li>   
                
                <li class="infor-menu-list" id="user">
                    <a href="#" style="transform: scale(1.6); position: relative; right: 47px; top: 2px" id="user-btn">
                            <i class="fas fa-user" style="transform: scale(1.3)"></i></a>

                    <a href="#">
                    <span id="sign-up"><span id="log-btn">Đăng Nhâp / Đăng Kí </span>

                    <button id="sign-out-btn"><i class="fas fa-sign-out-alt"></i></button> 
                    
                    </span>
                    
                    </a>

                              
                </li>

                <li class="person">

                    <div id="current-user"></div>

                </li>
            </ul>
        </div>
    </div>
</div>

<div class="courasel-large-img">
    <div><img src="../C4EJS43/Image/3134083556545120.jpg" alt=""></div>
    <div><img src="../C4EJS43/Image/219007695964179.jpg" alt=""></div>
    <div><img src="../C4EJS43/Image/9186963780455400.jpg" alt=""></div>
</div>


<div id="service">
    <div id="support" style="border-right: 1px solid grey">
        <p>DỊCH VỤ HỖ TRỢ<br>
            <span class="detail">0901375677</span>
        </p>
    </div>
    <div id="shipping" style="border-right: 1px solid grey">
        <p>VẬN CHUYỂN TOÀN QUỐC<br>
            <span class="detail">Tất cả các đơn hàng</span>
        </p>
    </div>
    <div id="cleaning" style="border-right: 1px solid grey">
        <p>MIỄN PHÍ VỆ SINH<br>
            <span class="detail">Miễn phí vệ sinh trọn đời tất cả các sản phẩm</span>
        </p>
    </div>
    <div id="refund">
        <p>CHÍNH SÁCH ĐỔI TRẢ<br>
            <span class="detail">Miễn phí trong 2 tuần đầu tiên</span>
        </p>
    </div>
</div>

<main id="collection">
    <div id="title">COLLECTION</div>

    <div id="list-img">

        <section id="list-img-1">
            <div class="list-img-detail" id="img-1">

                <img src="../C4EJS43/Image/389307129623491539518778414310540293177344n-9236.jpg" alt="" title="abc">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub">CLASSIC</span>

                    </div>
                </a>

            </div>

            <div class="list-img-detail" id="img-2">

                <img src="../C4EJS43/Image/389242734221669716107486412211556737613824n-7203.jpg" alt="">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub-2">AIR MAX - M2K - CORTEX</span>

                    </div>
                </a>

            </div>

            <div class="list-img-detail" id="img-3">

                <img src="../C4EJS43/Image/126043e24311ee544c49b357818dadfa7ff1024x1024-8801.jpg" alt="">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub">UPTEMPO</span>

                    </div>
                </a>

            </div>

        </section>

        <section id="list-img-2">
            <div class="list-img-detail" id="img-4">

                <img src="../C4EJS43/Image/3622942121802644686565547157140322462466048n-8280.jpg" alt="">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub-4">NMD - ULTRA BOOST - ARKYN</span>

                    </div>
                </a>

            </div>

            <div class="list-img-detail" id="img-5">

                <img src="../C4EJS43/Image/gold-2401.png" alt="">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub-5">AIR JORDAN</span>

                    </div>
                </a>

            </div>

            <div class="list-img-detail" id="img-6">

                <img src="../C4EJS43/Image/19982ef2554d7fc65490f1f4ab21322c-5621.jpg" alt="">

                <a href="#">
                    <div class="black-ground" style="color: white; ">
                        <span class="sub">TUBULAR</span>

                    </div>
                </a>

            </div>
        </section>
    </div>

    <div id="feed-back">

        <div id="zoom-img">

            <div id="feed-back-title">
                <p style="font-size: 21px; font-weight: bolder; position: relative;left: 6px; bottom: 5px;     ">@SAIGONSNEAKERSTORE</p>
            </div>

            <div id="feed-back-row-1">
                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/264854587823437 (1).jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/473408216764634.jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/639948041610623.jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/628141056372599.jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

            </div>

            <div id="feed-back-row-2">

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/529710322785276.jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/923224416737248.png" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/036019444945783.jpg" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

                <div class="feed-back-img">
                    <a href="#" class="feed-back-img-click">
                        <img src="../C4EJS43/Image/feedback/241735645686470.png" width="178px" height="145px"
                            alt="">
                    </a>
                </div>

            </div>

        </div>

        <div id="feed-back-facebook">

            <div id="sub-iframe">

                <p id="sub-iframe-title">SAIGON SNEAKER STORE</p>

            </div>

            <div id="iframe-src">

                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSNKRSG%2F&tabs=timeline&width=427&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=591446771288737"
                    width="427" height="297" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                    allowTransparency="true" allow="encrypted-media"></iframe>

            </div>

        </div>

    </div>

    <div id="seller-product">
        <div id="best-seller-product">

        <div id="best-seller-product-child">

            <div id="best-seller-title">
                <p style="font-size: 33px; font-weight: bolder  ">SẢN PHẨM BÁN CHẠY</p>
            </div>

            <div id="best-seller-product-list">

                <div class="own-product">
                    <div class="own-product-detail">

                        <a href="#">
                            <img src="../C4EJS43/Image/product/img-1.jpg"   alt="" class="own-product-img">
                        </a>

                        <div class="own-price">
                            
                            <div class="own-price-detail">

                                    <p>2,300,000 VNĐ</p>
                                    <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                    <a href="#" class="shoes-infor" >Stan Smith</a>
                               
                            </div>

                        </div>

                    </div>

                </div>

                <div class="own-product">
                        <div class="own-product-detail">

                            <a href="#">
                                <img src="../C4EJS43/Image/product/img-2.jpg"   alt="" class="own-product-img">
                            </a>

                            <div class="own-price">
                                
                                <div class="own-price-detail">

                                        <p>3,200,000 VNĐ</p>
                                        <span style="text-decoration: line-through">3,600,000 VNĐ</span>
                                        <a href="#" class="shoes-infor" >Air Force 1</a>
                                   
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="own-product">
                            <div class="own-product-detail">
    
                                <a href="#">
                                    <img src="../C4EJS43/Image/product/img-3.jpg"   alt="" class="own-product-img">
                                </a>
    
                                <div class="own-price">
                                    
                                    <div class="own-price-detail">
    
                                            <p>1,700,000 VNĐ</p>
                                            <span style="text-decoration: line-through">1,900,000 VNĐ</span>
                                            <a href="#" class="shoes-infor" >Converse</a>
                                       
                                    </div>
    
                                </div>
    
                            </div>
    
                    </div>
                    
                    <div class="own-product">
                            <div class="own-product-detail">
    
                                <a href="#">
                                    <img src="../C4EJS43/Image/product/img-4.jpg"   alt="" class="own-product-img">
                                </a>
    
                                <div class="own-price">
                                    
                                    <div class="own-price-detail">
    
                                            <p>4,300,000 VNĐ</p>
                                            <span style="text-decoration: line-through">4,500,000 VNĐ</span>
                                            <a href="#" class="shoes-infor"  style="font-size: 17px">Ultra Boost</a>
                                       
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
                            
                    <div class="own-product">
                            <div class="own-product-detail">
    
                                <a href="#">
                                    <img src="../C4EJS43/Image/product/img-10.jpg"   alt="" class="own-product-img">
                                </a>
    
                                <div class="own-price">
                                    
                                    <div class="own-price-detail">
    
                                            <p>2,300,000 VNĐ</p>
                                            <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                            <a href="#" class="shoes-infor" >Stan Smith</a>
                                       
                                    </div>
    
                            </div>
    
                        </div>
            
                    </div>
                    <div class="own-product">
                            <div class="own-product-detail">
    
                                <a href="#">
                                    <img src="../C4EJS43/Image/product/img-6.jpg"   alt="" class="own-product-img">
                                </a>
    
                                <div class="own-price">
                                    
                                    <div class="own-price-detail">
    
                                            <p>1,300,000 VNĐ</p>
                                            <span style="text-decoration: line-through">1,500,000 VNĐ</span>
                                            <a href="#" class="shoes-infor" >Arkyn</a>
                                       
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-7.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>3,400,000 VNĐ</p>
                                                <span style="text-decoration: line-through">3,900,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" style="font-size: 16px;" >Air Jordan 1</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-8.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor">Alpha Bounce</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-9.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,800,000 VNĐ</p>
                                                <span style="text-decoration: line-through">3,200,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >MLB</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-12.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>4,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">4,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor"> Jordan 4</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-13.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Air Max 97</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-14.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>1,900,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,100,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Nike Cortex</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>
                    
                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-15.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,900,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,800,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Super Star</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-15.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,600,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,800,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Converse 1970s</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/product/img-16.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>530,000 VNĐ</p>
                                                <span style="text-decoration: line-through">550,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Balo Snkrsg</a>
                                           
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>   
            </div>

        </div>
        </div>
        <div id="new-seller-product">

            <div id="best-seller-product-child">

                <div id="best-seller-title">
                    <p style="font-size: 33px; font-weight: bolder  ">SẢN PHẨM MỚI</p>
                </div>

                <div id="new-seller-product-list">

                    <div class="own-product">
                        <div class="own-product-detail">

                            <a href="#">
                                <img src="../C4EJS43/Image/new product/nikewmnsairmax97ultraah6806101whitewhitebluenebula-3937.jpg"   alt="" class="own-product-img">
                            </a>

                            <div class="own-price">
                                
                                <div class="own-price-detail">

                                        <p>2,300,000 VNĐ</p>
                                        <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                        <a href="#" class="shoes-infor" >Stan Smith</a>
                                   
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="own-product">
                            <div class="own-product-detail">
    
                                <a href="#">
                                    <img src="../C4EJS43/Image/new product/Yung-1.jpeg"   alt="" class="own-product-img">
                                </a>
    
                                <div class="own-price">
                                    
                                    <div class="own-price-detail">
    
                                            <p>3,200,000 VNĐ</p>
                                            <span style="text-decoration: line-through">3,600,000 VNĐ</span>
                                            <a href="#" class="shoes-infor" >Air Force 1</a>
                                       
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>

                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/new product/NMD-2.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>1,700,000 VNĐ</p>
                                                <span style="text-decoration: line-through">1,900,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Converse</a>
                                           
                                        </div>
        
                                    </div>
        
                                </div>
        
                        </div>
                        
                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/new product/Ultra boost-3.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>4,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">4,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor"  style="font-size: 17px">Ultra Boost</a>
                                           
                                        </div>
        
                                    </div>
        
                                </div>
        
                            </div>
                                
                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/new product/imgs-4.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>2,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Stan Smith</a>
                                           
                                        </div>
        
                                </div>
        
                            </div>
                
                        </div>
                        <div class="own-product">
                                <div class="own-product-detail">
        
                                    <a href="#">
                                        <img src="../C4EJS43/Image/new product/imgs-5.jpg"   alt="" class="own-product-img">
                                    </a>
        
                                    <div class="own-price">
                                        
                                        <div class="own-price-detail">
        
                                                <p>1,300,000 VNĐ</p>
                                                <span style="text-decoration: line-through">1,500,000 VNĐ</span>
                                                <a href="#" class="shoes-infor" >Arkyn</a>
                                           
                                        </div>
        
                                    </div>
        
                                </div>
        
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-6.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>3,400,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">3,900,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" style="font-size: 16px;" >Air Jordan 1</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-7.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>2,300,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor">Alpha Bounce</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-8.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>2,800,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">3,200,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >MLB</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-9.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>4,300,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">4,500,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor"> Jordan 4</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-10.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>2,300,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">2,500,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >Air Max 97</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-11.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>1,900,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">2,100,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >Nike Cortex</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>
                        
                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-11.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>2,900,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">2,800,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >Super Star</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs12.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>2,600,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">2,800,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >Converse 1970s</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>

                            <div class="own-product">
                                    <div class="own-product-detail">
            
                                        <a href="#">
                                            <img src="../C4EJS43/Image/new product/imgs-13.jpg"   alt="" class="own-product-img">
                                        </a>
            
                                        <div class="own-price">
                                            
                                            <div class="own-price-detail">
            
                                                    <p>530,000 VNĐ</p>
                                                    <span style="text-decoration: line-through">550,000 VNĐ</span>
                                                    <a href="#" class="shoes-infor" >Balo Snkrsg</a>
                                               
                                        </div>
            
                                    </div>
            
                                </div>
            
                            </div>
                    
                </div>

            </div>
        </div>
    </div>

</main>

<footer id="footer">
        <section id="infor">
            <div class="footer-column"  id="column-1">
                <p class="column-title">THÔNG TIN LIÊN HỆ</p>
                <ul class="column-content"> 
                    <li>
                        <i class="fas fa-map-marker-alt"></i> 
                        <p class="column-content-detail">PTIT, HaDong, Hanoi</p>
                    </li>   

                    <li>
                        <i class="fas fa-phone-square-alt"></i> 
                        <p class="column-content-detail">0368961524</p>
                    </li> 

                    <li>
                        <i class="fas fa-envelope-open-text"></i>
                         <p class="column-content-detail">anhbeo.jacky@gmail.com</p>
                    </li> 

                    <li>
                        <i class="fas fa-globe-americas" class="column-content-detail"></i> 
                        <p class="column-content-detail">WWW.SNEAKERSAIGON.COM</p>
                    </li>   

                </ul>
            </div>

            <div class="footer-column" id="column-2">
                <p class="column-title">GIỜ LÀM VIỆC</p>
                <p class="column-content-detail">Giờ làm việc của chúng tôi<br>
                    <span style="position: relative; top: 10px;">9:00 - 21:00</span>
                </p>

            </div>
            <div class="footer-column"  id="column-3">
                <p class="column-title">ĐĂNG KÍ NHẬN TIN</p>
                <p style="width: 280px" class="column-content-detail">Hãy nhanh tay đăng kí nhận tin để nhận thông tin khuyến mãi</p>
                
                <div id="email-checker">
                    <input type="email" name="email" placeholder="Email của bạn" class="email">
                    
                    <div id="submit">
                        <button id="submit-button">Gửi</button>
                    </div>
                </div>
            </div>

        </section>
</footer>

`


component.register = `
    <section class="register-container">
        <form id="register-form" class="register-form">
          <div class="form-header">
            <h3>ĐĂNG KÍ</h3>
          </div>
          <div class="form-content">
            <div class="name-wrapper">
              <div class="input-wrapper">
                <input type="text" name="firstname" placeholder="Firstname">
                <div id="firstname-error" class="message-error"></div>
              </div>
              <div class="input-wrapper">
                <input type="text" name="lastname" placeholder="Lastname">
                <div id="lastname-error" class="message-error"></div>
              </div>
            </div>
            <div class="input-wrapper">
              <input type="email" name="email" placeholder="Email">
              <div id="email-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
              <input type="password" name="password" placeholder="Password">
              <div id="password-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
              <input type="password" name="confirmPassword" placeholder="Confirm password">
              <div id="confirmPassword-error" class="message-error"></div>
            </div>
          </div>
          <div id="register-error" class="message-error"></div>
          <div id="register-success" class="message-success"></div>
          <div class="form-footer">
            <a id="form-link" href="#">Already have an account? Login</a>
            <button type="submit" id="register-btn">Register</button>
          </div>
        </form>
    </section>
`

component.logIn= `
<section class="log-in-container">
    <form id="log-in-form"class="log-in-form">
      <div class="form-header">
        <h3>ĐĂNG NHẬP</h3>
      </div>
      <div class="form-content">
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Email">
          <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password">
          <div id="password-error" class="message-error"></div>
        </div>
      </div>
      <div id="logIn-error" class="message-error"></div>
          <div id="logIn-success" class="message-success"></div>
      <div class="form-footer">
        <a  id="form-link"href="#">Not yet have an account? Register</a>
        <button type="submit" id="logIn-btn">Log In</button>
      </div>
    </form>
</section>

`