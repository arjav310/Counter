var x;
var number = document.getElementById("num");
document.getElementById("numRange").onchange = function () {
    x = parseInt(document.getElementById("numRange").value);
}

number.innerHTML = 0;

document.getElementById("increment").onclick = function () {
    console.log(x + number.innerHTML)
    if (x){
        if (parseInt(number.innerHTML) >= x) {
            window.alert("You have reached the Limit!!");
            return;
        }
    }
    number.innerHTML++;
};

document.getElementById("decrement").onclick = function () {

    if (number.innerHTML <= 0) {
        number.innerHTML = 0;
    } else {
        number.innerHTML--;
    }
};

document.getElementById("btnReset").onclick = function () {
    number.innerHTML = 0;
}





