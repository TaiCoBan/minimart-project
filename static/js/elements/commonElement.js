

// Header
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
                            <li><a href="product-list.html">Sản phẩm</a>
                            </li>
                            <li><a href="#">Thông tin</a>
                            </li>
                            <li><a href="#">Liên hệ</a>
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
    ${headerWrapper}
`

// Footer
const footerSocialLink = `
    <div class=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="footer-widget">
            <h3 class="footer-title">Liên lạc với chúng tôi</h3>
            <div class="ft-social">
                <span><a href="#" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a></span>
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
            <li><a href="#">Trang chủ </a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Thông tin</a></li>
            <li><a href="#">Liên hệ</a></li>
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
    </div>
`

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
