export class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

export class ProductItem {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getPrice() {
        return this.price
    }

    getTotalPrice() {
        return this.price * this.quantity
    }
}

export class Receipt {
    constructor(id, cusName, number, address,  productItems = []) {
        this.id = id
        this.cusName = cusName;
        this.number = number
        this.address = address
        this.products = productItems;
        this.date = '01-01-2011';
        this.status = 0;
    }

    getCusName() {
        return this.cusName
    }

    getNumber() {
        return this.number
    }

    getAddress() {
        return this.address
    }

    getProducts() {
        return this.products;
    }

    totalPrice() {
        return this.products.reduce((total, productItem) => total + productItem.getPrice(), 0);
    }
}
