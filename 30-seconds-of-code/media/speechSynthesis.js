// Performs speech synthesis (experimental).

// Use SpeechSynthesisUtterance.voice and window.speechSynthesis.getVoices() to convert a message to speech. Use window.speechSynthesis.speak() to play the message.

// Learn more about the Web Speech API at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

const speechSynthesis = message => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};

// speechSynthesis('Hello, World') -> plays the message