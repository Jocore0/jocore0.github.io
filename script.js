const dot = document.getElementById('dot');
const arrow = document.getElementById('scroll-arrow');
const scrollText = document.getElementById('scrollText');
const line = document.getElementById('line');
const puzzle = document.getElementById('puzzle');
const submitBtn = document.getElementById('submit-btn');
const passwordInput = document.getElementById('password-input');
const message = document.getElementById('message');
const downloadLink = document.getElementById('download-link');
let clicks = 0;

// Passwort Base64-codiert
const encodedPassword = "dTIzN09ybGVhbnM=";

dot.addEventListener('click', () => {
    clicks++;
    if (clicks < 3) {
        dot.style.width = (50 + clicks * 50) + 'px';
        dot.style.height = (50 + clicks * 50) + 'px';
    } else if (clicks === 3) {
        dot.style.background = 'transparent';
        dot.style.width = '0';
        dot.style.height = '0';
        dot.classList.add('triangle');

        const blackDot = document.createElement('div');
        blackDot.classList.add('black-dot');
        dot.appendChild(blackDot);

        arrow.style.display = 'block';
        scrollText.style.color = 'white';
        document.body.style.minHeight = '200vh';
        document.body.style.overflow = 'auto';

        // Puzzle anzeigen
        puzzle.style.display = 'block';

        line.style.background = 'white';
    }
});

submitBtn.addEventListener('click', () => {
    const answer = passwordInput.value.trim();
    const correctPassword = atob(encodedPassword);

    if(answer === correctPassword){
        message.style.color = '#66ff66';
        message.textContent = "✅ Correct! You can now download the file.";
        downloadLink.style.display = 'inline-block';
    } else {
        message.style.color = '#ff6666';
        message.textContent = "❌ Wrong password, try again!";
        downloadLink.style.display = 'none';
    }
});
