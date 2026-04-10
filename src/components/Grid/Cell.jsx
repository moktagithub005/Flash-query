import React from "react";
import styles from "../../styles/Grid.module.css";

export default function Cell({
  index,
  symbol,
  reveal,
  value,
  onValueChange,
  selected,
  onClick,
  disabled
}) {
  const handleClick = () => {
    if (disabled) return;
    onClick(index);
  };

  const handleInputChange = (event) => {
    if (disabled) return;
    if (onValueChange) {
      onValueChange(index, event.target.value);
    }
  };

  return (
    <div
      className={`${styles.cell} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-pressed={selected}
      onKeyDown={(event) => {
        if (disabled) return;
        if (event.key === "Enter" || event.key === " ") {
          handleClick();
        }
      }}
    >
      {reveal ? (
        <span className={styles.symbol}>{symbol}</span>
      ) : (
        <input
          type="text"
          className={styles.cellInput}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder=""
        />
      )}
    </div>
  );
}
