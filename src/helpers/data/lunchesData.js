import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getLunches = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/lunches.json`)
    .then((res) => {
      const lunches = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        lunches.push(res.data[fbKey]);
      });
      resolve(lunches);
    })
    .catch(err => reject(err));
});

export default { getLunches };
