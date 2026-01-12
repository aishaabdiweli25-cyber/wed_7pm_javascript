// logic.js
import { surahs } from "./data.js";

// Find surah by name (case-insensitive)
export function getSurah(name) {
  return surahs.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

// Extra business rule: classify surah length
export function classifySurah(verses) {
  if (verses <= 10) return "Very Short";
  if (verses <= 50) return "Short";
  if (verses <= 150) return "Medium";
  return "Long";
}
