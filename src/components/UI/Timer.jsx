import React from "react";
import styles from "../../styles/Screens.module.css";

export default function Timer({ seconds }) {
  return (
    <div className={styles.timer}>
      <span>Time</span>
      <strong>{seconds}s</strong>
    </div>
  );
}
