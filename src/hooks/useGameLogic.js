import { useCallback } from "react";

export function useGameLogic(answerSet) {
  return useCallback(
    (selectedCells) => {
      const selected = Array.from(selectedCells);
      const correctHits = selected.filter((index) => answerSet.has(index));
      const wrongHits = selected.filter((index) => !answerSet.has(index));
      const missed = Array.from(answerSet).filter(
        (index) => !selectedCells.has(index)
      );

      return {
        correct: correctHits.length,
        wrong: wrongHits.length,
        missed: missed.length,
        total: answerSet.size
      };
    },
    [answerSet]
  );
}
