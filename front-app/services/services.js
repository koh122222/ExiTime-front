import { client } from "./axiosClient";

export function register({ email, password }) {
    return client.post(
        "/register",
        { email, password },
        { authorization: false }
    );
}

export function signIn( login, password ) {
    return client.post(
        "/login",
        { login: login, password: password }
    );
}

export function getUsers() {
    return client.get("/users");
}

export function getDevices() {
    return client.get("/devices");
}

export function getCategories() {
    return client.get("/categories");
}

export function getDepartments() {
    return client.get("/departments");
}

export function getApplications() {
    return client.get("/applications");
}

export function getUserSessions(startDate, endDate) {
    return client.get(`/users_sessions?start_date=${startDate}&end_date=${endDate}`);
}