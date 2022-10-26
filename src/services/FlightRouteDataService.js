import http from "../http-common";

class FlightRouteDataService {
    getAll() {
        return http.get("/flightRoute/all");
    }

    get(id) {
        return http.get(`/flightRoute/find/${id}`);
    }

    create(data) {
        return http.post('/flightRoute/add', data);
    }

    update(data) {
        return http.put(`/flightRoute/update`, data);
    }

    delete(id) {
        return http.delete(`/flightRoute/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/flightRoute`);
    }

    

}
export default new FlightRouteDataService();