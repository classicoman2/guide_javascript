//import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/classicoman2/fakeRESTserver';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const todos = res.data;

    mostraPersonatgesPerConsola( todos );

    return todos;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Mostra per consola les dades dels personatges
 * 
 * @param {Array} personatges 
 */
function mostraPersonatgesPerConsola(personatges) {
  console.log ( personatges ); 
}


// Crida la funció asíncrona
getTodos();

