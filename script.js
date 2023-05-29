const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("number", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
// Star recongnition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
  console.log(e);
  const inputVoiceTranscript = e.result[0][0].transcript;

  writeMessage(inputVoiceTranscript); // Write out what the speaks
  checkNumber(inputVoiceTranscript); // Check the number
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Take speak result
recognition.addEventListener("result", onSpeak);
