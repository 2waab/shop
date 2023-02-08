let navBtn = document.querySelector(".navgation .menu-container");
let headOfPage = document.querySelector(".header");
let navContent = document.querySelector(".nav");
let contentOfBoxesOfTop = document.querySelector(".top-rate .responsive-box");
let contentOfBoxesOfClothing = document.querySelector(".clothing .responsive-box");
let contentOfBoxesOfForWomen = document.querySelector(".for-women .responsive-box");
let links = document.querySelectorAll(".header .nav ul li a");

navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
    headOfPage.classList.toggle("disabl");
};

fetch ("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].rating.rate > 4.5) {
            let box = document.createElement("div");
            box.className = "box-of-prodact";
            box.innerHTML = `
                <div class="img">
                    <img src="${data[i].image}" alt="" />
                </div>
                <div class="text">
                    <div class="head">
                        <h5>${data[i].title}</h5>
                        <span><i class="fa-solid fa-star"></i> ${data[i].rating.rate}</span>
                    </div>
                    <div class="cat">
                        <div class="catogry">${data[i].category}</div>
                        <div class="catogry">top rate</div>
                    </div>
                    <p>$${data[i].price}</p>
                    <button><i class="fa-solid fa-shopping-bag"></i></button>
                </div>
            `;
            contentOfBoxesOfTop.appendChild(box);
        };
        if (data[i].category === "men's clothing" || data[i].category === "women's clothing") {
            let box = document.createElement("div");
            box.className = "box-of-prodact";
            box.innerHTML = `
            <div class="img">
                <img src="${data[i].image}" alt="" />
            </div>
            <div class="text">
                <div class="head">
                    <h5>${data[i].title}</h5>
                    <span><i class="fa-solid fa-star"></i> ${data[i].rating.rate}</span>
                </div>
                <div class="cat">
                    <div class="catogry">${data[i].category}</div>
                </div>
                <p>$${data[i].price}</p>
                <button><i class="fa-solid fa-shopping-bag"></i></button>
            </div>
            `;
            contentOfBoxesOfClothing.appendChild(box);
        };
        if (data[i].category === "jewelery") {
            let box = document.createElement("div");
            box.className = "box-of-prodact";
            box.innerHTML = `
            <div class="img">
                <img src="${data[i].image}" alt="" />
            </div>
            <div class="text">
                <div class="head">
                    <h5>${data[i].title}</h5>
                    <span><i class="fa-solid fa-star"></i> ${data[i].rating.rate}</span>
                </div>
                <div class="cat">
                    <div class="catogry">${data[i].category}</div>
                </div>
                <p>$${data[i].price}</p>
                <button><i class="fa-solid fa-shopping-bag"></i></button>
            </div>
            `;
            contentOfBoxesOfForWomen.appendChild(box);
        };
    };
    links.forEach(a => {
        a.addEventListener("click", () => {
            for (let i = 0; i < data.length; i++) {
                data[i].show = false;
                if (data[i].category === a.textContent) {
                    data[i].show = true;
                    window.localStorage.setItem("shop", JSON.stringify(data));
                };
            };
        });
    });
});
