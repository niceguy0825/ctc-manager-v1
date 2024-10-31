import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

const getRequest = (path: string, param?: number | string) =>
  axios.get(`${path}/${param ? param : ""}`);

const postRequest = (path: string, body: object) => axios.post(path, body);

const patchRequest = (path: string, body: object) => axios.patch(path, body);

const getResponse = async (path: string, param?: number | string) => {
  try {
    const {
      data: { success, data },
    } = await getRequest(path, param);
    console.log(path, JSON.stringify(data, null, 2));
    return { success, data };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      const {
        success,
        data: { message },
      } = e.response.data;
      console.log(path, e.response.data);
      return { success: null, data: message };
    } else {
      return { success: null, data: e };
    }
  }
};

const postResponse = async (path: string, body: object) => {
  try {
    const {
      data: { success, data },
    } = await postRequest(path, body);
    console.log(path, JSON.stringify(data, null, 2));
    return { success, data };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      const {
        success,
        data: { message },
      } = e.response.data;
      console.log(path, e.response.data);
      return { success: null, data: message };
    } else {
      return { success: null, data: e };
    }
  }
};

const patchResponse = async (
    path: string,
    body: object,
    param?: number | string
) => {
  try {
    const {
      data: { success, data },
    } = await patchRequest(path, body);
    console.log(path, JSON.stringify(data, null, 2));
    return { success, data };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      const { success, data } = e.response.data;
      console.log(path, e.response.data);
      return { success: success, data: data };
    } else {
      return { success: null, data: e };
    }
  }
};

export const Auth = {
  signin: (body: object) => postResponse("users/signin", body),
};

export const UserApi = {
  getAll: () => getResponse("users"),
  getOne: (id: string) => getResponse("users", id),
};

export const ProductApi = {
  getAll: () => getResponse("products"),
  getOne: (id: string) => getResponse("products", id),
  create: (body: object) => postResponse("products", body),
  update: (body: object) => patchResponse("products", body),
};

export const ShopApi = {
  getAll: () => getResponse("shops")
}