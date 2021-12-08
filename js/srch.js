

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

// let cmdSrch = document.getElementById("cSrch");
function Search() {
    let txt = document.getElementById("txt");

    if (txt) {
        if (txt.value) {

            getdata(txt.value);

        }
    }
}

let getdata = (srch) => {
    url = "https://dorar.net/dorar_api.json?skey=" + srch + "&callback=?";
    $.getJSON(url, function (data) {


        // console.log(data.ahadith);

        $("#srch_Body").html("");
        let srchbody = document.getElementById("srch_Body");
        srchbody.style.display = "block";
        let i = 0;
        $.each(data.ahadith, function (index, item) {

            // let i = data.ahadith;

            // i--;

            // console.log(typeof item);
            console.log(i);
            i++;
            console.log("------------------------");
            // console.log();

            $("#srch_Body").append("<span class='qalink'>" + item + "</span>");
            var elm = document.querySelector("#srch_Body > span > a");
            elm.setAttribute("target", "_blank");
            elm.classList.add("btn");
            elm.classList.add("btn-danger");
            elm.style.width = "100%";
            elm.style.textShadow = "2px 2px black";
            elm.style.boxShadow = "1px 1px white";
            elm.style.color = "#fff";
            elm.style.backgroundColor = "#045fa1";
            elm.style.borderColor = "#bce3ff";
            elm.style.fontSize = "20px";
            elm.style.fontWeight = "bold";



        });

        // $("#srch_Body")

        // if (item.includes("dorar.net")) {
        //     $("#srch_Body").append("<div class='btn btn-info'>" + item + "</div>");
        // }


    });

};




