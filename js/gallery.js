// Activates the image gallery.
// The main task is to attach an evenet listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
    document.addEventListener("DOMContentLoaded", function() {
        let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
        let mainImage = document.querySelector("#gallery-photo > img");
        console.log(mainImage);
        let galleryInfo = document.querySelector("#gallery-info");
        let title       = galleryInfo.querySelector(".title");
        let description = galleryInfo.querySelector(".description");

        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener("click", function() {
                // Replaces the source of main image with the clicked image source.
                mainImage.setAttribute("src", thumbnail.src);
                mainImage.setAttribute("alt", thumbnail.alt)

                // Replaces the selection in the thumb-images.
                let currentClass = "current"
                document.querySelector(".current").classList.remove(currentClass);
                thumbnail.parentNode.classList.add(currentClass);

                // Replaces the title and description texts.
                title.innerHTML = thumbnail.dataset.title;
                description.innerHTML = thumbnail.dataset.description;
            });
        });
    });
}

activateGallery();