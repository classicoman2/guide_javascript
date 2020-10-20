function getHoraActual() {
  let data = new Date();
  return (
    data.getHours() + ":" + data.getMinutes() + "'" + data.getSeconds() + '"'
  );
}

function sayHello() {
  let msg = "Hello Class, it's " + getHoraActual();
  console.log(msg);
  document.getElementById("message").innerHTML = msg;
}
