document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/image1.png",
        "images/image2.png",
        "images/image3.png",
        "images/image4.png",
    ];

    let index = 0;
    const heroBg = document.querySelector(".hero-bg");

    function changeBackground() {
        heroBg.style.opacity = 0; // Fade out

        setTimeout(() => {
            heroBg.style.backgroundImage = `url('${images[index]}')`;
            heroBg.style.opacity = 1; // Fade in
            index = (index + 1) % images.length;
        }, 1500); // Time sync with CSS transition
    }

    heroBg.style.backgroundImage = `url('${images[2]}')`; // Set initial image
    setInterval(changeBackground, 7000); // Change every 7 seconds
});

function openPopup() {
    document.getElementById("popupModal").style.display = "block";
}

function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    var modal = document.getElementById("popupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const imageData = {
    type1: ["images/projects/Picture7.png", "images/projects/Picture8.png", "images/projects/Picture11.png", "images/projects/Picture12.png", "images/projects/Picture13.png"],
    type2: ["images/projects/Picture3.png", "images/projects/Picture4.png", "images/projects/Picture5.png", "images/projects/Picture6.png",],
    type3: ["images/projects/Picture9.png"],
    type4: ["images/projects/Picture10.png"]
};

let currentImages = [];
let currentIndex = 0;
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

document.querySelectorAll(".custom-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const type = this.getAttribute("data-type");
        currentImages = imageData[type] || [];
        currentIndex = 0;
        if (currentImages.length > 0) {
            modalImage.src = currentImages[currentIndex];
            modal.style.display = "flex";
            updateNavigation();
        }
    });
});

document.getElementById("prevBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    if (currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
        updateNavigation();
    }
});

document.getElementById("nextBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    if (currentImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
        updateNavigation();
    }
});

modalImage.addEventListener("click", function(event) {
    event.stopPropagation();
    window.open(this.src, "_blank");
});

modal.addEventListener("click", function(event) {
    if (!event.target.closest("button")) {
        modal.style.display = "none";
    }
});

function updateNavigation() {
    if (currentImages.length <= 1) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
}


