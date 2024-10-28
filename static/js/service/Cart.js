import { products } from "../data/data.js";
import { Receipt } from "../entity/Entity.js";
import { headerWrapper, footer } from "./CommonElement.js";
import { updateCartCount, showNotification } from "./ProductList.js"

export let receipts = JSON.parse(localStorage.getItem('receipts')) || []
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
// console.log('(1) cart: ', localStorage.getItem('cart'))
export let totalPrice = 0;
let rID = JSON.parse(localStorage.getItem('rID')) || 0;

function createCartItem(cartItem, index) {
    return `
        <tr>
            <td>
                <div class="item-center" style="padding-left: 10px;">
                    <input id="choose-${index}" type="checkbox" class="checkboxStyle" ${cartItem.choose ? 'checked' : ''}>
                </div>
            </td>
            <td>
                <div class="product-title item-center">
                    <img src="${cartItem.image}" alt="">
                    <div>
                        <p style="color: black;">${cartItem.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="item-center">${cartItem.price.toLocaleString()}đ</div>
            </td>
            <td>
                <div class="item-center">
                    <div class="quantity">
                        <input class="btn-quantity decrease-quantity" type="button" value="-">
                        <input type="number" name="quantity" value="${cartItem.quantity}" class="quantity-input" id="quantity-input-${index}">
                        <input class="btn-quantity increase-quantity" type="button" value="+">
                    </div>
                </div>
            </td>
            <td>
                <div class="item-center text-red">${(cartItem.price * cartItem.quantity).toLocaleString()}đ</div>
            </td>
            <td>
                <div id="trash-${index}" class="item-center" style="padding: 10px"><i class="far fa-trash-alt"></i></div>
            </td>
        </tr>
    `;
}
function cartItemMap(cart) {
    return cart.map((cartItem, index) => createCartItem(cartItem, index)).join('');
}
export function renderCart() {
    const tbody = `
        <tbody>
            ${cartItemMap(cart)}
        </tbody>
    `;
    
    const mainContent = `
        <div class="container">
            <div class="cart-content" style="margin-top: 30px; margin-bottom:30px">
                <div class="title-header" style="margin-cottom: 20px">
                    <h2 class="title">Giỏ Hàng</h2>
                    <p><span class="text-blue">${cart.length}</span> sản phẩm trong giỏ hàng của bạn</p>
                </div>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th></th>
                            <th>Sản phẩm</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    ${tbody}
                </table>
                <div class="prices-summary">
                    <div class="left-content">
                        <a href="product-list.html" class="derection-product text-blue"><i class="fas fa-long-arrow-alt-left"></i> Tiếp tục mua hàng</a>
                    </div>
                    <div class="right-con">
                        <div class="total-receipt">
                            <div class="prices-total pinside20">
                                <span class="price-text">Tổng cộng</span>
                                <span class="prices-value prices-final text-red">${totalPrice.toLocaleString()}đ</span>
                            </div>
                        </div>
                        <a id="buy-now" class="btn-default btn-checkout" style="cursor: pointer;">Mua Hàng</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="notification"></div>
    `;

    document.getElementById('main-content-cart').innerHTML = mainContent;
    addQuantityEventListeners();
    addCheckboxEventListeners();
    addTrashEventListeners();
}

export function loadReceipts() {
    const storedReceipts = localStorage.getItem('receipts')
    receipts = storedReceipts ? JSON.parse(storedReceipts) : []
    console.log('(loadReceipts) receipts: ', receipts)
}
export function updateReceipts(receipts) {
    localStorage.setItem('receipts', JSON.stringify(receipts));
    console.log('(updateReceipts) receipts: ', receipts);
}


// Lấy cart từ local storage
export function loadCart() {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
    console.log("(loadCart) cart:", cart);
}
// update cart vào local storage
export function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('(updateCart) cart: ', cart);
}
export function totalPriceF(cart) {
    totalPrice = 0;
    cart.forEach(item => {
        if (item.choose) {
            totalPrice += (item.price * item.quantity);
        }
    });
    console.log('(totalPriceF)')
}
function changeChoose(index) {
    console.log('(changeChoose) BEGIN:')
    let item = cart[index];
    if (item) {
        item.choose = !item.choose;
    }
    updateCart(cart);
    totalPriceF(cart);
    updateCartCount(cart)
    renderCart();
    addBuyNowEventListeners()
    console.log('(changeChoose) END')
}
export function removeItemFromCart(index) {
    console.log('(removeItemFromCart) BEGIN:')
    cart.splice(index, 1);
    
    totalPriceF(cart);
    updateCart(cart);
    updateCartCount(cart)
    renderCart();
    addBuyNowEventListeners()
    console.log('(removeItemFormCart) END')
}
function buyNow(cart, receipts) {
    console.log('(buyNow) BEGIN::----------------------------------------');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const selectedItems = cart.filter((item) => item.choose);

    if (selectedItems.length > 0) {
        let receipt = new Receipt(
            'DH' + rID,
            'Khách Hàng',
            '0366175859',
            'Số 3 đường Cầu Giấy, phường Láng Thượng, quận Đống Đa, thành phố Hà Nội',
            formattedDate,
            selectedItems
        );

        receipts.unshift(receipt);
        rID++;

        cart = cart.filter((item) => !item.choose);

        updateCart(cart);
        totalPriceF(cart);
        updateCartCount(cart);
        updateReceipts(receipts);
        showNotification("Tạo đơn hàng thành công");
        localStorage.setItem('rID', JSON.stringify(rID));

        setTimeout(() => {
            location.reload();
        }, 1000);
    } else {
        showNotification('Vui lòng chọn sản phẩm')
    }

    console.log('(buyNow) END:----------------------------------------');
}
function addBuyNowEventListeners() {
    document.getElementById('buy-now').addEventListener('click', () => buyNow(cart, receipts));
}
function addCheckboxEventListeners() {
    cart.forEach((item, index) => {
        document.getElementById(`choose-${index}`).addEventListener('click', () => changeChoose(index));
    });
}
function addTrashEventListeners() {
    cart.forEach((item, index) => {
        document.getElementById(`trash-${index}`).addEventListener('click', () => removeItemFromCart(index));
    });
}
function addQuantityEventListeners() {
    cart.forEach((item, index) => {
        const quantityInput = document.querySelector(`#quantity-input-${index}`);

        if (quantityInput) {
            const decreaseBtn = quantityInput.previousElementSibling;
            const increaseBtn = quantityInput.nextElementSibling;

            // Kiểm tra nếu các nút tăng/giảm tồn tại
            if (decreaseBtn) {
                decreaseBtn.addEventListener('click', () => dcQuantity(index));
            }
            if (increaseBtn) {
                increaseBtn.addEventListener('click', () => icQuantity(index));
            }
        }
    });
}
function dcQuantity(index) {
    let item = cart[index];
    if (item.quantity > 1) {
        item.quantity--;
    }
    updateCart(cart);
    totalPriceF(cart);
    updateCartCount(cart)
    renderCart();
    addBuyNowEventListeners()
}
function icQuantity(index) {
    let item = cart[index];
    item.quantity++;
    updateCart(cart);
    totalPriceF(cart);
    updateCartCount(cart)
    renderCart();
    addBuyNowEventListeners()
}


function loadPage(cart) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('header').innerHTML = headerWrapper;
        document.getElementById('footer').innerHTML = footer;
    
        loadReceipts();
        loadCart();
        totalPriceF(cart);
        renderCart();
    
        addBuyNowEventListeners();
        updateCartCount(cart); 
    });    
}

loadPage(cart)