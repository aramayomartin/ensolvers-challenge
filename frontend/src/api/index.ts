import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const session = localStorage.getItem("userSession");
    if (session) {
      config.headers.Authorization = `Bearer ${JSON.parse(session).token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = (res: string) => {
  return axiosInstance.get(res);
};

export const post = (res: string, body: any) => {
  return axiosInstance.post(res, body);
};

export const patch = (res: string, body: any) => {
  return axiosInstance.patch(res, body);
};

export const remove = (res: string) => {
  return axiosInstance.delete(res);
};
