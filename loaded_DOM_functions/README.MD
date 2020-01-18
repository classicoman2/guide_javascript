# When should the browser start to load the script? 
Date: 18-1-2020

## Solution 1: The window DOMContentLoaded event
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed'); 
    });

## Solution 2: The window load event
https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. 
This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
    });

The same, but using the onload event handler property:

    window.onload = (event) => {
        console.log('page is fully loaded');
    };

## Solution 3: JQuery’s $.ready event
According to [JQuery official documentation](https://api.jquery.com/ready/),

The .ready() method offers a way to run JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.

More: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload


## Solution 4: Placing the <script> after the </body> tag
https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
According to this, it's the fastest way to start loading the script immediately after the DOM is safe to be used (The loading of the elements of a webpage is then synchronous, I assume - should check this out).

# Alors?
I carried out an experiment in this code and the result is:

![alt text](Captura.png "Logo Title Text 1")
