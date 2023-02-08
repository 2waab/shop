let navBtn = document.querySelector(".navgation .menu-container");
let headOfPage = document.querySelector(".header");
let navContent = document.querySelector(".nav");
let titleOfCatoogry = document.querySelector(".catogry-title");
let boxes = document.querySelector(".catogry-boxes");

navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
    headOfPage.classList.toggle("disabl");
};

let shop = window.localStorage.getItem("shop");
let shopData = JSON.parse(shop);

for (let i = 0; i < shopData.length; i++) {
    if (shopData[i].show === true) {
        titleOfCatoogry.innerHTML = shopData[i].category;
        let box = document.createElement("div");
        box.className = "box-of-prodact";
        box.innerHTML = `
            <div class="img">
                <img src="${shopData[i].image}" alt="" />
            </div>
            <div class="text">
                <div class="head">
                    <h5>${shopData[i].title}</h5>
                    <span><i class="fa-solid fa-star"></i> ${shopData[i].rating.rate}</span>
                </div>
                <div class="cat">
                    <div class="catogry">${shopData[i].category}</div>
                    <div class="catogry">top rate</div>
                </div>
                <p>$${shopData[i].price}</p>
                <button><i class="fa-solid fa-shopping-bag"></i></button>
            </div>
        `;
        boxes.appendChild(box);
    };
};