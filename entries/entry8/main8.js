// Get the audio element
const audioElement = document.getElementById("background-music");

// Add event listener to toggle audio on click
document.body.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play();  // Play audio if paused
    } else {
        audioElement.pause();  // Pause audio if playing
    }
});


const text = [
    "Dear Me,",
    "Happy 20th birthday! Today marks a significant milestone as you step out of your teenage years and into adulthood.",
    "It’s a time of new beginnings, filled with excitement and a hint of nervousness about what lies ahead.",
    "As you blow out the candles on your cake, take a moment to reflect on all the memories you've created over the past two decades.",
    "Each year has shaped you into the person you are today, and now you have the opportunity to embrace even more adventures.",
    "At 20, you stand at the threshold of adulthood, ready to take on new responsibilities and make choices that will guide your journey.",
    "Don’t forget to celebrate your accomplishments, both big and small, and remember to cherish the friendships and experiences that have brought you joy.",
    "As you look forward, allow yourself to dream big.",
    "This decade is yours to explore, learn, and grow.",
    "Embrace the challenges and changes that come your way, and always stay true to yourself.",
    "Cheers to you on this special day!",
    "Here’s to a year filled with opportunities, laughter, and unforgettable moments.",
    "With love,",
    "Me"
];

const letterContainer = document.getElementById("letter-container");

function typeText(textArray, speed = 100, delay = 300) {
    let charIndex = 0;
    let lineIndex = 0;
    let isBlinking = false;

    function typeLine() {
        if (lineIndex < textArray.length) {
            const currentLine = textArray[lineIndex];
            if (charIndex < currentLine.length) {
                letterContainer.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, speed);
            } else {
                letterContainer.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, delay);
            }
        } else if (!isBlinking) {
            isBlinking = true;
            blinkEffect();
        }
    }

    function blinkEffect() {
        letterContainer.style.animation = "blink 1s ease-in-out 2";
        setTimeout(() => {
            letterContainer.style.animation = "";
            letterContainer.innerHTML = ""; // Reset content
            charIndex = 0;
            lineIndex = 0;
            isBlinking = false;
            typeLine(); // Restart typing
        }, 3000); // Wait for blinking to finish
    }

    typeLine();
}

typeText(text);
