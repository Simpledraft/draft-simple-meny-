document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key");

    keys.forEach(function(key) {
        key.addEventListener("click", function() {
            const keyTitle = key.querySelector(".key-title").textContent;
            alert("Du klikket på: " + keyTitle);
        });
    });
});
