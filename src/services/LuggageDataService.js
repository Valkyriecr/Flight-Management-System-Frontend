import http from "../http-common";

class LuggageDataService {
    getAll() {
        return http.get("/luggage/all");
    }

    get(id) {
        return http.get(`/luggage/find/${id}`);
    }

    create(data) {
        return http.post("/luggage/add", data);
    }

    update(data) {
        return http.put(`/luggage/update`, data);
    }

    delete(id) {
        return http.delete(`/luggage/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/luggage`);
    }

    findByPassengerId(passengerId) {
        return http.get(`/luggage/passengerId/${passengerId}`);
    }

}
export default new LuggageDataService();