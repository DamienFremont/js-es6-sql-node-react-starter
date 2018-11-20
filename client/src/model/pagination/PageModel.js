export default class PageResponse {
    constructor(data) {
        this.size = data.size;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.number = data.number;
    }
}

export default class PageRequest {
    constructor(data) {
        this.page = data.page;
        this.size = data.size;
        this.sort = data.sort;
    }
}