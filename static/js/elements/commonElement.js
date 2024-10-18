

// Header
const topHeader = `
    <div class="top-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-6 hidden-xs">
                    <p class="top-text">Minimart</p>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <ul>
                        <li>+012 345 6789</li>
                        <li>ldtt@tkw.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`
const logo = `
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-8">
        <div class="logo">
            <a href="index.html"><img src="../static/image/logo3.png" alt=""> </a>
        </div>
    </div>
`
const search = `
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="search-bg">
            <input type="text" class="form-control" placeholder="Tìm kiếm">
            <button type="Submit"><i class="fa fa-search"></i></button>
        </div>
    </div>
`
const account = `
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="account-section">
            <ul>
                <li><a href="account.html" class="title hidden-xs">Tài khoản</a></li>
                <li class="hidden-xs">|</li>
                <li><a href="login-form.html" class="title hidden-xs">Đăng nhập</a></li>
                <li><a href="favorite-list.html"><i class="fa fa-heart"></i></a></li>
                <li><a href="cart.html" class="title"><i class="fa fa-shopping-cart"></i> <sup
                            class="cart-quantity">1</sup></a>
                </li>
            </ul>
        </div>
    </div>
`
const navigation = `
    <div class="navigation">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <!-- navigations-->
                    <div id="navigation">
                        <ul>
                            <li class="active"><a href="index.html">Trang chủ</a></li>
                            <li><a href="product-list.html">Điện thoại</a>
                            </li>
                            <li><a href="about.html">Thông tin</a>
                            </li>
                            <li><a href="blog-default.html">Bài viết</a> </li>
                            <li><a href="contact-us.html">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
const headerWrapper = `
    <div class="header-wrapper">
        <div class="container">
            <div class="row">
                ${logo}
                ${search}
                ${account}
            </div>
        </div>
        ${navigation}
    </div>
`
export const header = `
    ${topHeader}
    ${headerWrapper}
`

// Footer
const tinyFooter = `
    <div class="tiny-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p class="aligncenter">Copyright © All Rights Reserved 2024 Template Design by
                        <a href="#" target="_blank" class="copyrightlink">IT3</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
`
const footerSocialLink = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="footer-widget">
            <h3 class="footer-title">Liên lạc với chúng tôi</h3>
            <div class="ft-social">
                <span><a href="#" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a></span>
                <span><a href="#" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a></span>
                <span><a href="#" class="btn-social btn-googleplus"><i
                            class="fa fa-google-plus"></i></a></span>
                <span><a href="#" class=" btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a></span>
                <span><a href="#" class=" btn-social btn-pinterest"><i
                            class="fa fa-pinterest-p"></i></a></span>
                <span><a href="#" class=" btn-social btn-instagram"><i
                            class="fa fa-instagram"></i></a></span>
            </div>
        </div>
    </div>
`
const FooterPolicyListLink = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="footer-widget">
            <h3 class="footer-title">Chính sách</h3>
            <ul class="arrow">
                <li><a href="#">Thanh toán</a></li>
                <li><a href="#">Hủy, trả hàng</a></li>
                <li><a href="#">Giao hàng và vận chuyển</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
            </ul>
        </div>
    </div>
`
const footerUsefulLinks = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
    <div class="footer-widget">
        <h3 class="footer-title">Tiện ích</h3>
        <ul class="arrow">
            <li><a href="index.html">Home </a></li>
            <li><a href="product-list.html">Mobie</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="blog-default.html">Blog</a></li>
            <li><a href="contact-us.html">Contact</a></li>
        </ul>
    </div>
</div>
`
const footerContactLinks = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="footer-widget">
            <h3 class="footer-title">Thông tin hỗ trợ</h3>
            <div class="contact-info">
                <span class="contact-icon"><i class="fa fa-map-marker"></i></span>
                <span class="contact-text">Hà Nội</span>
            </div>
            <div class="contact-info">
                <span class="contact-icon"><i class="fa fa-phone"></i></span>
                <span class="contact-text">+012 345 6789</span>
            </div>
            <div class="contact-info">
                <span class="contact-icon"><i class="fa fa-envelope"></i></span>
                <span class="contact-text">ldtt@tkw.com</span>
            </div>
        </div>
    </div>
`
export const footer = `
    <div class="footer">
        <div class="container">
            <div class="row">
                ${footerContactLinks}
                ${footerUsefulLinks}
                ${FooterPolicyListLink}
                ${footerSocialLink}
            </div>
        </div>
        ${tinyFooter}
    </div>
`

// Page header in profile
export const pageHeader = `
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li><a href="#">Trang chủ</a></li>
                            <li>Thông tin tài khoản</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    </div>
`


// Sidebar
const sideBarContent = `
    <div class="side-bar-content">
        <ul>
            <a href=""><li class="slide-bar active"><i class="fa fa-edit"></i><span>Thông tin tài khoản</span></li></a>
            <a href="profile-receipt.html"><li class="slide-bar"><i class="fas fa-money-check"></i><span>Quản lý đơn hàng</span></li></a>
            <!-- <a href="address-deliver.html"><li class="slide-bar"><i class="fas fa-map-marker-alt"></i><span> Địa chỉ nhận hàng</span></li></a> -->
            <a href="profile-reset-password.html"> <li class="slide-bar"><i class="fas fa-lock"></i><span> Đổi mật khẩu</span></li></a>
        </ul>
    </div>
`
const userInfo = `
    <div class="user-infor">
        <img src="" alt="">
        <span>NGUYEN DU KHANH</span>
    </div>
`
export const sideBar = `
    <div class="left-container">
        ${userInfo}
        ${sideBarContent}
    </div>
`

    document.getElementById('header').innerHTML = header;
    document.getElementById('page-header').innerHTML = pageHeader;
    document.getElementById('footer').innerHTML = footer;

