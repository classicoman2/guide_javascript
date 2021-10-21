//This is a test

function isNumber() {

    myInput = document.getElementById("myInput").value;

    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
        //También podría usar: !number(myInput)
    } else {
        document.getElementById("divResults").innerHTML = myInput + " IS A NUMBER.";
    }
}