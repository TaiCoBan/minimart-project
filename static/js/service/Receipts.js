import { headerWrapper, footer } from "./CommonElement.js";
import { loadCart, totalPriceF, renderCart, loadReceipts, updateReceipts } from "./Cart.js";
import { showNotification, updateCartCount } from "./ProductList.js";
import { getTotalPrice } from "../entity/Entity.js";

export let receipts = JSON.parse(localStorage.getItem('receipts')) || [];
console.log('(1) receipts: ', receipts);
export let cart = JSON.parse(localStorage.getItem('cart')) || [];



const pageHeader = `
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li><a href="#">Trang chủ</a></li>
                            <li>Thông tin đơn hàng</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
const receiptInfo = `
    <h2 class="title">Đơn hàng</h3>
    <div class="receipt-infor" >
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
const rightContainer = `
    <div class="right-container" style="margin-left: auto; margin-right:auto;">
        <div id="main-content"></div>
    </div>
`;
const content = `
    <div class="content">
        <div class="container">
            <div class="box">
                <div class="row-account">
                    
                    ${rightContainer}
                </div>
            </div>
        </div>
    </div>
`;
const noti = `

`
const wholePage = `
    ${headerWrapper}
    ${pageHeader}
    ${content}
    ${footer}
    <div id="notification"></div>
`;
function receiptInfoMap(receipts) {
    return receipts.map(receipt => `
        <tr>
            <td>${receipt.id}</td>
            <td>${receipt.cusName}</td>
            <td>${receipt.date}</td>
            <td><a class="details" data-id="${receipt.id}" id="show-receipt-details" style="cursor: pointer;">Xem chi tiết</a></td>
            <td>${receipt.status === 0 ? 'Đã hủy' : (receipt.status === 1 ? 'Hoàn thành' : 'Đang xử lý')}</td>
        </tr>
    `).join('');
}
function itemInReceiptMap(items) {
    return items.map(i => `
        <tr>
            <td>
                <div class="product-title">
                    <img src="${i.image}" alt="">
                    <div>
                        <p>${i.name}</p>
                    </div>
                </div>
            </td>
            <td><div class="item-center">${i.price}</div></td>
            <td><div class="item-center">${i.quantity}</div></td>
            <td><div class="item-center">${i.price * i.quantity}</div></td>
        </tr>
    `).join('')
}
function showReceiptDetails(orderId) {
    const receipt = receipts.find(r => r.id === orderId);
    const mainContent = document.getElementById('main-content');

    console.log('Đơn hàng tìm thấy: ', receipt);

    if (receipt) {
        const receiptDetailsHTML = `
            <h2 class="title">Đơn hàng / Chi tiết đơn hàng</h2>
            <div class="receipt-infor-details">
                <div class="title-receipt">
                    <div class="left-content content">
                        <h4>ĐƠN HÀNG</h4>
                        <p class="receipt-id">Mã đơn hàng: ${receipt.id}</p>
                        <p class="receipt-time">Đặt hàng: ${receipt.date}</p>
                    </div>
                    <div class="right-content content">
                        <h4>THÔNG TIN NHẬN HÀNG</h4>
                        <p><strong>${receipt.cusName}</strong></p>
                        <p><strong>${receipt.number}</strong></p>
                        <p class="address">${receipt.address}</p>
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
                        ${itemInReceiptMap(receipt.products)}
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
                                    <p>${getTotalPrice(receipt).toLocaleString('vi-VN')}đ</p>
                                    <p>10.000đ</p>
                                    <p>${(getTotalPrice(receipt) + 10000).toLocaleString('vi-VN')}đ</p>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <a id="cancle" class="btn-default btn-checkout receipt-status-btn" data-id="${receipt.id}" style="background-color: red;">Hủy</a>
                <a id="complete" class="btn-default btn-checkout receipt-status-btn" data-id="${receipt.id}">Hoàn thành</a>
                <a id="back" class="redirect-to-receipt text-blue" style="cursor:pointer">
                    <i class="fas fa-long-arrow-alt-left"></i> Danh sách đơn hàng
                </a>
            </div>
        `;

        mainContent.innerHTML = receiptDetailsHTML;

        // Gắn sự kiện
        addBackToRecepitsEventListeners();
        addCancleReceiptEventListeners(receipt);
        addCompleteReceiptEventListeners(receipt);
    } else {
        mainContent.innerHTML = "Không tìm thấy đơn hàng.";
    }
}
function renderReceiptInfo() {
    const tableBody = document.querySelector('.receipt-infor tbody');
    if (tableBody) {
        tableBody.innerHTML = receiptInfoMap(receipts);
        addReceiptDetailEventListeners();
    }
}



function addCancleReceiptEventListeners() {
    const cancelButton = document.getElementById('cancle');
    cancelButton.addEventListener('click', () => {
        const id = cancelButton.getAttribute('data-id');
        console.log('id: ', id)
        const receipt = receipts.find(r => r.id === id);
        console.log('receipt: ', receipt)

        if (receipt) {
            receipt.status = 0;
            updateReceipts(receipts);
            showNotification('Hủy đơn hàng ' + id);
            loadPage()
        } else {
            console.error('Đơn hàng không tồn tại');
        }
    });
}
function addCompleteReceiptEventListeners() {
    const completeButton = document.getElementById('complete');
    completeButton.addEventListener('click', () => {
        const id = completeButton.getAttribute('data-id');
        const receipt = receipts.find(r => r.id === id);

        if (receipt) {
            receipt.status = 1;
            updateReceipts(receipts);
            loadCart();
            showNotification('Hoàn thành đơn hàng ' + id);
            loadPage()
        } else {
            console.error('Đơn hàng không tồn tại');
        }
    });
}
function addReceiptDetailEventListeners() {
    const detailLinks = document.querySelectorAll('.details');
    detailLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const orderId = link.getAttribute('data-id'); // Lấy orderId từ data-id
            showReceiptDetails(orderId); // Gọi hàm để hiển thị chi tiết đơn hàng
        });
    });
}
// function addBackToRecepitsEventListeners() {
//     // document.getElementById('back').addEventListener('click', () => {
//     //     const mainContent = document.getElementById('main-content');
//     //     mainContent.innerHTML = receiptInfo; // Trở lại danh sách đơn hàng
//     //     updateReceipts(receipts)
//     //     addReceiptDetailEventListeners(); // Gắn lại sự kiện chi tiết đơn hàng
//     // });
//     loadPage(cart, receipts)
// }
function addBackToRecepitsEventListeners() {
    document.getElementById('back').addEventListener('click', () => {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = receiptInfo; // Trở lại danh sách đơn hàng
        renderReceiptInfo(); // Gọi lại hàm renderReceiptInfo để hiển thị danh sách
    });
}



function loadPage(cart, receipts) {
    document.addEventListener("DOMContentLoaded", () => {
        const wholePageElement = document.getElementById('whole-page');
        if (wholePageElement) {
            wholePageElement.innerHTML = wholePage;
    
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = receiptInfo;
    
                addReceiptDetailEventListeners();
            }
        }
    
        loadReceipts();
        updateReceipts(receipts)
        loadCart();
        updateCartCount(cart);
    
        renderReceiptInfo();
    });
}

loadPage(cart, receipts)