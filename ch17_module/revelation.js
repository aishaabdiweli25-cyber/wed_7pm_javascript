// revelation.js

export function getRevelationCity(type) {
  if (type === "Makki") return "Revealed in Makkah";
  if (type === "Madani") return "Revealed in Madinah";
  return "Revelation city unknown";
}
