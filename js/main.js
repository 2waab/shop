let navBtn = document.querySelector(".navgation .menu-container");
let headOfPage = document.querySelector(".header");
let navContent = document.querySelector(".nav");
let contentOfBoxes = document.querySelector(".top-rate .responsive-box");
navBtn.onclick = () => {
    navBtn.classList.toggle("open");
    navContent.classList.toggle("open");
    headOfPage.classList.toggle("disabl");
};

let myReq = new XMLHttpRequest();
myReq.open("GET", "https://fakestoreapi.com/products");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        let arr = [];
        for (let i = 0; i < jsData.length; i++) {
            if (jsData[i].rating.rate > 4.5) {
                arr.unshift(jsData[i]);
            }
        };   
        for (let i = 0; i < arr.length; i++) {
            let box = document.createElement("div");
            box.className = "box-of-prodact";
            box.innerHTML = `
                <div class="img">
                <img src="${arr[i].image}" alt="" />
                </div>
                <div class="text">
                    <div class="head">
                        <h5>${arr[i].title}</h5>
                        <span><i class="fa-solid fa-star"></i> ${arr[i].rating.rate}</span>
                    </div>
                    <div class="catogry">${arr[i].category}</div>
                    <div class="foot">
                        <p>$${arr[i].price}</p>
                        <button><i class="fa-solid fa-shopping-bag"></i></button>
                    </div>
                </div>
            `;
            contentOfBoxes.appendChild(box)
        }
    };
};
