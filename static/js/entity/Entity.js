export class Product {
    constructor(name, price, image, productDetail) {
        this.name = name
        this.price = price
        this.image = image
        this.productDetail = productDetail;
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    getImage() {
        return this.image
    }

    getProductDetail() {
        return this.productDetail
    }
}

export class ProductItem {
    constructor(name, price, quantity, image) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.choose = false
    }

    getPrice() {
        return this.price
    }

    getTotalPrice() {
        return this.price * this.quantity
    }

    getChoose() {
        return this.choose
    }
}

export class Receipt {
    constructor(id, cusName, number, address, date, productItems = []) {
        this.id = id
        this.cusName = cusName;
        this.number = number
        this.address = address
        this.products = productItems;
        this.date = date
        this.status = 2; // 0: Hủy - 1: Hoàn thành - 2: Đang xử lí
    }

    getCusName() {
        return 'Khách Hàng'
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

    
}

export function getTotalPrice(receipt) {
    return receipt.products.reduce((total, productItem) => total + productItem.price, 0);
}