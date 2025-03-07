const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("🎉 Congratulations! Your message has been sent successfully.");
    form.reset();
});
