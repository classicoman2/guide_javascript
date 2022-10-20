/**
 * A dumb code that blocks the User Interface
 * 
 */

function bloca(n) {
  let j = 0;
  for (i = 1; i < n; i++) {
    // Dumb code
    j++;
  }
}

window.onload = function () {

  let before = Date.now();

  bloca(1210000000);

  let after = Date.now();

  console.log(
    `S'ha bloquejat la interficie durant ${(after - before) / 1000} segons`
  );

  let i = 1;
  document.getElementById("boto").addEventListener("click", () => {
    console.log("Click!!!", i++);
  });
};
