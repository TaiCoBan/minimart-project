import { receipts } from "../data/data.js";
import {headerWrapper, footer } from "./CommonElement.js"

const userInfo = `
    <div class="user-infor">
        <img src="../static/image/logo.png" alt="">
        <span>USER NAME</span>
    </div>
`
const sidebarContent = `
    <div class="side-bar-content">
        <ul>
            <a href="#" id="info"><li><i class="fa fa-edit"></i><span>Thông tin tài khoản</span></li></a>
            <a href="#" id="receipts"><li><i class="fas fa-money-check"></i><span>Quản lý đơn hàng</span></li></a>
            <a href="#" id="reset"> <li><i class="fas fa-lock"></i><span> Đổi mật khẩu</span></li></a>
        </ul>
    </div>
`

const leftContainer = `
    <div class="left-container">
        ${userInfo}
        ${sidebarContent}
    </div>
`

const receiptInfoMap = receipts.map(receipt => `
    <tr>
        <th scope="row">${receipt.id}</th>
        <td>${receipt.cusName}</td>
        <td>${receipt.date}</td>
        <td><a href="#" id="details">Xem chi tiết</a></td>
        <td>${receipt.status === 0 ? 'Đang xử lí' : 'Hoàn thành'}</td>
    </tr>
`).join('');

const receiptInfo = `
    <h3 class="title-content">Đơn hàng</h3>
        <div class="receipt-infor">
            
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Ngày đặt hàng</th>
                    <th scope="col">Chi tiết đơn hàng</th>
                        <th scope="col">Tình trạng đơn hàng</th>
                    </tr>
                </thead>
                <tbody>
                    ${receiptInfoMap}
                </tbody>
                </table>
        </div>
`
const accountInfo = `
    <h3 class="title-content">Thông tin tài khoản</h3>
    <div class="account-infor">
        <form action="">
            <div class="form-control">
                <label for="" class="input-label">
                    Họ & tên
                </label>
                <input type="text" placeholder="Thêm họ tên" class="input-field">
            </div>
            <div class="form-control">
                <label for="" class="input-label">
                    Email
                </label>
                <input type="email" placeholder="Thêm email" class="input-field">
            </div>
            
            <div class="form-control">
                <label for="" class="input-label">
                    Số điện thoại
                </label>
                <input type="phone" placeholder="Thêm số điện thoại" class="input-field">
            </div>
            <div class="form-control">
                <label for="" class="input-label">
                    Địa chỉ giao hàng
                </label>
                <input type="phone" placeholder="Địa chỉ" class="input-field">
            </div>
            <div class="form-control">
                <label for="" class="input-label">
                    Giới tính
                </label>

                <input type="radio" name="gender" value="male" checked class="input-radio"> Nam
                <input type="radio" name="gender" value="female" class="input-radio"> Nữ
                <input type="radio" name="gender" value="other" class="input-radio"> Khác

            </div>

            <button class="btn-update">Cập nhật</button>
        </form>
    </div>
`
const resetPasswordInfo = `
    <h3 class="title-content">Đổi mật khẩu</h3>
        <div class="reset-password-content">
            <form action="">
                <div class="form-control">
                    <label for="" class="input-label">Mật khẩu hiện tại</label>
                    <input type="password" class="input-field" id="input">
                </div>
                <div class="form-control">
                    <label for="" class="input-label">Mật khẩu mới</label>
                    <input type="password" class="input-field">
                </div>
                <div class="form-control">
                    <label for="" class="input-label">Nhập lại mật khẩu</label>
                    <input type="password" class="input-field">
                </div>
                <button class="btn-update-password">Đổi mật khẩu</button>
            </form>
        </div>
`
const receiptDetails = `
    <h3 class="title-content">Đơn hàng đã đặt/ Chi tiết đơn hàng</h3>
    <div class="receipt-infor-details">
        <div class="title-receipt">
            <div class="left-content content">
                <h4>ĐƠN HÀNG</h4>
                <p class="receipt-id">Mã đơn hàng: DH01</p>
                <p class="receipt-time">Đặt hàng: 10/10/2021</p>
            </div>
            <p></p>
            <div class="right-content content">
                <h4>THÔNG TIN NHẬN HÀNG</h4>
                <p><strong>NGUYỄN DU KHÁNH</strong> - 0364413771</p>
                <p class="address">số nhà 82, đường 30, khu phố 6 - Phường Bình Chiểu - Thành phố
                    Thủ Đức - Hồ Chí Minh</p>
            </div>
        </div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th>Sản phẩm</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="product-title">
                            <img src="images/iPhone_13.jpg" alt="">
                            <div>
                                <p>iPhone 13 Pro 128GB</p>
                                <p>Màu sắc: Đỏ</p>
                            </div>
                        </div>
                    </td>
                    <td><div class="item-center">30.750.000đ</div></td>
                    <td><div class="item-center">1</div></td>
                    <td><div class="item-center">30.750.000đ</div></td>
                </tr>

                <tr>
                    <td>
                        <div class="product-title">
                            <img src="images/iphone11.png" alt="">
                            <div>
                                <p>iPhone 11 Pro 128GB</p>
                                <p>Màu sắc: Xanh</p>
                            </div>
                        </div>
                    </td>
                    <td><div class="item-center">17.000.000đ</div></td>
                    <td><div class="item-center">1</div></td>
                    <td><div class="item-center">17.000.000đ</div></td>
                </tr>

            </tbody>

            <tfoot>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td scope="row">
                        <div>
                            <p>Tổng tiền:</p>
                            <p>Phí vận chuyển:</p>
                            <p>Tổng thanh toán:</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>47.750.000đ</p>
                            <p>50.000đ</p>
                            <p>47.800.000đ</p>
                        </div>
                    </td>
                </tr>

            </tfoot>
        </table>
        <a href="profile-receipt.html" class="redirect-to-receipt text-blue"><i class="fas fa-long-arrow-alt-left"></i> Danh sách đơn hàng</a>
    </div>
`
function createRecepitDetails(productItem) {
    return `
        <tr>
            <td>
                <div class="product-title">
                    <img src="" alt="">
                    <div>
                        <p>${productItem.name}</p>
                    </div>
                </div>
            </td>
            <td><div class="item-center">${productItem.price}</div></td>
            <td><div class="item-center">${productItem.quantity}</div></td>
            <td><div class="item-center">${productItem.price * productItem.quantity}</div></td>
        </tr>
    `
}
const rightContainer = `
    <div class="right-container">
        <div id="main-content"></div>
    </div>
`

const content = `
    <div class="content">
        <div class="container">
            <div class="box">
                <div class="row-account">
                    ${leftContainer}
                    ${rightContainer}
                </div>
            </div>
        </div>
    </div>
`
const pageHeader = `
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

const wholePage = `
    ${headerWrapper}
    ${pageHeader}
    ${content}
    ${footer}
`

document.getElementById('whole-page').innerHTML = wholePage

let mainContent = document.getElementById('main-content');
mainContent.innerHTML = accountInfo;

document.getElementById('info').onclick = function() {
    mainContentHandler(1);
};

document.getElementById('receipts').onclick = function() {
    mainContentHandler(2);
};

document.getElementById('reset').onclick = function() {
    mainContentHandler(3);
};

document.querySelectorAll('#details').forEach(item => {
    item.onclick = function() {
        mainContentHandler(4);
    };
});

function mainContentHandler(key) {
    if (key === 1) {
        mainContent.innerHTML = accountInfo;
    } else if (key === 2) {
        mainContent.innerHTML = receiptInfo;
    } else if (key === 3) {
        mainContent.innerHTML = resetPasswordInfo;
    } else if (key === 4) {
        mainContent.innerHTML = receiptDetails;
    } else {
        mainContent.innerHTML = "Có lỗi xảy ra";
    }
}

