import React from "react";
import styles from "../../styles/Screens.module.css";

export default function SymbolPicker({ value, onChange }) {
  return (
    <div className={styles.symbolPicker}>
      <label className={styles.label} htmlFor="custom-symbols">
        Custom symbols (comma or space separated)
      </label>
      <input
        id="custom-symbols"
        type="text"
        className={styles.input}
        placeholder="e.g. A B C"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
