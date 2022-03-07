let portfolioShown: boolean = false;
let portfolioModal: HTMLElement | null = document.getElementById("portfolio-container")

function togglePortfolio(e: Event) {
    if (!portfolioModal) {
        return;
    }
    
    if (portfolioShown) {
        portfolioModal.style.display = "none";
    } else {
        portfolioModal.style.display = "block";
    }

    portfolioShown = !portfolioShown;
}

function togglePortfolioExact(e: Event) {
    if (e.target !== e.currentTarget) {
        return;
    }
    
    if (!portfolioModal) {
        return;
    }
    
    if (portfolioShown) {
        portfolioModal.style.display = "none";
    } else {
        portfolioModal.style.display = "block";
    }

    portfolioShown = !portfolioShown;
}