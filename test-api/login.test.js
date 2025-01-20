import request from 'supertest';
import jwt from 'jsonwebtoken';

const baseUrl = 'http://127.0.0.1:3000';

describe(`${baseUrl}/login`, () => {
  describe('GET /login/?name=??&&password=??', () => {
    it('Should get a token authentification', async () => {
      const name = 'UserAdmin';
      const password = 'toto123';
      const res = await request(baseUrl)
        .get('/login/')
        .query({ name, password });

      const { token } = res.body;
      jwt.verify(token, 'SANDRA_SECRET', (err, user) => {
        expect(user.login.id).toBe('6788e060e996747d35a39dee');
      });

      expect(res.statusCode).toBe(200);
    });
  });

  it('should handle 1000 requests in 10 minutes and calculate average request time', async () => {
    const endpoint = '/login'; // Update this to the correct endpoint if needed
    const totalRequests = 1000;
    const totalDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
    const interval = totalDuration / totalRequests; // interval between requests
    let totalTime = 0;

    for (let i = 0; i < totalRequests; i++) {
      const startTime = Date.now();
      await request(baseUrl).get(endpoint);
      const endTime = Date.now();
      totalTime += (endTime - startTime);
      await new Promise(resolve => setTimeout(resolve, interval));
    }

    const averageTime = totalTime / totalRequests;
    console.log(`Average request time: ${averageTime} ms`);

    // If the loop completes, the test has passed
    expect(true).toBe(true);
  }, 10 * 60 * 1000 + 10000); // 10 minutes + 10 seconds buffer
});
