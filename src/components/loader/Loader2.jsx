"use client";
import React from "react";
import styles from "./Loader2.module.css";
import { useAuth } from "@/context/ContextProvider";

const Loader2 = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={styles["loader-main"]}>
        <div className={styles["loader"]}></div>
      </div>
    );
  }
};

export default Loader2;
