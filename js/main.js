let navBtn = document.querySelector(".navgation .menu-container");
let headOfPage = document.querySelector(".header");
let navContent = document.querySelector(".nav");
let contentOfBoxesOfTop = document.querySelector(".top-rate .responsive-box");
let contentOfBoxesOfClothing = document.querySelector(".clothing .responsive-box");
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
                        <div class="catogry">${data[i].category}</div>
                        <div class="foot">
                            <p>$${data[i].price}</p>
                            <button><i class="fa-solid fa-shopping-bag"></i></button>
                        </div>
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
                        <div class="catogry">${data[i].category}</div>
                        <div class="foot">
                            <p>$${data[i].price}</p>
                            <button><i class="fa-solid fa-shopping-bag"></i></button>
                        </div>
                    </div>
                `;
                contentOfBoxesOfClothing.appendChild(box);
            };
        };
    });
