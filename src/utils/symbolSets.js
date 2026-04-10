const NUMBER_SET = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const ALPHABET_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function parseCustomSymbols(value) {
  return value
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getSymbolSet(key, customSymbols) {
  if (key === "alphabets") return ALPHABET_SET;
  if (key === "custom") return parseCustomSymbols(customSymbols);
  return NUMBER_SET;
}
