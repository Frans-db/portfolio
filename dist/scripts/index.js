"use strict";
let portfolioShown = false;
let portfolioModal = document.getElementById("portfolio-container");
function togglePortfolio() {
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
function togglePortfolioExact(e) {
    if (e.target !== e.currentTarget) {
        return;
    }
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
document.onkeydown = function (e) {
    if (e.code == "Escape" && portfolioShown) {
        togglePortfolio();
    }
};
