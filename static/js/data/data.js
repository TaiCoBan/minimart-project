import { Receipt } from "../entity/Entity.js";
import { ProductItem, Product } from "../entity/Entity.js"

export let products = [
    new Product('sp1', 99),
    new Product('sp2', 99),
    new Product('sp3', 99),
    new Product('sp4', 99),
    new Product('sp5', 99),
    new Product('sp6', 99),
    new Product('sp7', 99),
    new Product('sp8', 99),
    new Product('sp9', 99)
]
export let cart = []

export let receipts = [
    new Receipt('DH01', 'Nguyen Van Khach', '0377210431', 'Hà Nội', [new ProductItem('test', 99, 1)]),
    new Receipt('DH05', 'Nguyen Van Khach', '0377210431', 'Hà Nội', [new ProductItem('test', 99, 1), new ProductItem('test', 99, 1), new ProductItem('test', 99, 3)])

];

export function getProducts() {
    return receipts
}