const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const popup = document.querySelector(".popup");
const popupImg = popup.querySelector("img");
const closeBtn = document.querySelector(".popup .close-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", e => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const filter = e.target.dataset.name;
        filterableCards.forEach(card => {
            if (filter === "all" || card.dataset.name === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Open image popup
filterableCards.forEach(card => {
    card.addEventListener("click", () => {
        popupImg.src = card.querySelector("img").src;
        popup.classList.add("active");
    });
});

// Close popup
closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});
