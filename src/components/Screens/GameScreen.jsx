import React, { useEffect, useMemo, useState } from "react";
import Grid from "../Grid/Grid";
import Timer from "../UI/Timer";
import LevelBadge from "../UI/LevelBadge";
import styles from "../../styles/Screens.module.css";
import { useGridGenerator } from "../../hooks/useGridGenerator";
import { useTimer } from "../../hooks/useTimer";
import { getLevelConfig } from "../../utils/levelConfig";

export default function GameScreen({ level, symbolSet, onComplete, onQuit }) {
  const levelConfig = useMemo(() => getLevelConfig(level), [level]);
  const { gridSize, symbolCount, flashSeconds } = levelConfig;
  const { symbolsMap, answerSet } = useGridGenerator(
    gridSize,
    symbolCount,
    symbolSet
  );

  const [phase, setPhase] = useState("flash");
  const [recallValues, setRecallValues] = useState({});
  const timer = useTimer(flashSeconds, phase === "flash");

  useEffect(() => {
    if (phase === "flash" && timer === 0) {
      setPhase("recall");
    }
  }, [phase, timer]);

  const handleValueChange = (index, value) => {
    if (phase !== "recall") return;
    setRecallValues((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    let missed = 0;
    const totalCells = gridSize * gridSize;

    for (let index = 0; index < totalCells; index += 1) {
      const expected = symbolsMap[index];
      const actual = (recallValues[index] || "").trim();

      if (expected) {
        if (actual === "") {
          missed += 1;
        } else if (actual === expected) {
          correct += 1;
        } else {
          wrong += 1;
        }
      } else if (actual !== "") {
        wrong += 1;
      }
    }

    onComplete({
      correct,
      wrong,
      missed,
      total: answerSet.size
    });
  };

  const resetRecall = () => {
    setRecallValues({});
  };

  return (
    <div className={styles.screen}>
      <div className={styles.headerRow}>
        <LevelBadge level={level} />
        <button type="button" className={styles.ghost} onClick={onQuit}>
          Quit
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {phase === "flash" ? "Memorize" : "Recall"}
          </h2>
          {phase === "flash" && <Timer seconds={timer} />}
        </div>

        <Grid
          gridSize={gridSize}
          symbolsMap={symbolsMap}
          reveal={phase === "flash"}
          recallValues={recallValues}
          onValueChange={handleValueChange}
          selectedCells={new Set()}
          onCellClick={() => {}}
          disabled={phase !== "recall"}
        />

        {phase === "recall" && (
          <div className={styles.actionRow}>
            <button type="button" className={styles.secondary} onClick={resetRecall}>
              Clear
            </button>
            <button type="button" className={styles.primary} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>

      <p className={styles.hint}>
        Level {level}: Remember {symbolCount} cells on a {gridSize}×{gridSize} grid.
      </p>
    </div>
  );
}
