var btn1 = document.getElementById("cbasica");
var container = document.querySelector(".basica");
var btn2 = document.getElementById("ccientifica");
var container2 = document.querySelector(".cientifica");

btn1.addEventListener('click', function (basica){

    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
        container2.style.display = 'none';
    }
});

btn2.addEventListener('click', function (cientifica){

    if (container2.style.display === 'block'){
        container2.style.display = 'none';
    } else{
        container2.style.display = 'block';
        container.style.display = 'none';
    }
});

function addChar(input, character){
    if (input.value == null || input.value == "0"){
        input.value = character;
    }
    else{
        input.value += character;
    }
}

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}

function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length);
    else
        input.value = "-" + input.value;
}

function compute(form) {
    form.display.value = eval(form.display.value);
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value);
}

function square2(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!")
                return false;
            }
        }
    }
    return true;
}