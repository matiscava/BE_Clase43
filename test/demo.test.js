import supertest from 'supertest';
import { expect } from 'chai'

const URL = 'http://localhost:8080'

const request = supertest(URL);

describe('Server test with chai and supertest', () => {
  it('should return "date and hour" in JSON with status 200', async ()=> {
    const response = await request.get('/');
    console.log(response);
    expect(response.status).to.be.equal(200)

  })
  it('should return "date and hour" like JSON', async ()=> {
    const response = await request.get('/');
    console.log(response);
    const payload = JSON.parse(response.text)
    expect(payload).to.have.property('FyH')

  })
})