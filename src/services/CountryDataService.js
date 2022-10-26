import http from "../http-common";

class CountryDataService {
    getAll() {
        return http.get("/country/all");
    }

    get(id) {
        return http.get(`/country/find/${id}`);
    }

    create(data) {
        return http.post('/country/add', data);
    }

    update(data) {
        return http.put(`/country/update`, data);
    }

    delete(id) {
        return http.delete(`/country/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/country`);
    }

    

}
export default new CountryDataService();