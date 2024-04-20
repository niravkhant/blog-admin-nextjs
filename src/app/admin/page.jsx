"use client";
import React from "react";
import Login from "@/components/admin/AuthComponents/Login";
import { useAuth } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";

const adminmainPage = () => {
  const { isLoggedIN } = useAuth();
  const router = useRouter();

  if (!isLoggedIN) {
    return <Login />;
  }
  return router.push("/admin/dashboard");
};

export default adminmainPage;
