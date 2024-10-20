import { Bill } from "../entity/Entity.js";
import { User } from "../entity/Entity.js";
import { ProductItem } from "../entity/Entity.js"

export let users = [
    new User(1, 'Khach hang 1'),
    new User(2, 'Khach hang 2')
];

export let bills = [
    new Bill('DH01', users[0], [new ProductItem('test', 99, 1)]),
    new Bill('DH02', users[1], [new ProductItem('test', 99, 1)]),
    new Bill('DH03', users[0], [new ProductItem('test', 99, 1)]),
    new Bill('DH04', users[1], [new ProductItem('test', 99, 1)]),
    new Bill('DH05', users[1], [new ProductItem('test', 99, 1)])

];