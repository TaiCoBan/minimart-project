import { Receipt } from "../entity/Entity.js";
import { ProductItem, Product } from "../entity/Entity.js"

export let products = [
    new Product('Dầu gội bồ kết Hà Thủ Ô Nàng Ơi', 210000, '../static/image/products/p0.jpg'),
    new Product('Bột cốm ngũ cốc ăn liền USlim Daily', 115000, '../static/image/products/p1.jpg'),
    new Product('Nước Giải Khát Coca-cola 600ml', 10000, '../static/image/products/p2.jpg'),
    new Product('Gumi Gumi Vị Nho 150g', 12000, '../static/image/products/p3.jpg'),
    new Product('Nước Gạo Woongjin 500ml', 29000, '../static/image/products/p4.jpg'),
    new Product('Bánh Oreo quế', 13000, '../static/image/products/p5.jpg'),
    new Product('Sữa chua Vinamilk nếp cẩm 100g', 36000, '../static/image/products/p6.jpg'),
    new Product('Nước giải khát Sprite lon 330ml', 8500, '../static/image/products/p7.jpg'),
    new Product('Sữa Đặc Ông Thọ 380g (Lon Trắng)', 37000, '../static/image/products/p8.jpg')
]

export let cart = [
    new ProductItem('Dầu gội bồ kết Hà Thủ Ô Nàng Ơi', 210000, 2, '../static/image/products/p0.jpg', false),
    new ProductItem('Bột cốm ngũ cốc ăn liền USlim Daily', 115000, 1, '../static/image/products/p1.jpg', false),
    new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p2.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p3.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p4.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p5.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p6.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p7.jpg', false),
    // new ProductItem('Nước giải khát Sprite lon 330ml', 8500, 1, '../static/image/products/p8.jpg', false)
];

export let receipts = [
    new Receipt('DH01', 'Nguyen Van Khach', '0377210431', 'Hà Nội', [new ProductItem('test', 99, 1)]),
    new Receipt('DH05', 'Nguyen Van Khach', '0377210431', 'Hà Nội', [new ProductItem('test', 99, 1), new ProductItem('test', 99, 1), new ProductItem('test', 99, 3)])

];

export function getProducts() {
    return receipts
}