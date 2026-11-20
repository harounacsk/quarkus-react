import axios from "axios";

let authApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/auth`
})

export let login = async ({ "email": email, "password": password }) => await authApi.post("login", { email: email, password: password });

export let logOut = () => localStorage.removeItem("token");

export let getToken = () => localStorage.getItem("token");