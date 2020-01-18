

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('1- The window DOMContentLoaded event');
});


window.onload = function () {
    console.log("2- The window load event")
}


$(document).ready(
    console.log("3- JQuery’s $.ready event")
)