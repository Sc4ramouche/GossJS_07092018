const should = require('should');
const { accessThereAPI, accessAndbaAPI } = require('../index');

const translate = x => (x + 2 * (x + 1)) ** 2 * 4 - 1;

describe('Correctly accesses "there" API', () => {
  for (let i = -100; i <= 100; i += 25) {
    it(`acessing there API with /${i} path returns ${translate(i)}`, async function() {
      const response = await accessThereAPI(i);
      response.should.be.exactly(translate(i));
    });
  }
});

describe('Correctly accesses "andba" API', () => {
  for (let i = -100; i <= 100; i += 25) {
    it(`acessing andba API with response got from /there/${i}`, async function() {
      const entry = await accessThereAPI(i);
      const response = await accessAndbaAPI(entry);
      response.should.be.exactly(i);
    });
  }
});