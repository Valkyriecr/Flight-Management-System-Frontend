import http from "../http-common";

class PassengerDataService {
    getAll() {
        return http.get("/passenger/all");
    }

    get(id) {
        return http.get(`/passenger/find/${id}`);
    }

    create(data) {
        return http.post("/passenger/add", data);
    }

    update(data) {
        return http.put(`/passenger/update`, data);
    }

    delete(id) {
        return http.delete(`/passenger/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/passenger`);
    }
    

}
export default new PassengerDataService();