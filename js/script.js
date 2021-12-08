import Aqida from './books/aqida.js';
import Arabic from './books/arabic.js';
import Coctel from './books/coctel.js';
import Figh from './books/figh.js';
import Hadith from './books/hadith.js';
import Quran from './books/quran.js';
import Sera from './books/sera.js';
import Tazkia from './books/tazkia.js';
import Tragim from './books/tragim.js';

let grp = 0;
function showBook(oe) {
    let item = this;

    let myView = document.getElementById("myView");
    myView.style.display = "block";
    //window.scroll(0, findPos(myView));
    var scrollDiv = myView.offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    let url = this.getAttribute("url");
    myView.src = url;

}

function Go() {
    let t = this.getAttribute("link");
    let myView = document.getElementById(t);
    let btn = myView.querySelector(".accordion-button");
    // document.body.parentNode.scrollTo(1,1);



    var y = myView.offsetTop;
    var node = myView;
    // while (node.offsetParent && node.offsetParent != document.body) {
    //     node = node.offsetParent;
    //     y += node.offsetTop;
    // }
    // console.log(y);
    // scrollTo(0, y);
    let IsExp = btn.getAttribute("aria-expanded");
    if (IsExp == "false") {
        btn.click();
    }
    myView = document.getElementById(t);
    btn = myView.querySelector(".accordion-button");
    // var scrollDiv = myView.offsetTop;
    // window.scrollTo({ top: scrollDiv, behavior: 'smooth' });

    window.scrollTo(0, document.body.scrollHeight);

    document.body.parentNode.scrollTo({
        top: myView.offsetTop,
        left: 0,
        behavior: 'smooth'
    });







    // document.body.parentNode.scrollTo({
    //     top: myView.offsetTop,
    //     left: 0,
    //     behavior: 'smooth'
    // });
    //}



    //  var myCollapse = document.getElementsByClassName('collapse')[0];
    // var bsCollapse = new bootstrap.Collapse(myCollapse, {
    //     toggle: true
    // });



}


function GetRnd(max) { // min and max included 
    let rnd = [];
    for (let index = 0; index <= 2; index++) {
        rnd[index] = Math.floor(Math.random() * max) + 1;
    }
    return rnd;
}


let sliderIndex = 0;
let addToSlider = (title, imgs, url) => {

    let IstitleFirst = "";
    let IsFirst = "";
    if (sliderIndex == 0) {
        IstitleFirst = ` class="active" aria-current="true" `;
        IsFirst = " active";
    }

    document.getElementById("sliderTitle").innerHTML += `
            <button 
                type="button" 
                data-bs-target="#sliderCaption" 
                data-bs-slide-to="${sliderIndex}" 
                ${IstitleFirst}
                aria-label="${title}"></button>`;


    document
        .getElementById("sliderBody")
        .innerHTML += `
        <div class="carousel-item${IsFirst}">
                    <img src="${imgs}"
                    role="button"
                     title="${title}"
                     url="${url}"
                     style="height: 330px;"
                     class="d-block  w-100 showBook" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${title}</h5>
                    </div>
                </div>`;






    sliderIndex++;
};

function CreateCard(q) {
    ++grp;
    let result = "";

    let index = q.title.length;
    let rnd = GetRnd(index);
    for (let z in q.title) {
        let clickId = `${grp}_${z}`;
        let title = q.title[z];
        let texts = q.texts[z];
        let imgs = q.imgs[z];
        let url = q.url[z];
        let isInArray = rnd.includes(parseInt(z));
        if (isInArray) {
            addToSlider(title, imgs, url);
        }

        result += `<div class="card m-auto mt-3 mb-3 g-col-2 g-col-md-4 row" style="width: 18rem;">
                     <img
                     id="img${clickId}"
                     role="button"
                     title="${title}"
                     url="${url}"
                     text="${texts}"
                      src="${imgs}"
                         class="card-img-top showBook"
                         alt="${title}"
                         />
                   <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                        <p class="card-text">${texts}</p>
                                    <button
                                    id="btn${clickId}"
                                     title="${title}"
                                     url="${url}"
                                     text="${texts}"
                                     class="btn btn-primary showBook">تصفح الكتاب</button>
                                    <a href="${url}" class="btn btn-primary" download>تحميل</a>
                    </div>
                            </div>`;


    }

    return result;
}






document.getElementById("q_body").innerHTML = CreateCard(Quran());
document.getElementById("h_body").innerHTML = CreateCard(Hadith());
document.getElementById("a_body").innerHTML = CreateCard(Aqida());
document.getElementById("f_body").innerHTML = CreateCard(Figh());
document.getElementById("ar_body").innerHTML = CreateCard(Arabic());
document.getElementById("s_body").innerHTML = CreateCard(Sera());
document.getElementById("tz_body").innerHTML = CreateCard(Tazkia());
document.getElementById("tr_body").innerHTML = CreateCard(Tragim());
document.getElementById("c_body").innerHTML = CreateCard(Coctel());


onload = () => {

    var elements = document.getElementsByClassName("showBook");
    var myMenu = document.getElementsByClassName("myMenu");


    for (var i = 0; i < myMenu.length; i++) {
        myMenu[i].addEventListener('click', Go, false);
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', showBook, false);
    }
};


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 