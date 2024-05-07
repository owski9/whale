// Function to show boot-up sequence text
function showBootUpSequence() {
  const bootUpText = [
    "Initializing system...",
    "System Information:",
    "Microsoft Windows 95",
    "4.00.950 b",
    "IE 4.0 4.72.31.10.8",
    "Pentium II(r)",
    "Loading drivers...",
    "Establishing network connection...",
    "Performing memory check...",
    "192.0MB RAM",
    "Booting operating system...",
    "Loading user interface...",
    "Manufactured and supported by:",
    "Micron Electronics, Inc.",
    "Micron Computer Systems",
  ];
  
  const audio = document.getElementById("myAudio");
  const bootUpDelay = Math.trunc(Math.random(10, 20) * 80);
  const finalDelay = 500; 
  let currentIndex = 0;

  const loadingTextContainer = document.querySelector('.loading-text');

  const textStyles = {
    color: '#fff',
    fontSize: '10px',
    fontFamily: 'Lucida Console, monospace, sans-serif'
  };

  function playMusic() {
    audio.play();
  }

  function showAlertAndPlayMusic() {
     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }
  }
  
  const bootUpInterval = setInterval(() => {
    if (currentIndex < bootUpText.length) {
      const loadingText = document.createElement('p');
      loadingText.textContent = bootUpText[currentIndex];
      Object.assign(loadingText.style, textStyles);
      document.querySelector('.loading-text').appendChild(loadingText);
      currentIndex++;
    } else {
      clearInterval(bootUpInterval);
      setTimeout(() => {
        showAlertAndPlayMusic();
        document.querySelector('.loading-screen').style.display = 'none';
      }, finalDelay);
    }
  }, bootUpDelay);
}

// Call the function to start the boot-up sequence when the window loads
window.addEventListener('load', showBootUpSequence);

