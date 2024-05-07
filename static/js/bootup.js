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
  
  const bootUpDelay = Math.trunc(Math.random(10, 20) * 80);
  const finalDelay = 500; 
  let currentIndex = 0;

  const audio = document.getElementById('myAudio');

  const loadingTextContainer = document.querySelector('.loading-text');

  const textStyles = {
    color: '#fff',
    fontSize: '10px',
    fontFamily: 'Lucida Console, monospace, sans-serif'
  };

  const buttonStyles = {
    position: 'absolute',
    padding: '10px 20px 20px',
    backgroundColor: '#c8c7c7',
    width: '18px',
    height: '18px',
    color: '#000000', 
    border: 'border: 2px outset #c8c7c7',
    borderRadius: 0,
    fontSize: '60%',
    cursor: 'pointer',
    lineHeight: '1px',
  }
  
  const loadingScreen = document.querySelector('.loading-screen');
  
  const bootUpInterval = setInterval(() => {
    if (currentIndex < bootUpText.length) {
      const loadingText = document.createElement('p');
      loadingText.textContent = bootUpText[currentIndex];
      Object.assign(loadingText.style, textStyles);
      loadingTextContainer.appendChild(loadingText);
      currentIndex++;
    } else {
      clearInterval(bootUpInterval);
      
      // Create and append button
      const button = document.createElement('button');
      button.textContent = 'Continue';
      Object.assign(button.style, buttonStyles);
      button.onclick = function () {
        loadingScreen.style.display = 'none';
        audio.play();
      };
      loadingTextContainer.appendChild(button);
    }
  }, bootUpDelay);
}
      
// Call the function to start the boot-up sequence when the window loads
window.addEventListener('load', showBootUpSequence);
