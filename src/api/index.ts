import axios, { AxiosRequestConfig } from 'axios';
import { IResponse } from "../types";

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL
});

const request = async <T>(config: AxiosRequestConfig): Promise<IResponse<T>> => {
    const { data } = await instance.request<IResponse<T>>(config);
    return data;
};

export default request;
export * from "./interface";