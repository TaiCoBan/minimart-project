import { topHeader, headerWrapper, footer } from "./CommonElement.js"

const userInfo = `
    <div class="user-infor">
        <img src="../static/image/logo.png" alt="">
        <span>USER NAME</span>
    </div>
`
const sidebarContent = `
    <div class="side-bar-content">
        <ul>
            <a id="info">
                <li class="slide-bar"><i class="fa fa-edit"></i><span>Thông tin tài khoản</span>
                </li>
            </a>
            <a id="receiots">
                <li class="slide-bar"><i class="fas fa-money-check"></i><span>Quản lý đơn
                        hàng</span></li>
            </a>
            <a id="reset">
                <li class="slide-bar active"><i class="fas fa-lock"></i><span> Đổi mật khẩu</span>
                </li>
            </a>
        </ul>
    </div>
`

const leftContainer = `
    <div class="left-container">
        ${userInfo}
        ${sidebarContent}
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
                <tr>
                <th scope="row">DH01</th>
                <td>Du Khánh</td>
                <td>10/10/2021</td>
                <td><a href="profile-receipt-details.html">Xem chi tiết</a></td>
                <td>Đang giao hàng</td>
                </tr>
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
                    Ngày sinh
                </label>
                <input type="date" placeholder="Thêm ngày sinh" class="input-field">
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

const wholePage = `
    ${topHeader}
    ${headerWrapper}
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

function mainContentHandler(key) {
    if (key === 1) {
        mainContent.innerHTML = accountInfo;
    } else if (key === 2) {
        mainContent.innerHTML = receiptInfo;
    } else if (key === 3) {
        mainContent.innerHTML = resetPasswordInfo;
    } else {
        mainContent.innerHTML = "Có lỗi xảy ra";
    }
}

