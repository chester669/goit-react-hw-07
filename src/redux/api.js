import axios from "axios";

const BASE_URL = "https://6798ccd5be2191d708b0e36e.mockapi.io/";

export const api = axios.create({
  baseURL: BASE_URL,
});
