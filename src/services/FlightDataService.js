import http from "../http-common";

class FlightDataService {
    getAll() {
        return http.get("/flight");
    }

    get(id) {
        return http.get(`/flight/${id}`);
    }

    create(data) {
        return http.post("/flight", data);
    }

    update(id, data) {
        return http.put(`/flight/${id}`, data);
    }

    delete(id) {
        return http.delete(`/flight/${id}`);
    }

    deleteAll() {
        return http.delete(`/flight`);
    }

   

}
export default new FlightDataService();