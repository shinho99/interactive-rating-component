'use strict';

function toggleDiv(beforeId, afterId) {
    const beforeDiv = document.getElementById(beforeId);
    const afterDiv = document.getElementById(afterId);
  
    beforeDiv.style.display = "none";
    afterDiv.style.display = "block";
}

function saveNumber(num) {
    const changeSpan = document.querySelector(".change");
    changeSpan.textContent = num;

    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    const clickedButton = document.getElementById("button" + num);
    clickedButton.classList.add("active")
} 