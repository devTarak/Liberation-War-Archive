document.addEventListener('DOMContentLoaded', function () {
    var lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var imageSrc = button.getAttribute('data-bs-image');
        var lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = imageSrc;
    });
});
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("🎉 Congratulations! Your message has been sent successfully.");
    form.reset();
});
