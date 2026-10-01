// ===============================
// Scroll to Bikes
// ===============================

function goToBikes() {

    document.getElementById("bikes").scrollIntoView({
        behavior: "smooth"
    });

}


// ===============================
// Search Bikes
// ===============================

function searchBikes() {

    const searchValue =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    const bikes =
        document.querySelectorAll(".bike-card");

    bikes.forEach(function(bike) {

        const bikeName =
            bike
                .querySelector("h3")
                .textContent
                .toLowerCase();

        if (bikeName.includes(searchValue)) {

            bike.style.display = "block";

        } else {

            bike.style.display = "none";

        }

    });

}


// ===============================
// Filter Bikes
// ===============================

function filterBikes() {

    const category =
        document.getElementById("category").value;

    const bikes =
        document.querySelectorAll(".bike-card");

    bikes.forEach(function(bike) {

        const bikeCategory =
            bike.dataset.category;

        if (
            category === "all" ||
            bikeCategory === category
        ) {

            bike.style.display = "block";

        } else {

            bike.style.display = "none";

        }

    });

}


// ===============================
// Bike Details Modal
// ===============================

function showDetails(bikeName) {

    const modal =
        document.getElementById("modal");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");


    title.textContent = bikeName;


    const details = {

        "Phantom R1":
            "The Phantom R1 is a high-performance sport motorcycle designed for riders who demand speed, precision and aggressive styling.",

        "Thunder X":
            "The Thunder X is a premium cruiser offering powerful performance, comfortable riding and distinctive styling.",

        "Explorer 900":
            "The Explorer 900 is built for adventure with long-distance comfort, strong performance and versatile handling.",

        "Velocity RR":
            "The Velocity RR combines aggressive aerodynamics with incredible performance for an exciting riding experience."

    };


    description.textContent =
        details[bikeName] ||
        "Contact us for more information about this motorcycle.";


    modal.style.display = "flex";

}


// ===============================
// Close Modal
// ===============================

function closeModal() {

    document.getElementById("modal").style.display = "none";

}


// Close modal when clicking outside

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");

    if (event.target === modal) {

        closeModal();

    }

});


// ===============================
// Contact
// ===============================

function contactUs() {

    closeModal();

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// Mobile Menu
// ===============================

function toggleMenu() {

    const nav =
        document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.right = "5%";

        nav.style.background = "#151515";

        nav.style.padding = "20px";

    }

}
