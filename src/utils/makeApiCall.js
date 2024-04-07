// makeApiCall.js
import axios from "axios";
import { BASE_URL } from "./constants";

const makeApiCall = async (method, endpoint, formData, onSuccess, onError, headers = {}) => {
  try {
    const res = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data: formData,
      headers: { ...headers },
    });
    onSuccess(res?.data);
  } catch (error) {
    onError(error);
  }
};

export { makeApiCall };
