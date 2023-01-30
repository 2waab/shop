let navBtn = document.querySelector(".navgation .menu-container");
let navContent = document.querySelector(".nav");
navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
};
