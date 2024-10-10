import axios from "axios";
import { https } from "axios";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});
export default api;
