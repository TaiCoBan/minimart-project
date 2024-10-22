import { headerWrapper, footer } from "./CommonElement.js";
import { products } from "../data/data.js";
import { icQuantity, dcQuantity, addQuantityEventListeners } from "../service/ProductService.js"

document.getElementById('header').innerHTML = headerWrapper;
document.getElementById('footer').innerHTML = footer;

// Hàm tạo thẻ sản phẩm
function createProductCard(index) {
    let product = products[index];
    
    return `
        <div id="to-${index}" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
            <a id="to-${index}">
                <div class="product-block">
                    <div class="product-img"><img src="${product.image}" alt="${product.name}"></div>
                    <div class="product-content">
                        <h5><a id="to-${index}" href="#" class="product-title">${product.name}</a></h5>
                        <div class="product-meta">
                            <a id="to-${index}" href="#" class="product-price">${product.price.toLocaleString()}đ</a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Hàm ánh xạ sản phẩm
function mapProducts() {
    return products.map((_, index) => createProductCard(index)).join(''); // Ensure correct usage of products
}

const mainContent = `
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                    <div id='cssmenu'>
                        <ul>
                            <li class='has-sub'><a href='#'>Hệ điều hành</a>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox">
                                            <span class="checkbox-list">Tất cả</span></label>
                                    </li>
                                </ul>
                            </li>
                            <li class='has-sub'><a href='#'>Hãng sản xuất</a>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox">
                                            <span class="checkbox-list">Tất cả </span>
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li class='has-sub'><a href='#'>Giá Bán</a>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox">
                                            <span class="checkbox-list">Tất cả</span>
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li class='has-sub'><a href='#'>Màn hình</a>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox">
                                            <span class="checkbox-list">Tất cả</span>
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li class='has-sub'><a href='#'>Bộ nhớ trong</a>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox">
                                            <span class="checkbox-list">Tất cả</span>
                                        </label>
                                    </li>
                                </ul>
                            </li>
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
                        ${mapProducts()} <!-- Gọi hàm mapProducts để hiển thị sản phẩm -->
                    </div>

                    <div class="row">
                        <!-- pagination start -->
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
                        <!-- pagination close -->
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

function renderSingleContent(index) {
    const mainContent = `
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <ul id="demo1_thumbs" class="slideshow_thumbs">
                                            <li>
                                                <img src="${products[index].image}" alt="Product Thumbnail" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div id="slideshow">
                                            <img src="${products[index].image}" alt="Product Image" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="product-single">
                                            <h2>${products[index].name}</h2>
                                            <p class="product-price" style="font-size: 25px;">${products[index].price.toLocaleString()}đ</p>
                                            
                                            <div class="product-quantity">
                                                <h4>Số lượng</h4>
                                                <div class="quantity mb20">
                                                    <input class="btn-quantity decrease-quantity" onclick="dcQuantity()" type="button" value="-">
                                                    <input type="number" name="quantity" value="1" class="quantity-input" id=" id="quantity-input-${index}">
                                                    <input class="btn-quantity increase-quantity" onclick="icQuantity()" type="button" value="+">
                                                </div>
                                            </div>
                                            <div>
                                                <button class="btn btn-default btn-buy-now" onclick="buyNow(${index})">
                                                    Mua Ngay
                                                </button>
                                                <button type="submit" class="btn btn-default" onclick="addToCart(cart[${index}])">
                                                    <i class="fa fa-shopping-cart"></i>&nbsp;Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('main-content').innerHTML = mainContent;
    addQuantityEventListeners(); // Gắn sự kiện tăng/giảm số lượng
}


// Gán sự kiện cho hình ảnh sản phẩm để render nội dung đơn lẻ
function addToSinglePageEventListeners() {
    products.forEach((_, index) => {
        document.getElementById(`to-${index}`).addEventListener('click', () => {
            renderSingleContent(index); // Gọi hàm renderSingleContent để hiển thị sản phẩm đơn lẻ
        });
    });
}

document.getElementById('main-content').innerHTML = mainContent;
addToSinglePageEventListeners();