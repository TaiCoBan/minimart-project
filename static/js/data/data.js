import { Receipt } from "../entity/Entity.js";
import { User } from "../entity/Entity.js";
import { ProductItem, Product } from "../entity/Entity.js"

export let users = [
    new User(1, 'Khach hang 1', 'Hà Nội', '1234567890', 'kh@gmail.com', 'kh'),
    new User(2, 'admin', 'Bắc Ninh', '3415243453', 'admin@gmail.com', 'admin')
];

export let products = [
    new Product(1, 'sp1', 99),
    new Product(2, 'sp2', 99),
    new Product(3, 'sp3', 99),
    new Product(4, 'sp4', 99),
    new Product(5, 'sp5', 99),
    new Product(6, 'sp6', 99),
    new Product(7, 'sp7', 99),
    new Product(8, 'sp8', 99),
    new Product(9, 'sp9', 99)
]

export let receipts = [
    new Receipt('DH01', users[0], [new ProductItem('test', 99, 1)]),
    new Receipt('DH02', users[0], [new ProductItem('test', 99, 1)]),
    new Receipt('DH03', users[0], [new ProductItem('test', 99, 1)]),
    new Receipt('DH04', users[0], [new ProductItem('test', 99, 1)]),
    new Receipt('DH05', users[0], [new ProductItem('test', 99, 1), new ProductItem('test', 99, 1), new ProductItem('test', 99, 3)])

];

export function getProducts() {
    return receipts
}