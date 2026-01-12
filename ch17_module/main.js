// main.js
import { surahs } from "./data.js";
import { getSurah, classifySurah } from "./logic.js";
import { getRevelationCity } from "./revelation.js";
import { getSurahStory } from "./story.js";

const surahSelect = document.getElementById("surahSelect");
const surahInput = document.getElementById("surahInput");
const output = document.getElementById("output");
const button = document.getElementById("checkBtn");

// Populate dropdown
surahs.forEach((surah) => {
  const option = document.createElement("option");
  option.value = surah.name;
  option.textContent = surah.name;
  surahSelect.appendChild(option);
});

button.addEventListener("click", () => {
  const selected = surahSelect.value;
  const typed = surahInput.value.trim();
  const surahName = typed || selected;

  if (!surahName) {
    output.textContent = "Please select or type a Surah name.";
    return;
  }

  const surah = getSurah(surahName);

  if (!surah) {
    output.textContent = "Surah not found.";
    return;
  }

  const category = classifySurah(surah.verses);
  const cityInfo = getRevelationCity(surah.type);
  const story = getSurahStory(surah.name);

  output.innerHTML = `
        <strong>${surah.name}</strong><br><br>
        📜 Verses: ${surah.verses}<br>
        🕌 ${cityInfo}<br>
        📏 Length: ${category}<br><br>
        📖 <strong>Background:</strong><br>
        <span>${story}</span>
    `;
});
 