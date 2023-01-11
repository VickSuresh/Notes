import axios, { AxiosInstance } from "axios";
import { devEndpoint } from "../config/config";

const instance: AxiosInstance = axios.create({
    baseURL: devEndpoint
});

export default instance;