"use strict";
const largeImg = document.getElementById("largeImg");
const pickedImg = document.getElementById("thumbs");
pickedImg.addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.tagName === "IMG" && e.target.parentElement.tagName === "A") {
        const linkElement = e.target.parentElement;
        const imageUrl = new URL(linkElement.getAttribute("href"), window.location.href);
        largeImg.setAttribute("src", imageUrl);
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
