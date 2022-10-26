import http from "../http-common";

class SeatDataService {
    getAll() {
        return http.get("/seat/all");
    }

    get(id) {
        return http.get(`/seat/find/${id}`);
    }

    create(data) {
        return http.post("/seat/add", data);
    }

    update(data) {
        return http.put(`/seat/update`, data);
    }

    delete(id) {
        return http.delete(`/seat/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/seat`);
    }

}
export default new SeatDataService();