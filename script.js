const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics-container");

// Object containing lyrics with the time in seconds
const lyrics = [
  { time: 0.3, text: "BELI CIKI BELI KOYO" },
  { time: 3, text: "Suki yo..." },
  { time: 4.5, text: "Ima anata ni omoi nosete" },
  { time: 8.8, text: "Hora sunano ni naru no watashi" },
  { time: 12.9, text: "Kono saki motto" },
  { time: 15.2, text: "Soba ni ite mo ii ka na?.." },
  { time: 18.5, text: "Koi to koi ga kasanatte" },
  { time: 22.4, text: "Suki yo.." },
  // Add more lyrics with corresponding times here
];

let currentLyricIndex = 0;

// Function to trigger fade-out effect on the current lyric
function fadeOutLyrics() {
  const lyricElement = document.querySelector('.lyric');
  if (lyricElement) {
    lyricElement.classList.add('fade-out'); // Add the fade-out class to make text disappear
  }
}

// Update the lyrics and handle fade-out
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  // Check if it's time to update the lyric
  if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
    // Fade out the previous lyric if any
    if (currentLyricIndex > 0) {
      fadeOutLyrics();
    }

    // Update the lyrics displayed
    lyricsContainer.innerText = lyrics[currentLyricIndex].text;

    // Move to the next lyric
    currentLyricIndex++;
  }
});
