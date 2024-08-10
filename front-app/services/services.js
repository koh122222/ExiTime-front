import { client } from "./axiosClient";

export function register({ email, password }) {
    return client.post(
        "/register",
        { email, password },
        { authorization: false }
    );
}

export function login({ email, password }) {
    return client.post(
        "/login",
        { email, password },
        { authorization: false }
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

export function getUserSessions() {
    return client.get("/user_sessions");
}