import axios from "axios";

export const axiosInstance = axios.create({
  
});

export function apiConnector(method, url, bodyData, params, headers) {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params? params : null
    })
}