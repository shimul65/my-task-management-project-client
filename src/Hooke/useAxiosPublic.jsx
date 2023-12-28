import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://my-task-management-project-server.vercel.app',
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;