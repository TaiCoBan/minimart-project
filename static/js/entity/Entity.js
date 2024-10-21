export class User {
    constructor(id, fullName, address, number, email, password, gender) {
        this.id = id
        this.fullName = fullName
        this.address = address
        this.email = email
        this.number = number
        this.password = password
        this.role = 'USER' // chu cua hang, khach hang
    }

    getName() {
        return this.fullName
    }

    getNumber() {
        return this.number
    }

    getAddress() {
        return this.address
    }
}

export class Product {
    constructor(id, name, price) {
        this.id = id
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
    constructor(id, user, productItems = []) {
        this.id = id
        this.user = user;
        this.products = productItems;
        this.date = '01-01-2011';
        this.status = 0;
    }

    getUser() {
        return this.user
    }

    getProducts() {
        return this.products;
    }

    totalPrice() {
        return this.products.reduce((total, productItem) => total + productItem.getPrice(), 0);
    }
}
