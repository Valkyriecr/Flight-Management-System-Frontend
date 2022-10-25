import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.235:8080/",
  headers: {
    "Content-Type": "application/json"
  }
});
