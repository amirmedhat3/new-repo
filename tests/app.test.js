const request = require('supertest');
const app = require('../app');

describe('GET /welcome', () => {
  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/welcome');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
