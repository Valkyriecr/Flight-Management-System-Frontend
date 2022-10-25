import http from "../http-common";

class TicketDataService {
    getAll() {
        return http.get("/ticket/all");
    }

    get(id) {
        return http.get(`/ticket/find/${id}`);
    }

    create(data) {
        return http.post("/ticket/add", data);
    }

    update(data) {
        return http.put(`/ticket/update`, data);
    }

    delete(id) {
        return http.delete(`/ticket/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/ticket`);
    }

    findByTicketId(ticketId) {
        return http.get(`/ticket/findByTicketId/${ticketId}`);
    }

}
export default new TicketDataService();