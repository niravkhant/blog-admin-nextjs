// Card1.js
import React from "react";
import styles from "./Card1.module.css";

const Card1 = () => {
  return (
    <div className={styles.card1}>
      <div className={styles["card-content"]}>
        <div className={styles["card-top"]}>
          <span className={styles["card-title"]}>01.</span>
          <p>Lightning.</p>
        </div>
        <div className={styles["card-bottom"]}>
          <p>Hover Me?</p>
          <svg
            width="32"
            viewBox="0 -960 960 960"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
          </svg>
        </div>
      </div>
      <div className={styles["card-image"]}>
        <svg
          width="48"
          viewBox="0 -960 960 960"
          height="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Card1;
