import { Receipt } from "../entity/Entity.js";
import { ProductItem, Product } from "../entity/Entity.js"

export let products = [
    new Product('Dầu gội bồ kết Hà Thủ Ô Nàng Ơi', 210000, '../static/image/products/p0.jpg', 'Giảm rụng tóc, kích thích mọc tóc, sạch gàu, nấm, ngứa.'),
    new Product('Bột cốm ngũ cốc ăn liền USlim Daily', 115000, '../static/image/products/p1.jpg', 'Bột dinh dưỡng ngũ cốc ăn liền.'),
    new Product('Nước Giải Khát Coca-cola 600ml', 10000, '../static/image/products/p2.jpg', 'Thành phần: Nước bão hoà CO2, đường HFCS, đường mía, màu tự nhiên, chất điều chỉnh độ acid, hương cola tự nhiên và caffein.'),
    new Product('Gumi Gumi Vị Nho 150g', 12000, '../static/image/products/p3.jpg', 'Nước Ép Trái Cây Thạch Jelly Gumi Gumi chứa rất ít calories và chứa nhiều Vitamin C và các loại Vitamin nhóm B, Collagen, L-Carnitine, Glutathione giúp hệ miễn dịch khỏe mạnh, chống lão hóa da'),
    new Product('Nước Gạo Woongjin 500ml', 29000, '../static/image/products/p4.jpg', 'Thành phần: Gạo trắng và gạo lức (hay gạo tẻ) Hàn Quốc'),
    new Product('Bánh Oreo quế', 13000, '../static/image/products/p5.jpg', 'Bánh quế Oreo có vị bánh giòn tan với lớp kem béo ngậy bên trong, mang đến cho bạn một cảm giác thích thú, kích thích vị giác. Bánh quế chất lượng, dinh dưỡng với socola thơm ngào ngạt khiến bạn không thể bỏ lỡ.'),
    new Product('Sữa chua Vinamilk nếp cẩm 100g', 36000, '../static/image/products/p6.jpg', 'Sữa chua Vinamilk là dòng sữa chua lên men tự nhiên, sử dụng chủng men thuần khiết với công nghệ men hiện đại từ châu Âu. Sữa chua nếp cẩm Vinamilk 100g với hạt nếp cẩm ngọt dẻo với vị ngon, thơm nồng, quyện cùng sữa chua sánh mịn đem lại nguồn dinh dưỡng dồi dào.'),
    new Product('Nước giải khát Sprite lon 330ml', 8500, '../static/image/products/p7.jpg', 'Thương hiệu: Sprite (Việt Nam)'),
    new Product('Sữa Đặc Ông Thọ 380g (Lon Trắng)', 37000, '../static/image/products/p8.jpg', 'Sữa đặc Ông Thọ với vị thơm ngon, sánh đặc, là bí quyết giúp mẹ có những món ăn ngon, chăm sóc cho cả gia đình. Sữa đặc có đường Ông Thọ Đỏ vị béo ngọt, đậm đà mà ai cũng thích, dùng chấm bánh mì, pha cà phê đều được.')
]

export let cart = [];

export let receipts = [];

export function getProducts() {
    return receipts
}