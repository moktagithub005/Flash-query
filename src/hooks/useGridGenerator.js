import { useMemo } from "react";
import { buildSymbolsMap } from "../utils/gridUtils";

export function useGridGenerator(gridSize, symbolCount, symbolSet) {
  return useMemo(() => {
    const totalCells = gridSize * gridSize;
    const indices = new Set();
    while (indices.size < Math.min(symbolCount, totalCells)) {
      indices.add(Math.floor(Math.random() * totalCells));
    }

    const symbolsMap = buildSymbolsMap(indices, symbolSet);
    return {
      symbolsMap,
      answerSet: indices
    };
  }, [gridSize, symbolCount, symbolSet]);
}
