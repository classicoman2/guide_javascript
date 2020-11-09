window.onload = function () {
  /**
   * SetInterval
   *   Executa la funció 'callback' (primer paràmetre) cada x milisegons (segon parametre)
   */
  setInterval(() => {
    const d = new Date();
    console.log(`Son les ${d.getHours()}:${d.getMinutes()}'${d.getSeconds()}`);
  }, 2000);

  /**
   * setTimeOut
   *   Executa la funció 'callback' (1er paràmetre) només 1 vegada, en el moment en què
   *   acaba el compte enrere indicat pel 2on paràmetre en milisegons.
   */

  setTimeout(() => {
    window.alert("+++++HAN PASSAT 5 SEGONS!!!!!");
  }, 5000);
};
