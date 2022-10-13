import http from "../http-common";

class PassengerDataService {
    getAll() {
        return http.get("/passenger");
    }

    get(id) {
        return http.get(`/passenger/${id}`);
    }

    create(data) {
        return http.post("/passenger", data);
    }

    update(id, data) {
        return http.put(`/passenger/${id}`, data);
    }

    delete(id) {
        return http.delete(`/passenger/${id}`);
    }

    deleteAll() {
        return http.delete(`/passenger`);
    }


}
export default new PassengerDataService();