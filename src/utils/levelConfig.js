const LEVELS = [
  { gridSize: 3, symbolCount: 3, flashSeconds: 1 },
  { gridSize: 3, symbolCount: 4, flashSeconds: 2 },
  { gridSize: 4, symbolCount: 5, flashSeconds: 3 },
  { gridSize: 4, symbolCount: 6, flashSeconds: 4 },
  { gridSize: 5, symbolCount: 7, flashSeconds: 5 }
];

export function getLevelConfig(level) {
  if (level <= LEVELS.length) {
    return LEVELS[level - 1];
  }
  const last = LEVELS[LEVELS.length - 1];
  return {
    gridSize: last.gridSize + Math.floor((level - LEVELS.length) / 2),
    symbolCount: last.symbolCount + (level - LEVELS.length),
    flashSeconds: last.flashSeconds
  };
}
