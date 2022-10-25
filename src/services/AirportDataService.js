import http from "../http-common";

class AirportDataService {
    getAll() {
        return http.get("/airport/all");
    }

    get(id) {
        return http.get(`/airport/find/${id}`);
    }

    create(data) {
        return http.post("/airport/add", data);
    }

    update(data) {
        return http.put(`/airport/update`, data);
    }

    delete(id) {
        return http.delete(`/airport/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/airport`);
    }

}
export default new AirportDataService();