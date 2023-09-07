document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll("#masonry-gallery img");
    const galleryPopup = document.getElementById("gallery-popup");
    const popupImg = document.getElementById("popup-img");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-popup");

    // Function to open the pop-up
    function openPopup(imageSrc) {
        popupImg.src = imageSrc;
        galleryPopup.style.display = "block";
        overlay.style.display = "block";
    }

    // Function to close the pop-up
    function closePopup() {
        galleryPopup.style.display = "none";
        overlay.style.display = "none";
    }

    // Attach click event listeners to gallery images
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            openPopup(image.src);
        });
    });

    // Close pop-up when the close button is clicked
    closeButton.addEventListener("click", closePopup);

    // Close pop-up when the overlay is clicked
    overlay.addEventListener("click", closePopup);
});
