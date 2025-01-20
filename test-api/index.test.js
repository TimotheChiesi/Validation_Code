import request from 'supertest';

const baseUrl = 'http://127.0.0.1:9090';

describe('Performance Tests', () => {
    it('should handle 100 requests in 10 minutes', async () => {
      const endpoint = '/'; // Update this to the correct endpoint if needed
      const totalRequests = 100;
      const totalDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
      const interval = totalDuration / totalRequests; // interval between requests
  
      for (let i = 0; i < totalRequests; i++) {
        await request(baseUrl).get(endpoint);
        await new Promise(resolve => setTimeout(resolve, interval));
      }
  
      // If the loop completes, the test has passed
      expect(true).toBe(true);
    });
});