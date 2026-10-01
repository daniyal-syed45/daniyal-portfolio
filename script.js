// =========================================================
// Typing Animation for the Hero Section
// =========================================================

// Find the existing h2 element inside the hero section
const heroTitle = document.querySelector('.hero-content h2');

// Phrases that will be typed one after another
const phrases = [
    "Information Technology Student",
    "Aspiring Software Developer",
    "Full-Stack Developer"
];

// Keep track of which phrase we are currently typing
let phraseIndex = 0;

// Keep track of the current character position
let characterIndex = 0;

// Controls whether we are typing or deleting
let isDeleting = false;


// =========================================================
// Typing Animation Function
// =========================================================

function typeText() {

    // Stop if the h2 element cannot be found
    if (!heroTitle) {
        return;
    }

    // Get the current phrase
    const currentPhrase = phrases[phraseIndex];

    // TYPE
    if (!isDeleting) {

        // Add one character to the h2
        heroTitle.textContent = currentPhrase.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

        // If the complete phrase has been typed
        if (characterIndex === currentPhrase.length) {

            // Wait before starting to delete
            setTimeout(() => {
                isDeleting = true;
                typeText();
            }, 1800);

            return;
        }

        // Typing speed
        setTimeout(typeText, 80);

    }

    // DELETE
    else {

        // Remove one character from the h2
        heroTitle.textContent = currentPhrase.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

        // If the complete phrase has been deleted
        if (characterIndex === 0) {

            // Move to the next phrase
            phraseIndex++;

            // Start again from the first phrase after the last one
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }

            // Switch back to typing mode
            isDeleting = false;

            // Short pause before typing the next phrase
            setTimeout(typeText, 400);

            return;
        }

        // Deleting speed
        setTimeout(typeText, 45);
    }
}


// =========================================================
// Start the Animation
// =========================================================

if (heroTitle) {
    typeText();
}