import http from "../http-common";

class LuggageDataService {
    getAll() {
        return http.get("/luggage");
    }

    get(id) {
        return http.get(`/luggage/${id}`);
    }

    create(data) {
        return http.post("/luggage", data);
    }

    update(id, data) {
        return http.put(`/luggage/${id}`, data);
    }

    delete(id) {
        return http.delete(`/luggage/${id}`);
    }

    deleteAll() {
        return http.delete(`/luggage`);
    }

    findByPassengerId(passengerId) {
        return http.get(`/luggage?passengerId=${passengerId}`);
    }

}
export default new LuggageDataService();