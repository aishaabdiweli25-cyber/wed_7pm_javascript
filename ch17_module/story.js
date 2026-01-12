// story.js

const surahStories = {
  "Al-Fatiha":
    "Al-Fatiha is known as the opening of the Qur'an. It is a prayer for guidance, mercy, and the straight path.",
  "Al-Baqarah":
    "Al-Baqarah covers laws, guidance for personal and social life, and the story of Prophet Musa (AS).",
  "Aal-E-Imran":
    "This Surah discusses faith, steadfastness, and lessons from the families of Imran.",
  "An-Nisa":
    "An-Nisa focuses on social justice, rights of women, orphans, and family laws.",
  "Al-Ma'idah":
    "This Surah emphasizes fulfilling contracts, halal and haram, and moral conduct.",
  "Al-An'am": "Al-An'am stresses pure monotheism and refutes false beliefs.",
  "Al-A'raf":
    "Al-A'raf narrates stories of past prophets and lessons from previous nations.",
};

export function getSurahStory(name) {
  return (
    surahStories[name] ||
    "No detailed background story available for this Surah."
  );
}
 