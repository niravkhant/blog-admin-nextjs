"use client";
import Cookies from "js-cookie";
import AuthContext from "./context";
import { makeApiCall } from "@/utils/makeApiCall";
import { useContext, useEffect, useState } from "react";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("accessToken"));
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let isLoggedIN = !!token;

  const setAccessTokenCookies = (token) => {
    setToken(token);
    Cookies.set("accessToken", token);
  };
  const getAccessTokenCookies = () => {
    return Cookies.get("accessToken");
  };
  const removeAccessTokenCookies = () => {
    Cookies.remove("accessToken");
  };

  const logoutUser = () => {
    Cookies.remove("accessToken");
    setToken(null);
    setCurrentUser(null);
  };

  // JWT AUTHENICATION : to get the currenty logged in user data

  const userAuthentication = () => {
    const onSuccess = (res) => {
      setCurrentUser(res?.data);
    };
    const onError = (error) => {
      console.error("Error 409: Frontend current user fetch error", error);
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      setIsLoading(true);
      makeApiCall("GET", "users/current-user", {}, onSuccess, onError, headers);
      setIsLoading(false);
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIN,
        setAccessTokenCookies,
        getAccessTokenCookies,
        removeAccessTokenCookies,
        logoutUser,
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
