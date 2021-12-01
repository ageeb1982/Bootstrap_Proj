


let quran,
        hadith,
        aqida,
        figh,
        tazkia,
        arabic,
        sera,
        tragim,
        coctel;














let title = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(1)"); let txt = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(2) > span > div"); if (txt) { txt = txt.textContent; } else { txt = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(2) > span"); if (txt) { txt = txt.textContent; } else { txt = ""; } } let link = document.querySelector("#primary > div > div > span:nth-child(2) > a"); let link2 = document.querySelector("#primary > div > div > span:nth-child(3) > a"); if (link) { link = link.href; } else { link = " "; } if (link2) { link2 = link2.href; } else { link2 = " "; } if (link.includes("archive.org/download")) { } else if (link2.includes("archive.org/download")) { link = link2; } else { link = `${link}---${link2}`; } if (title) { title = title.title; } else { title = ""; } try { txt = txt.trim(); } catch { }
console.log(`
//--------------------------------------------------------------------------
title[]="${title}";
texts[]="${txt}";
imgs[]="/img/figh/a.png";
url[]="${link}";
`); 




let title = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(1)");
let txt = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(2) > span > div");
if (txt) { txt = txt.textContent; }
else {
        txt = document.querySelector("#primary > div > div > span:nth-child(1) > ul > li:nth-child(2) > span");
        if (txt) { txt = txt.textContent; } else { txt = ""; }
}
let link = document.querySelector("#primary > div > div > span:nth-child(2) > a");
let link2 = document.querySelector("#primary > div > div > span:nth-child(3) > a");
if (link) { link = link.href; } else { link = " "; }
if (link2) { link2 = link2.href; } else { link2 = " "; }
if (link.includes("archive.org/download")) {

}
else if (link2.includes("archive.org/download")) {
        link = link2;
}
else {
        link = `${link} --- ${link2}`;
}
if (title) { title = title.title; } else { title = ""; }
try { txt = txt.trim(); } catch { }
console.log(`//--------------------------------------
title[] ="${title}";
texts[] ="${txt}";
imgs[] ="/img/figh/a.png";
url[] ="${link}";
 
`);
console.log("      ");



var Books = {
        quran,
        hadith,
        aqida,
        figh,
        tazkia,
        arabic,
        sera,
        tragim,
        coctel
};