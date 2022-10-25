import http from "../http-common";

class CheckInDataService {
    getAll() {
        return http.get("/checkin/all");
    }

    get(id) {
        return http.get(`/checkin/find/${id}`);
    }

    create(data) {
        return http.post("/checkin/add", data);
    }

    update(id, data) {
        return http.put(`/checkin/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/checkin/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/checkin`);
    }

    findByTicketId(ticketId) {
        return http.get(`/checkin/findByTicketId/${ticketId}`);
    }

}
export default new CheckInDataService();