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

export const getAllPets = () => {
    return axios.get(`${baseURL}/pets`);
};

export const getPet = id => {
    return axios.get(`${baseURL}/pets/${id}`);
};

export const addPet = pet => {
    return axios.post(`${baseURL}/pets/create`, pet);
};

export const updatePet = updatedPet => {
    return axios.put(`${baseURL}/pets/${updatedPet._id}`, updatedPet);
};

export const deletePet = id => {
    return axios.delete(`${baseURL}/pets/${id}`);
};