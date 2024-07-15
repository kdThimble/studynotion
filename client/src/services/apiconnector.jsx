import axios from "axios";

export const axiosInstance = axios.create({});

export function apiConnector(method, url, bodyData, headers, params) {
  console.log(bodyData);
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
}
