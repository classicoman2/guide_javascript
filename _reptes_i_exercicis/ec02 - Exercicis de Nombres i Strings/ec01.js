/**
 * 01: numero signe.
 */
function numSign() {
    myInput = document.getElementById("myInput").value;

    if (myInput == 0) {
        document.getElementById("divResults").innerHTML = "ZERO";
    } else if (myInput > 0) {
        document.getElementById("divResults").innerHTML = "POSITIVE";
    } else if (myInput < 0) {
        document.getElementById("divResults").innerHTML = "NEGATIVE";
    } else {
        document.getElementById("divResults").innerHTML = "WRONG INPUT VALUE";
    }
}

/** 
 * 02: es numero.
 */
function isNumber() {
    myInput = document.getElementById("myInput").value;

    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
        //También podría usar: !number(myInput)
    } else {
        document.getElementById("divResults").innerHTML = myInput + " IS A NUMBER.";
    }
}

/**
 * 03: numero part entera.
 */
function numberIntegerPart() {
    myInput = document.getElementById("myInput").value
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        //.floor() sólo funciona con números positivos
        myInput = Math.abs(myInput);
        var inputInteger = Math.floor(myInput);
        document.getElementById("divResults").innerHTML = "INTEGER: " + inputInteger;
    }
}

/**
 * 04: numero part decimals.
 */
function numberDecimalPart() {
    myInput = document.getElementById("myInput").value
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        var inputArray = myInput.split('.');
        var inputDecimal = inputArray[1];
        /* Si fuera numérico, aunque no da exacto:
        myInput = Math.abs(myInput);
        var inputDecimal = myInput - Math.floor(myInput);
        */
        document.getElementById("divResults").innerHTML = "DECIMAL: ." + inputDecimal;
    }
}

/**
 * 05. amb 3 decimals
 */
function divideWithDecimals() {
    myInput = document.getElementById("myInput").value
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        var result = myInput / 19;
        document.getElementById("divResults").innerHTML = myInput + " / 19 = " + result.toFixed(2);
    }
}

/**
 * 06. string buit
 */
function checkEmptyString() {
    myInput = document.getElementById("myInput").value;
    if (!myInput.length) {
        document.getElementById("divResults").innerHTML = "This string is empty.";
    } else {
        document.getElementById("divResults").innerHTML = myInput + " is not an empty string.";
    }
    //Ver: https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
}

/**
 * 07: invertir un string
 */
function invertString() {
    myInput = document.getElementById("myInput").value;
    var reverseInput = "";
    for (let i = myInput.length; i > 0; i--) {
        reverseInput += myInput[i - 1];
    }
    document.getElementById("divResults").innerHTML = myInput + " in reverse is:<br>" + reverseInput;

    /*
    Otra opción:
    let splitInput = myInput.split("");
    let reverseInput = splitInput.reverse().join("");
    */
}

/**
 * 08: contar 'a'
 */
//ver para match(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
function countAs() {
    myInput = document.getElementById("myInput").value;
    var count = 0;
    for (let i = 0; i < myInput.length; i++) {
        if (myInput[i] == 'a') {
            count++;
        }
    }
    document.getElementById("divResults").innerHTML = " The letter a is this many times in " + myInput + ': ' + count;
}

/**
 * 09: substring abans de la primera a.
 */
function substringAbansA() {
    myInput = document.getElementById("myInput").value;
    var positionA = myInput.indexOf('a');
    if (positionA == -1) {
        document.getElementById("divResults").innerHTML = "This string has no a."
    } else {
        var stringA = myInput.slice(0, positionA);
        document.getElementById("divResults").innerHTML = "Before the first a: " + stringA;
    }
}

/**
 * 10: posició de primera i darrera a
 */
function findAs() {
    myInput = document.getElementById("myInput").value;
    var positionAFirst = myInput.indexOf('a');
    if (positionAFirst == -1) {
        document.getElementById("divResults").innerHTML = "This string has no a."
    } else {
        var positionALast = myInput.lastIndexOf('a');
        if (positionALast == -positionAFirst) {
            document.getElementById("divResults").innerHTML = "This string only has one a, and it's at position " + positionAFirst;
        } else if (positionAFirst == -1) {
            //eso seria lo mismo q lo anterior?
        } else {
            document.getElementById("divResults").innerHTML = "The first a is at position " + positionAFirst + "<br> The last a is at position " + positionALast + "<br>";
        }
    }
}


/**
 * 11: esborrar substring "la"
 */
function deleteAs() {
    myInput = document.getElementById("myInput").value;
    myInput = myInput.replace(/la/g, '');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * 12: canviar les a per un asterisc *
 */
function changeAs() {
    myInput = document.getElementById("myInput").value;
    myInput = myInput.replace(/a/g, '*');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * 13: cap i cua.
 */
function reverseAndAdd() {
    myInput = document.getElementById("myInput").value;
    var reverseInput = "";
    reverseInput += myInput[0];
    for (let i = myInput.length; i > 0; i--) {
        reverseInput += myInput[i - 1];
    }
    reverseInput += myInput[0];
    document.getElementById("divResults").innerHTML = reverseInput;
}

/**
 * 14: eliminar espais
 */
function noSpaces() {
    myInput = document.getElementById("myInput").value;
    myInput = myInput.replace(/ /g, '');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * 15. canviar espais per guions.
 */
function changeSpaces() {
    let myInput = document.getElementById("myInput").value;
    let resultat = myInput.replace(/ /g, '-');
    document.getElementById("divResults").innerHTML = resultat;
}

/**
 * 16: crear acrònim a partir d'una frase.
 */
function getAcronym() {
    myInput = document.getElementById("myInput").value;
    var words = myInput.split(' ');
    var acronym = '';
    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0);
    }
    acronym = acronym.toUpperCase();
    document.getElementById("divResults").innerHTML = acronym;
}

/**
 * Función del ejercicio 17: validar correu electrònic i comprovar (sense expressions regulars) que:
 * .té una sola @
 * .el servidor té una extensió .net,.org o .com
 * .l'extensió està després de la @, no abans.
 */
function validateEmail() {
    myInput = document.getElementById("myInput").value;
    var message = '';
    if (myInput.indexOf('@') == -1) {
        message = 'THIS EMAIL IS NOT VALID: NO @ PRESENT.'
    } else {
        var emailSplit = myInput.split('@');
        if (emailSplit.length < 2) {
            message = 'THIS EMAIL IS NOT VALID: THERE ARE EMPTY SECTIONS PRESENT.'
        } else if (emailSplit.length > 2) {
            message = 'THIS EMAIL IS NOT VALID: MORE THAN ONE @ PRESENT.'
        } else if (emailSplit[1].endsWith('.net') && emailSplit[1].endsWith('.org') && emailSplit[1].endsWith('.com')) {
            message = 'THIS EMAIL IS NOT VALID: THERE IS NO EXTENSION AFTER @.'
        } else if (emailSplit[0].includes('.net') || emailSplit[0].includes('.org') || emailSplit[0].includes('.com')) {
            message = 'THIS EMAIL IS NOT VALID: EXTENSION FOUND BEFORE @.'
        } else {
            message = 'THIS E-MAIL IS VALID.'
        }
    }
    document.getElementById("divResults").innerHTML = message;
}

/**
 * Alternativa, emprant només Strings
 */
function validateEmail2() {
    myInput = document.getElementById("myInput").value;

    document.getElementById("divResults").innerHTML = tryValidateEmail(myInput);
}

function tryValidateEmail(text) {
    /* Indica si nomes te una arroba */
    function teUnaSolaArroba(text) {
        // Hi ha 0 arrobas?
        if (text.indexOf('@') == -1)
            return false;
        // Error per una 2a arroba?
        if (text.slice(text.indexOf('@') + 1).indexOf('@') != -1)
            return false;
        return true;
    }

    function extensioCorrecta(text) {
        let extensio = text.slice(-3);
        if (extensio == "com" || extensio == "org" || extensio == "net")
            return true;
        return false
    }

    function extensio3caracters(text) {
        if (text.substr(-4, 1) == ".")
            return false
        return true
    }

    let message = ""

    // Comprovar arrobas
    if (!teUnaSolaArroba(text))
        return "MAIL INVALID: HI HA D'HAVER UNA @ i NOMÉS UNA"

    if (!extensio3caracters(text))
        return "MAIL INVALID: no hi ha una extensio de 3 caracters"

    if (!extensioCorrecta(text))
        return "MAIL INVALID: extensió incorrecta"

    return "AQUEST MAIL ÉS VALID."
}