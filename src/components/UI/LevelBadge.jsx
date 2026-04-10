import React from "react";
import styles from "../../styles/Screens.module.css";

export default function LevelBadge({ level }) {
  return <div className={styles.levelBadge}>Level {level}</div>;
}
