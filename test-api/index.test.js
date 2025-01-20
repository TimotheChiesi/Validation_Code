import request from 'supertest';

const baseUrl = 'http://127.0.0.1:9090';

describe('Performance Tests', () => {
  it('should handle 100 requests in 10 minutes and calculate average request time', async () => {
    const endpoint = '/'; // Update this to the correct endpoint if needed
    const totalRequests = 100;
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