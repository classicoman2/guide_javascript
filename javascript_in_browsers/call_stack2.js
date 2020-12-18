/**
 *  The call stack
 *    A la linia 10, mostram quina és la situació de la CALL STACK en aquell moment. 
 */



function foo(z) {
    //Error
    console.trace("I'm here");
  }
  
  function baz(z) {
    foo(z);
  }
  
  function bar(r) {
    baz(r);
  }
  
  bar(2);
  