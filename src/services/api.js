import axios from "axios";

export const api = axios.create({
    baseURL:'http://localhost:5000/api/register'
});

export const createSession = async(cpf, pass) => {
    return api.post("api/login", {cpf,pass});
};

/* const apiprod =axios.create({
    baseURL:'http://localhost:5000/api/products'
});
export default apiprod; */