import http from "../http-common";

class CrewDataService {
    getAll() {
        return http.get("/cabinCrew");
    }

    get(id) {
        return http.get(`/cabinCrew/${id}`);
    }

    create(data) {
        return http.post("/CabinCrew", data);
    }

    update(id, data) {
        return http.put(`/CabinCrew/${id}`, data);
    }

    delete(id) {
        return http.delete(`/CabinCrew/${id}`);
    }

    deleteAll() {
        return http.delete(`/CabinCrew`);
    }

    findByStaffId(staffId) {
        return http.get(`/cabinCrew?passengerId=${passengerId}`);
    }

}
export default new CrewDataService();