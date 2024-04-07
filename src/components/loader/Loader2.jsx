import React from 'react'
import styles from "./Loader2.module.css"

function Loader2() {
  return (
    <div className={styles["loader-main"]}>
      <div className={styles["loader"]}></div>
    </div>
  )
}

export default Loader2;