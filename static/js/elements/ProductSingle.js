import { addToCart } from "../service/ProductService.js";
import { cart } from "../data/data.js";
import { dcQuantity, icQuantity, addQuantityEventListeners } from "../service/ProductService.js";


// Hàm buyNow (tuỳ chọn)
function buyNow(index) {
    const item = cart[index]; // Lấy item từ giỏ hàng
    // Thực hiện hành động mua ngay
}