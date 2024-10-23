import { products } from "../data/data.js";
import { totalPriceF } from "./Cart.js"

// Khởi tạo cart
export let cart = JSON.parse(localStorage.getItem('cart')) || []; // Lấy giỏ hàng từ localStorage hoặc khởi tạo mảng rỗng nếu không có

// Hàm để tải giỏ hàng từ Local Storage
export function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); // Tải giỏ hàng từ Local Storage vào biến cart
    } 
    console.log("Giỏ hàng sau khi tải:", cart);
}

// Gọi loadCart khi khởi động
loadCart();

// C
// Thêm vào hàm addToCart
export function addToCart(index) {
    const product = products[index];
    console.log("Thêm vào giỏ hàng:", product);

    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;  // Tăng số lượng
        console.log(`Tăng số lượng sản phẩm ${existingItem.name}: ${existingItem.quantity}`);
    } else {
        cart.push({ 
            name: product.name, 
            price: product.price, 
            quantity: 1, 
            image: product.image 
        });
        console.log(`Thêm sản phẩm mới: ${product.name}`);
    }
    
    updateCart(); // Cập nhật giỏ hàng vào Local Storage
    totalPriceF(cart); // Tính lại tổng giá
    console.log("Giỏ hàng hiện tại:", cart);
}

// D
export function removeItemFromCart(index) {
    // Xóa sản phẩm khỏi giỏ hàng
    cart.splice(index, 1);
    
    // Tính lại tổng giá
    totalPriceF(cart);
    updateCart(); // Cập nhật giỏ hàng sau khi xóa
    // Render lại giỏ hàng sau khi xoá
    renderCart();
}

// Hàm để cập nhật giỏ hàng vào Local Storage
export function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào Local Storage
}
