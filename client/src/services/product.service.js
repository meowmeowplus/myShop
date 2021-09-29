import http from "../http-common";


class ProductDataService {
    getAll() {
        return http.get("/products");
    }

    get(id) {
        return http.get(`/products/${id}`);
    }

    create(data) {
        return http.post("/products", data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    getTop() {
        return http.get("/top");
    }

    getRevenue() {
        return http.get("/revenue");
    }

    buy(id) {
        return http.put(`/products/bought/${id}`);
    }
}

export default new ProductDataService();
