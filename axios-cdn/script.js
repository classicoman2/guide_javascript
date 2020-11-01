//import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/classicoman2/fakeRESTserver';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const todos = res.data;

    console.log(`GET: Here's the list of todos`, todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};

getTodos();