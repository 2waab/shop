let navBtn = document.querySelector(".navgation .menu-container");
let headOfPage = document.querySelector(".header");
let navContent = document.querySelector(".nav");
let contentOfBoxes = document.querySelector(".responsive-box");
navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
    headOfPage.classList.toggle("disabl");
};



for (let i = 1; i < 30; i++) {
    fetch(`https://dummyjson.com/products/${i}`)
    .then(res => res.json())
    .then(respo => {
        if (respo.rating > 4.8) {
            contentOfBoxes.innerHTML = `
                <div class="box-of-prodact">
                    <div class="img">
                        <img src="${respo.images[0]}" alt="" />
                    </div>
                    <div class="text">
                        <div class="head">
                            <h5>${respo.title}</h5>
                            <span><i class="fa-solid fa-star"></i> ${respo.rating}</span>
                        </div>
                        <div class="catogry">${respo.category}</div>
                        <div class="foot">
                            <p>$${respo.price}</p>
                            <button><i class="fa-solid fa-shopping-bag"></i></button>
                        </div>
                    </div>
                </div>
            `;
        };
    });
};
