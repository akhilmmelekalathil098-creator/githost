// ==========================================
// NAVIGATION
// ==========================================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


// ==========================================
// SCROLL FUNCTIONS
// ==========================================

function scrollToBikes() {

    document
        .getElementById("bikes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToBooking() {

    document
        .getElementById("bikes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// SEARCH
// ==========================================

function searchBikes() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const bikes =
        document.querySelectorAll(".bike-card");

    bikes.forEach(function(bike) {

        const name =
            bike
                .querySelector("h3")
                .textContent
                .toLowerCase();

        if (name.includes(search)) {

            bike.style.display = "block";

        } else {

            bike.style.display = "none";

        }

    });

}


// ==========================================
// CATEGORY FILTER
// ==========================================

function filterBikes() {

    const category =
        document
            .getElementById("categoryFilter")
            .value;

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


// ==========================================
// BOOKING
// ==========================================

function openBooking(bikeName, price) {

    const modal =
        document.getElementById("bookingModal");

    const selectedBike =
        document.getElementById("selectedBike");

    const bikeNameInput =
        document.getElementById("bikeName");

    const bikePriceInput =
        document.getElementById("bikePrice");


    selectedBike.textContent = bikeName;

    bikeNameInput.value = bikeName;

    bikePriceInput.value = price;


    document.getElementById("rentalDays").value = "1";


    calculateTotal();


    modal.style.display = "flex";

}


// ==========================================
// CLOSE BOOKING
// ==========================================

function closeBooking() {

    document.getElementById("bookingModal")
        .style.display = "none";

}


// ==========================================
// CALCULATE TOTAL
// ==========================================

function calculateTotal() {

    const price =
        Number(
            document.getElementById("bikePrice").value
        );

    const days =
        Number(
            document.getElementById("rentalDays").value
        );

    const total = price * days;


    document.getElementById("totalPrice")
        .textContent =
        "₹" + total.toLocaleString("en-IN");

}


// ==========================================
// FORM SUBMISSION
// ==========================================

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const bike =
            document.getElementById("bikeName").value;

        const date =
            document.getElementById("pickupDate").value;

        const days =
            document.getElementById("rentalDays").value;

        const total =
            document.getElementById("totalPrice").textContent;


        const message =
            `Thank you, ${name}! Your ${bike} has been reserved for ${days} day(s) from ${date}. Total: ${total}.`;


        document.getElementById("confirmationText")
            .textContent = message;


        closeBooking();


        document.getElementById("successModal")
            .style.display = "flex";


        this.reset();

    });


// ==========================================
// CLOSE SUCCESS
// ==========================================

function closeSuccess() {

    document.getElementById("successModal")
        .style.display = "none";

}


// ==========================================
// CLOSE MODALS BY CLICKING OUTSIDE
// ==========================================

window.addEventListener("click", function(event) {

    const bookingModal =
        document.getElementById("bookingModal");

    const successModal =
        document.getElementById("successModal");


    if (event.target === bookingModal) {

        closeBooking();

    }


    if (event.target === successModal) {

        closeSuccess();

    }

});


// ==========================================
// SET MINIMUM PICKUP DATE
// ==========================================

const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1)
        .padStart(2, "0");

const day =
    String(today.getDate())
        .padStart(2, "0");


const todayString =
    `${year}-${month}-${day}`;


document.getElementById("pickupDate")
    .setAttribute("min", todayString);
