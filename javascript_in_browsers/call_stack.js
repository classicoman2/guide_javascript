/**
 *  The call stack
 *    Simulam un error en línia 9
 */

function foo(z) {
  //Error
  console.log(zzzz);
}

function baz(z) {
  foo(z);
}

function bar(r) {
  baz(r);
}

bar(2);
