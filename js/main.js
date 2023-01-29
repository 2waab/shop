let navBtn = document.querySelector(".navgation .bars");
let navContent = document.querySelector(".nav");
navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
};

// Start get Api From Website