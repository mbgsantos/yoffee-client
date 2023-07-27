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

export const getAllActivities = () => {
    return axios.get(`${baseURL}/activities`);
};

export const getActivity = id => {
    return axios.get(`${baseURL}/activities/${id}`);
};

export const addActivity = activity => {
    return axios.post(`${baseURL}/activities/create`, activity);
};

export const updateActivity = updatedActivity => {
    return axios.put(`${baseURL}/activities/${updatedActivity._id}`, updatedActivity);
};

export const deleteActivity = id => {
    return axios.delete(`${baseURL}/activities/${id}`);
};