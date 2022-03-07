"use strict";
let portfolioShown = false;
let portfolioModal = document.getElementById("portfolio-container");
function togglePortfolio(e) {
    if (!portfolioModal) {
        return;
    }
    if (portfolioShown) {
        portfolioModal.style.display = "none";
    }
    else {
        portfolioModal.style.display = "block";
    }
    portfolioShown = !portfolioShown;
}
