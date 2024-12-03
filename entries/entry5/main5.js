const textArray = [
    "Birthstone", "Diamond", "Symbolism", "love", "purity", "strong will", "permanence",
    "Birth Flower", "Morning Glory", "Symbolism", "joy", "happiness", "pure love",
    "Zodiac Sign", "Aries", "Characteristics", "Strong leadership", "passion", "independence", 
    "courage", "adventurous spirit"
];

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeWriter() {
    const textElement = document.getElementById('text-overlay');
    const currentText = textArray[currentTextIndex];

    // Type out the current word
    if (currentCharIndex < currentText.length) {
        textElement.textContent += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeWriter, 100); // Continue typing the next character after 100ms
    } else {
        // After finishing the word, clear the text and move to the next word
        setTimeout(() => {
            textElement.textContent = ''; // Clear the text
            currentTextIndex = (currentTextIndex + 1) % textArray.length; // Move to next word
            currentCharIndex = 0; // Reset character index for the next word
            typeWriter(); // Start typing the next word
        }, 500); // Wait for a brief moment before starting the next word
    }
}

// Start the typing effect
typeWriter();
