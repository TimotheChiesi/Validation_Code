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
});
