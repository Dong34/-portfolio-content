const targetDiv = document.getElementById("form");
const btn = document.getElementById("show-form");
btn.onclick = function () {
    if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
        btn.innerText = "Hide Contact Form"
    } else {
        targetDiv.style.display = "none";
        btn.innerText = "Show Contact Form"
    }
};