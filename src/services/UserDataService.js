import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/user/all");
    }

    get(id) {
        return http.get(`/user/find/${id}`);
    }

    create(data) {
        return http.post("/user/add", data);
    }

    update(data) {
        return http.put(`/user/update`, data);
    }

    delete(id) {
        return http.delete(`/user/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/user`);
    }

    findByUsername(username) {
        return http.get(`/user/findByUsername/${username}`);
    }

}
export default new UserDataService();