# Javascript Objects

The goal of these scripts is to test some of the characteristics of Javascript's Objects.

You may execute the scripts using __Node__ if you don't want to use a browser:

    > node nameofthescript.js

## Different ways of creating an object

* In [script_01.js](script_01.js) I show that an String is an Object that uses a Prototype. No mather how you create an string in Javascript, it is always an String object, or rather, [the _prototype_ of every string it's the String prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
* In [script_02.js](script_02.js)...
  * I create an **object literal** that is assigned to another object variable, and both variables refer to the same object (because the assignation is _by reference_ and not _by value_ - as it happens with variables that are Numbers, Booleans or Strings)
  * I create an **Object Constructor** and create an object from this Constructor


## More on Objects in Javascript

* [3 Ways to Clone Objects in JavaScript](https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects)