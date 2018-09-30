const axios = require('axios');

const headers = { 'content-type': 'application/json' };
const thereBaseURL = 'http://kodaktor.ru/api2/there/';
const andbaBaseURL = 'http://kodaktor.ru/api2/andba/';

async function accessThereAPI(x) {
  const response = await axios.get(thereBaseURL + x, headers);
  return response.data;
}

async function accessAndbaAPI(x) {
  const response = await axios.get(andbaBaseURL + x, headers);
  return response.data;
}

module.exports = {
  accessAndbaAPI,
  accessThereAPI
};