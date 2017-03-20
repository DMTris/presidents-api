import {Router} from 'Express';
import Presidents from '../data/presidents.js';

const app = new Router();
//route for Presidents
app.route('/').get((req, res) => {
  return res.json(Presidents);
});
//democrats party
app.route('/democrats').get((req, res) => {
  return res.json(Presidents.filter(presidentDem => presidentDem.party === 'Democratic'));
  });
//republicans party
app.route('/republicans').get((req, res) => {
  return res.json(Presidents.filter(presidentRep => presidentRep.party === 'Republican'));
});
//all other parties
app.route('/other').get((req, res) => {
  return res.json(Presidents.filter(presidentOther => presidentOther.party !== 'Democratic' && presidentOther.party !== 'Republican'));
});
export default app;
