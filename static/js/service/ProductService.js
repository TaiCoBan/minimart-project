import { totalPrice, totalPriceF, renderCart } from "../elements/Cart.js"
import { cart } from "../data/data.js";

export function addToCart(item) {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã có, tăng số lượng
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm mới vào giỏ hàng
        cart.push(item);
    }
    
    // Tính lại tổng giá
    totalPriceF(cart);

    // Render lại giỏ hàng
    renderCart();
}


export function dcQuantity(index) {
    let item = cart[index];
    if (item.quantity > 1) {
        item.quantity--;
    }
    totalPriceF(cart);  // Tính lại tổng giá
    renderCart();       // Render lại giỏ hàng sau khi thay đổi số lượng
}

export function icQuantity(index) {
    let item = cart[index];
    // if (item.quantity < 10) {
        item.quantity++;
    // }
    totalPriceF(cart);  // Tính lại tổng giá
    renderCart();       // Render lại giỏ hàng sau khi thay đổi số lượng
}


export function addQuantityEventListeners() {
    cart.forEach((item, index) => {
        // Gắn sự kiện cho nút giảm số lượng
        document.querySelector(`#quantity-input-${index}`).previousElementSibling.addEventListener('click', () => dcQuantity(index));
        
        // Gắn sự kiện cho nút tăng số lượng
        document.querySelector(`#quantity-input-${index}`).nextElementSibling.addEventListener('click', () => icQuantity(index));
    });
}