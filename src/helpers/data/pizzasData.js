import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getPizzas = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pizzas.json`)
    .then((res) => {
      const pizzas = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        pizzas.push(res.data[fbKey]);
      });
      resolve(pizzas);
    })
    .catch(err => reject(err));
});

export default { getPizzas };
