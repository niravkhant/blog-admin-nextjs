// logout.jsx
"use client"
import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { makeApiCall } from "@/utils/makeApiCall";

const Logout = () => {
  const { logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = ()=>{
      const onSuccess = (res)=>{
        toast.success("Logout Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log(res.data);
        router.push("/admin")
      }
      const onError = (error) => {
        console.error("Error 409: User Logout Error", error);
        toast.error(`${error.response.data.message}`, {
          progress: undefined,
          transition: Bounce,
          });
      };

    makeApiCall("POST", "users/logout", {}, onSuccess, onError, {});
  }

  useEffect(() => {
    logoutUser();
    handleLogout();
  }, []);

  return router.push("/admin");
};

export default Logout;
