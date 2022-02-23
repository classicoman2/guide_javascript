/**
 * Simulam error de MAXIMUM CALL STACK SIZE
 * 
 * Uncaught RangeError: Maximum call stack size exceeded
 */
function foo(x) {
    foo(x)
}

foo("peta");