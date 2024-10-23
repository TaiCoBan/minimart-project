let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Header
const logo = `
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-8">
        <div class="logo">
            <a href="product-list.html"><img src="../static/image/logo3.png" alt=""> </a>
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
const subNav = `
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="account-section">
            <ul>
                <li><a href="profile.html" class="title hidden-xs">Tài khoản</a></li>
                <li class="hidden-xs">|</li>
                <li><a href="login-form.html" class="title hidden-xs">Đăng nhập</a></li>
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="cart.html" class="title"><i class="fa fa-shopping-cart"></i> <sup
                            class="cart-quantity" id="cart-quantity">${cart.length}</sup></a>
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
                            <li class="active"><a href="#">Trang chủ</a></li>
                            <li><a href="product-list.html">Sản phẩm</a>
                            </li>
                            <li><a href="#">Thông tin</a>
                            </li>
                            <li><a href="#">Khuyến mãi</a> </li>
                            <li><a href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
export const headerWrapper = `
<div class="header-wrapper">
    <div class="container">
        <div class="row">
            ${logo}
            ${search}
            ${subNav}
        </div>
    </div>
    ${navigation}
</div>
`

// Footer
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
                <span class="contact-text">+084-123-4567 / 89</span>
            </div>
            <div class="contact-info">
                <span class="contact-icon"><i class="fa fa-envelope"></i></span>
                <span class="contact-text">tkw@TKW.com</span>
            </div>
        </div>
    </div>
`

const footerUsefulLinks = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="footer-widget">
            <h3 class="footer-title">Tiện ích</h3>
            <ul class="arrow">
                <li><a href="product-list.html">Trang chủ </a></li>
                <li><a href="product-list.html">Sản phẩm</a></li>
                <li><a href="#">Thông tin</a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
        </div>
    </div>
`
const footerPolicyLinks = `
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
const footerSocialLinks = `
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

export const footer = `
    <div class="footer">
        <div class="container">
            <div class="row">
                ${footerContactLinks}
                ${footerPolicyLinks}
                ${footerUsefulLinks}
                ${footerSocialLinks}
            </div>
        </div>
    </div>
`