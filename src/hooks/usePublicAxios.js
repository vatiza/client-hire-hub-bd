import axios from "axios";

const usePublicAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:7000",
  });
  return axiosInstance;
};

export default usePublicAxios;
