import axios from "axios";
const baseURL = `${import.meta.env.VITE_PROJECTS_API}/api`;

const setAuthorizationHeaders = () => {
    // set JWT token in the headers for every request in this file
    axios.interceptors.request.use(config => {
        // retrieve the JWT token from the local storage
        const storedToken = localStorage.getItem('authToken')

        if(storedToken) {
            config.headers = {Authorization: `Bearer ${storedToken}`};
        }

        return config;
    });
};

setAuthorizationHeaders();

export const getAllServices = () => {
    return axios.get(`${baseURL}/services`);
};

export const getService = id => {
    return axios.get(`${baseURL}/services/${id}`);
};

export const addService = service => {
    return axios.post(`${baseURL}/services/create`, service);
};

export const updateService = updatedService => {
    return axios.put(`${baseURL}/services/${updatedService._id}`, updatedService);
};

export const deleteService = id => {
    return axios.delete(`${baseURL}/services/${id}`);
};