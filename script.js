// Handles the flip interaction for each game card.

document.addEventListener("DOMContentLoaded", function () {

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(function (card) {

        const cardInner = card.querySelector(".game-card-inner");
        const front = card.querySelector(".game-card-front");
        const back = card.querySelector(".game-card-back");
        const flipButton = card.querySelector(".flip-button");

        let isFlipped = false;

        back.setAttribute("aria-hidden", "true");
        back.inert = true;

        flipButton.addEventListener("click", function () {

            isFlipped = !isFlipped;

            cardInner.classList.toggle("is-flipped", isFlipped);
            front.setAttribute(
                "aria-hidden",
                String(isFlipped)
            );

            back.setAttribute(
                "aria-hidden",
                String(!isFlipped)
            );

            front.inert = isFlipped;
            back.inert = !isFlipped;

            flipButton.setAttribute(
                "aria-pressed",
                String(isFlipped)
            );

            if (isFlipped) {
                flipButton.textContent = "Back to Game";
            } else {
                flipButton.textContent = "Flip to My Journey";
            }

        });

    });

});
