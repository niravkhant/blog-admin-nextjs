// logout.jsx
"use client"
import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { logoutUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return router.push("/login");
};

export default Logout;
