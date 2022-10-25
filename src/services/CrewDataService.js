import http from "../http-common";

class CrewDataService {
    getAll() {
        return http.get("/cabinCrew/all");
    }

    get(id) {
        return http.get(`/cabinCrew/find/${id}`);
    }

    create(data) {
        return http.post('/cabinCrew/add', data);
    }

    update(data) {
        return http.put(`/cabinCrew/update`, data);
    }

    delete(id) {
        return http.delete(`/cabinCrew/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/cabinCrew`);
    }

    findByStaffId(staffId) {
        return http.get(`/cabinCrew?staffId=${staffId}`);
    }

}
export default new CrewDataService();