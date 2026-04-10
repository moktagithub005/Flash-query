export function buildSymbolsMap(indicesSet, symbolSet) {
  const symbolsMap = {};
  const symbols = symbolSet.length > 0 ? symbolSet : ["?"];
  Array.from(indicesSet).forEach((index, idx) => {
    symbolsMap[index] = symbols[idx % symbols.length];
  });
  return symbolsMap;
}
