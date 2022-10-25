import http from "../http-common";

class AirlineDataService {
    getAll() {
        return http.get("/airline/all");
    }

    get(id) {
        return http.get(`/airline/find/${id}`);
    }

    create(data) {
        return http.post("/airline/add", data);
    }

    update(data) {
        return http.put(`/airline/update`, data);
    }

    delete(id) {
        return http.delete(`/airline/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/airline`);
    }

}
export default new AirlineDataService();