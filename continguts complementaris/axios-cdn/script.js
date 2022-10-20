//import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/classicoman2/fakeRESTserver';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/characters`);

    const todos = res.data;

    mostracharactersPerConsola( todos );

    return todos;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Mostra per consola les dades dels characters
 * 
 * @param {Array} characters 
 */
function mostracharactersPerConsola(characters) {
  console.log ( characters ); 
}


// Crida la funció asíncrona
getTodos();

