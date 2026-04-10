import React from "react";
import Cell from "./Cell";
import styles from "../../styles/Grid.module.css";

export default function Grid({
  gridSize,
  symbolsMap,
  reveal,
  recallValues,
  onValueChange,
  selectedCells,
  onCellClick,
  disabled
}) {
  const total = gridSize * gridSize;
  const cells = Array.from({ length: total }, (_, index) => index);

  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {cells.map((index) => (
        <Cell
          key={index}
          index={index}
          symbol={reveal ? symbolsMap[index] : ""}
          reveal={reveal}
          value={recallValues ? recallValues[index] || "" : ""}
          onValueChange={onValueChange}
          selected={selectedCells.has(index)}
          onClick={onCellClick}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
