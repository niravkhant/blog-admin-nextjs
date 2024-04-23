"use client";
import Cookies from "js-cookie";
import Context from "./Context";
import { makeApiCall } from "@/utils/makeApiCall";
import { useContext, useEffect, useState } from "react";

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("accessToken"));
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null)
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

  const userAuthentication = async () => {
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
      await makeApiCall("GET", "users/current-user", {}, onSuccess, onError, headers);
      setIsLoading(false);
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchAllBlogs = async () => {
    const onSuccess = (res) => {
      setBlogs(res?.data)
    }
    const onError = (error) => {
      setError(error)
      console.error("Error 409: Blogs Fetch error", error);
    }
    try {
      setIsLoading(true)
      await makeApiCall("GET", "blog/get-all-blogs", {}, onSuccess, onError)
      setIsLoading(false)
    } catch (error) {
      onError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    userAuthentication();
    fetchAllBlogs();
  }, [token]);

  return (
    <Context.Provider
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
        fetchAllBlogs,
        blogs
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
