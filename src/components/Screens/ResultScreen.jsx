import React from "react";
import styles from "../../styles/Screens.module.css";

export default function ResultScreen({ result, level, onNextLevel, onRetry, onQuit }) {
  const { correct, wrong, missed, total } = result;
  const success = correct === total && wrong === 0;

  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>{success ? "Nice!" : "Keep Practicing"}</h1>
      <p className={styles.subtitle}>
        Level {level} results: {correct} correct, {wrong} wrong, {missed} missed.
      </p>

      <div className={styles.card}>
        <div className={styles.resultRow}>
          <span>Total targets</span>
          <strong>{total}</strong>
        </div>
        <div className={styles.resultRow}>
          <span>Correct picks</span>
          <strong>{correct}</strong>
        </div>
        <div className={styles.resultRow}>
          <span>Wrong picks</span>
          <strong>{wrong}</strong>
        </div>
        <div className={styles.resultRow}>
          <span>Missed</span>
          <strong>{missed}</strong>
        </div>
      </div>

      <div className={styles.actionRow}>
        {success ? (
          <button type="button" className={styles.primary} onClick={onNextLevel}>
            Next Level
          </button>
        ) : (
          <button type="button" className={styles.primary} onClick={onRetry}>
            Try Again
          </button>
        )}
        <button type="button" className={styles.secondary} onClick={onQuit}>
          Back to Start
        </button>
      </div>
    </div>
  );
}
