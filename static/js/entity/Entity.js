export class User {
    constructor(id, fullName, address) {
        this.id = id
        this.fullName = fullName
        this.address = address
        // this.email = email
        // this.number = number
        // this.username = username
        // this.password = password
        // this.role = role // chu cua hang, khach hang
    }
// , email, number, username, password, role
    getName() {
        return this.fullName
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
        return this.price * this.quantity
    }
}

export class Receipt {
    constructor(id, User, productItems = []) {
        this.id = id
        this.cusName = User.getName()
        this.products = productItems
        this.date = '01-01-2011'
        this.status = 0
    }

    totalPrice() {
        let r = 0;
        this.products.forEach(productItem => {
            r += productItem.getPrice();
        });
        return r;
    }
}