
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("white");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function() {

    imgchange.src = "./imagenes/banner on_small.jpg";
}

blueBtn.onclick = function() {
    imgchange.src = "./imagenes/banner off_small.jpg";
}

blackBtn.onclick = function() {
    imgchange.src = "./images/arkana_black_md.jpg";
}