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
// let viewBook = (title, url) => {

let viewBook = () => {
    alert("-------");
    //let myView = document.getElementById("myView");
    //console.log(myView);
    //myView.style.display = "none";
    // window.scroll(0, findPos(document.getElementById("myView")));
    // var scrollDiv = myView.offsetTop;
    // window.scrollTo({ top: scrollDiv, behavior: 'smooth' });

    // myView.src = url;

};
function CreateCard(q) {
    ++grp;
    let result = "";
    for (let z in q.title) {
        let clickId = `${grp}_${z}`;
        let title = q.title[z];
        let texts = q.texts[z];
        let imgs = q.imgs[z];
        let url = q.url[z];



        result += `<div class="card m-auto mt-3 mb-3 g-col-2 g-col-md-4 row" style="width: 18rem;">
                     <img
                     id="img${clickId}"
                     role="button"
                      src="${imgs}"
                      onclick="viewBook()"
                         class="card-img-top"
                         alt="${title}"
                         />
                   <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                        <p class="card-text">${texts}</p>
                                    <button id="btn${clickId}" 
                         onclick="viewBook(${title}, ${url})")"
                          class="btn btn-primary">تصفح الكتاب</button>
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
