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

// Write what user speaks
function writeMessage(msg) {
  msgEl.innerHTML = `
   <div>You said:</div>
   <span class="box">${msg}</span>
  `;
}

// Check msg aginst nubmer
function checkNumber(msg) {
  const num = +msg;

  // Check if valid number
  if (Number.NaN(num)) {
    msgEl.innerHTML = "<div>That is not a valid number</div>";
    return;
  }

  // Check in range
  if (num > 100 || num < 1) {
    msgEl.innerHTML += "<div>Number must be between 1 and 100</div>";
    return;
  }

  // Check number
  if (num === random) {
    document.body.innerHTML = `
    <h2>Congrats! You have guessed the number! <br>
     It was ${num}
    </h2>
    <button class="play-btn-again" id="play-btn-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += "<div>GO LOWER</div>";
  } else {
    msg.innerHTML += "<div>GO HIGHERs</div>";
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Take speak result
recognition.addEventListener("result", onSpeak);

// En
