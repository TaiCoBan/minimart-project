import { bills } from "../data/data.js"
import { header, footer } from "./CommonElement.js"

const userInfo = `
    <div>
        <p>NGUYEN DU KHANH</p>
    </div>
`
// Sidebar
const sideBarContent = `
    <div class="side-bar-content">
        <ul>
            <a href="#"><li class="slide-bar "><i class="fa fa-edit"></i><span>Thông tin tài khoản</span></li></a>
            <a href="#"><li class="slide-bar active"><i class="fas fa-money-check"></i><span>Quản lý đơn hàng</span></li></a>
            <a href="#"> <li class="slide-bar"><i class="fas fa-lock"></i><span> Đổi mật khẩu</span></li></a>
        </ul>
    </div>
`
const sideBar = `
    <div class="left-container">
        ${userInfo}
        ${sideBarContent}
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
};

const content = `
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
`;

const mainContent = `
    <div class="content">
        <div class="container">
            <div class="box">
                <div class="row-account">
                    ${sideBar}
                    ${content}
                </div>
            </div>
        </div>
    </div>
`

const wholePage = `
    ${header}
    <div class="wrapper">
        <div class="contentt">
            ${mainContent}
        </div>
        ${footer}
    </div>
`

document.getElementById('whole-page').innerHTML = wholePage