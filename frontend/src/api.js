import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const login = (email, password) =>
  api.post("/auth/login", { email, password }).then((r) => r.data);

export const getFxRequests = () =>
  api.get("/fx-requests").then((r) => r.data);

export const getFxRequest = (id) =>
  api.get(/fx-requests/${id}).then((r) => r.data);

export const createFxRequest = (payload) =>
  api.post("/fx-requests", payload).then((r) => r.data);