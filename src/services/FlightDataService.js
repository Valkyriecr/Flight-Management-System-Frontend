import http from "../http-common";

class FlightDataService {
    getAll() {
        return http.get(`/flight/all`);
    }

    get(id) {
        return http.get(`/flight/find/${id}`);
    }

    create(data) {
        return http.post(`/flight/add`, data);
    }

    update(data) {
        return http.put(`/flight/update`, data);
    }

    delete(id) {
        return http.delete(`/flight/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/flight`);
    }

   

}
export default new FlightDataService();