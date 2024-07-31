// makeApiCall.js
import axios from "axios";
import { BASE_URL } from "./constants";
import Cookies from "js-cookie";

const makeApiCall = async (method, endpoint, formData, onSuccess, onError, headers = {}) => {
  try {
    const res = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data: formData,
      headers: { ...headers,  Authorization: `Bearer ${Cookies.get("accessToken")}`, 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': 'https://appcoreservices.tech'},
    });
    onSuccess(res?.data);
  } catch (error) {
    onError(error);
  }
};

export { makeApiCall };
