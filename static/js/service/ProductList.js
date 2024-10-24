import { headerWrapper, footer } from "./CommonElement.js";
import { products } from "../data/data.js";
import { updateCart, totalPriceF, loadCart } from "./Cart.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.getElementById('header').innerHTML = headerWrapper;
document.getElementById('footer').innerHTML = footer;

function createProductCard(index) {
    let product = products[index];
    
    return `
        <div id="to-${index}" class="col-lg-4 col-md-4 col-sm-6 col-xs-12" style="margin-bottom: 30px;">
            <a href="#">
                <div class="product-block">
                    <div class="product-img"><img src="${product.image}" alt="${product.name}"></div>
                    <div class="product-content">
                        <h5><a href="#" class="product-title">${product.name}</a></h5>
                        <div class="product-meta">
                            <a href="#" class="product-price">${product.price.toLocaleString()}đ</a>
                        </div>
                        <button type="button" id="add-to-cart-${index}" class="btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </a>
        </div>
    `;
}
function mapProducts() {
    return products.map((_, index) => createProductCard(index)).join('');
}
const mainContent = `
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                    <div id='cssmenu'>
                        <ul>
                            <li><a href='#'>Hoa quả</a></li>
                            <li><a href='#'>Nước giải khát</a></li>
                            <li><a href='#'>Bánh kẹo</a></li>
                            <li><a href='#'>Dầu gội</a></li>
                            <li><a href='#'>Rau củ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 alignright" style="margin-bottom: 10px;">
                            <form>
                                <div class="select-option form-group">
                                    <select name="select" class="form-control" placeholder="Sắp xếp theo">
                                        <option value="" default>Sắp xếp theo</option>
                                        <option value="">Bán Chạy</option>
                                        <option value="">Giá Thấp</option>
                                        <option value="">Giá Cao</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="row">
                        ${mapProducts()}
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="st-pagination">
                                <ul class="pagination" style="display: inline;">
                                    <li><a href="#" aria-label="previous"><i class="fa fa-angle-left" style="font-size: 16px;"></i></a></li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#" aria-label="Next"><i class="fa fa-angle-right" style="font-size: 16px;"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

function addToCart(index) {
    console.log('(addToCart) BEGIN: ')
    const product = products[index];

    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;  // Tăng số lượng
        console.log(`Tăng số lượng sản phẩm ${existingItem.name}: ${existingItem.quantity}`);
    } else {
        cart.push({ 
            name: product.name, 
            price: product.price, 
            quantity: 1, 
            image: product.image,
            choose: true  // Chọn mặc định khi thêm sản phẩm
        });
        console.log(`Thêm sản phẩm mới: ${product.name}`);
    }
    
    updateCart(cart);
    totalPriceF(cart); // Tính lại tổng giá
    console.log('(addToCart) product: ', product)
    console.log("(addToCart) cart:", cart);
    console.log('(addToCart) END ')
}


function addAddToCartEventListeners() {
    products.forEach((_, index) => {
        document.getElementById(`add-to-cart-${index}`).addEventListener('click', () => addToCart(index));
    });
}

document.getElementById('main-content').innerHTML = mainContent;
addAddToCartEventListeners();
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('main-content').innerHTML = mainContent;
//     addAddToCartEventListeners();  // Gán sự kiện sau khi nội dung được render
// });
