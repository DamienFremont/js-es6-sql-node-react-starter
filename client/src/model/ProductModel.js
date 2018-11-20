export default class ProductAttributes {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.type = data.type;
        this.archived = data.archived;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export class ProductItem {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.type = data.type;
    }
}

export class FindAllParams {
    constructor(data) {
        this.page = data.page;
        this.size = data.size;
    }
}

export class FindAllResponse {
    constructor(data) {
        this.products = data.products;
        this.page = data.page;
    }
}

export class PageResponse {
    constructor(data) {
        this.size = data.size;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.number = data.number;
    }
}