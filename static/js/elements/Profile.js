import { receipts } from "../data/data.js";
import { headerWrapper, footer } from "./CommonElement.js"

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
        ${sidebarContent}
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
                ${receiptInfoMap(receipts)}
            </tbody>
            </table>
    </div>
`

function receiptInfoMap(receipts) {
    return receipts.map(receipt => `
        <tr>
            <td>${receipt.id}</td>
            <td>${receipt.cusName}</td>
            <td>${receipt.date}</td>
            <td><a href="#" class="details" data-id="${receipt.id}">Xem chi tiết</a></td>
            <td>${receipt.status === 0 ? 'Chờ xử lý' : 'Đã hoàn thành'}</td>
        </tr>
    `).join('');
}

function receiptDetailsMap(products) {
    return products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.getPrice().toLocaleString('vi-VN')}đ</td>
            <td>${product.quantity}</td>
            <td>${(product.getTotalPrice()).toLocaleString('vi-VN')}đ</td>
        </tr>
    `).join('');
}

function showReceiptDetails(orderId) {
    // Tìm đơn hàng dựa trên mã đơn hàng (orderId)
    const receipt = receipts.find(r => r.id === orderId);

    // Kiểm tra xem đơn hàng có tồn tại không
    if (receipt) {
        const receiptDetailsHTML = `
            <h3 class="title-content">Đơn hàng / Chi tiết đơn hàng</h3>
            <div class="receipt-infor-details">
                <div class="title-receipt">
                    <div class="left-content content">
                        <h4>ĐƠN HÀNG</h4>
                        <p class="receipt-id">Mã đơn hàng: ${receipt.id}</p>
                        <p class="receipt-time">Đặt hàng: ${receipt.date}</p>
                    </div>
                    <div class="right-content content">
                        <h4>THÔNG TIN NHẬN HÀNG</h4>
                        <p><strong>${receipt.getUser().getName()}</strong></p>
                        <p><strong>${receipt.getUser().getNumber()}</p>
                        <p class="address">${receipt.getUser().getAddress()}</p>
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
                        ${receiptDetailsMap(receipt.products)}
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
                                    <p>${receipt.totalPrice().toLocaleString('vi-VN')}đ</p>
                                    <p>10.000đ</p>
                                    <p>${(receipt.totalPrice() + 10000).toLocaleString('vi-VN')}đ</p>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <a id="back" class="redirect-to-receipt text-blue" style="cursor:pointer"><i class="fas fa-long-arrow-alt-left"></i> Danh sách đơn hàng</a>
            </div>
        `;

        mainContent.innerHTML = receiptDetailsHTML;

        document.getElementById('back').onclick = function() {
            mainContentHandler(2);
        };
    } else {
        mainContent.innerHTML = "Không tìm thấy đơn hàng.";
    }
}

// Sự kiện khi bấm vào "Xem chi tiết"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('details')) {
        event.preventDefault();
        const orderId = event.target.getAttribute('data-id');
        showReceiptDetails(orderId);
    }
});

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

document.querySelectorAll('details').forEach(item => {
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

