import React from "react";
import styles from "../../styles/Screens.module.css";
import SymbolPicker from "../UI/SymbolPicker";

export default function StartScreen({
  pickedSetKey,
  onPickSet,
  customSymbols,
  onCustomSymbolsChange,
  onStart
}) {
  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>Flash Quarry</h1>
      <p className={styles.subtitle}>
        Memorize the flashed symbols, then tap the cells you remember.
      </p>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Choose Symbols</h2>
        <div className={styles.pickerRow}>
          <button
            type="button"
            className={`${styles.choice} ${
              pickedSetKey === "numbers" ? styles.choiceActive : ""
            }`}
            onClick={() => onPickSet("numbers")}
          >
            Numbers
          </button>
          <button
            type="button"
            className={`${styles.choice} ${
              pickedSetKey === "alphabets" ? styles.choiceActive : ""
            }`}
            onClick={() => onPickSet("alphabets")}
          >
            Alphabets
          </button>
          <button
            type="button"
            className={`${styles.choice} ${
              pickedSetKey === "custom" ? styles.choiceActive : ""
            }`}
            onClick={() => onPickSet("custom")}
          >
            Custom
          </button>
        </div>

        {pickedSetKey === "custom" && (
          <SymbolPicker
            value={customSymbols}
            onChange={onCustomSymbolsChange}
          />
        )}
      </div>

      <button type="button" className={styles.primary} onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
