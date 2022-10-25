import http from "../http-common";

class PlaneDataService {
    getAll() {
        return http.get("/plane/all");
    }

    get(id) {
        return http.get(`/plane/find/${id}`);
    }

    create(data) {
        return http.post('/plane/add', data);
    }

    update(data) {
        return http.put(`/plane/update`, data);
    }

    delete(id) {
        return http.delete(`/plane/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/plane`);
    }

    

}
export default new PlaneDataService();