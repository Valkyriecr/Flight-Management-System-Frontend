import http from "../http-common";

class TicketDataService {
    getAll() {
        return http.get("/tickets");
    }

    get(id) {
        return http.get(`/tickets/${id}`);
    }

    create(data) {
        return http.post("/tickets", data);
    }

    update(id, data) {
        return http.put(`/tickets/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tickets/${id}`);
    }

    deleteAll() {
        return http.delete(`/tickets`);
    }

    findByPassengerId(passengerId) {
        return http.get(`/tickets?passengerId=${passengerId}`);
    }

}
export default new TicketDataService();