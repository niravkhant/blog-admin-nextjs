// logout.jsx
"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { makeApiCall } from "@/utils/makeApiCall";
import { Bounce, toast } from "react-toastify";

const Logout = () => {
  const { logoutUser, setIsLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const onSuccess = (res) => {
      toast.success(`${res.message}`, {
        progress: undefined,
        transition: Bounce,
      });
      console.log(res.data);
      router.push("/");
    };
    const onError = (error) => {
      console.error("Error 409: User Logout Error", error);
      toast.error(`${error.response.data.message}`, {
        progress: undefined,
        transition: Bounce,
      });
    };
    setIsLoading(true);
   await makeApiCall("POST", "users/logout", {}, onSuccess, onError, {});
    setIsLoading(false);
  };

  useEffect( () => {
    handleLogout();
    logoutUser();
  }, []);

  // return router.push("/admin");

};

export default Logout;
