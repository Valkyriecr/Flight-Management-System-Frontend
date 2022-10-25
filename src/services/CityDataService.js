import http from "../http-common";

class CityDataService {
    getAll() {
        return http.get("/city/all");
    }

    get(id) {
        return http.get(`/city/find/${id}`);
    }

    create(data) {
        return http.post('/city/add', data);
    }

    update(data) {
        return http.put(`/city/update`, data);
    }

    delete(id) {
        return http.delete(`/city/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/city`);
    }

    

}
export default new CityDataService();