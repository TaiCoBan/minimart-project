import { bills } from "../data/data.js"
import { header, footer } from "./CommonElement.js"

// Sidebar
const userInfo = `
    <div>
        <p>CUSTOMER NAME</p>
    </div>
`
const sideBarContent = `
    <div class="side-bar-content">
        <ul>
            <li class="slide-bar" id="info">
                <i class="fa fa-edit"></i>
                <span>Thông tin tài khoản</span>
            </li>
            <li class="slide-bar active" id="bills">
                <i class="fas fa-money-check"></i>
                <span>Quản lý đơn hàng</span>
            </li>
            <li class="slide-bar" id="reset">
                <i class="fas fa-lock"></i>
                <span>Đổi mật khẩu</span>
            </li>
        </ul>
    </div>
`

export const sideBar = `
    <div class="left-container">
        ${userInfo}
        ${sideBarContent}
    </div>
`

// Content
const accountInf = `
    <div class="right-container">
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
    </div>
`

const renderBills = () => {
    return bills.map(bill => `
        <tr>
            <th scope="row">${bill.id}</th>
            <td>${bill.cusName}</td>
            <td>${bill.date}</td>
            <td><a href="profile-receipt-details.html">Xem chi tiết</a></td>
            <td>${bill.status === 0 ? 'Đang giao hàng' : 'Hoàn thành'}</td>
        </tr>
    `).join('');
}

const billManage = `
    <div class="right-container">
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
                    ${renderBills()}
                </tbody>
                </table>
        </div>
    </div>
`

let currentMainContent = document.createElement('div');
currentMainContent.innerHTML = accountInf; // Gán nội dung ban đầu là accountInf

function setEventHandlers() {
    document.getElementById('info').onclick = function() {
        currentMainContent.innerHTML = accountInf;
    };

    document.getElementById('bills').onclick = function() {
        currentMainContent.innerHTML = billManage;
    };

    document.getElementById('reset').onclick = function() {
        currentMainContent.innerHTML = 'Doi mat khau content';
    };
}

const mainContent = `
    <div class="content">
        <div class="container">
            <div class="box">
                <div class="row-account">
                    ${sideBar}
                    <div id="main-content"></div> <!-- Đây là nơi currentMainContent sẽ được chèn -->
                </div>
            </div>
        </div>
    </div>
`;

const wholePage = `
    ${header}
    <div class="wrapper">
        <div class="contentt">
            ${mainContent}
        </div>
        ${footer}
    </div>
`;

document.getElementById('whole-page').innerHTML = wholePage;

// Chèn currentMainContent vào DOM sau khi trang đã render
document.getElementById('main-content').appendChild(currentMainContent);

// Gán sự kiện sau khi trang đã được render
setEventHandlers();