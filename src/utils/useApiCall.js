// makeApiCall.js
import axios from "axios";
import { BASE_URL } from "./constants";
import { useAuth } from "@/context/authContext";

function useApiCall() {

  const makeApiCall = async (method, endpoint, formData, onSuccess, onError, headers = {}) => {

    const {setIsLoading} = useAuth();
    try {
      setIsLoading(true);
      const res = await axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data: formData,
        headers: { ...headers },
      });
      onSuccess(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      onError(error);
    }
    finally{
      setIsLoading(false);
    }
  };
return {makeApiCall};

}

export default useApiCall;
