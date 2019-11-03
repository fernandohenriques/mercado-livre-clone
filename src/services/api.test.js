import fetch from 'isomorphic-unfetch';
import dotenv from 'dotenv';
import Api from './api';

jest.mock('isomorphic-unfetch');

describe('Services Api', () => {
  beforeEach(() => {
    dotenv.config();
  });

  describe('function getProducts', () => {
    it('should return null if dont pass param q', async () => {
      const { getProducts } = new Api();

      expect(await getProducts()).toBe(null);
    });

    it('should return one object with result from search', async () => {
      const q = 'iPad';
      const { getProducts } = new Api();
      const fetchMock = Promise.resolve({
        json: () => Promise.resolve({ categories: ['Eletronica, Audio y Video'], items: [] }),
      });

      fetch.mockImplementation(() => fetchMock);
      await getProducts(q);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${process.env.API_URL}/items?q=${q}`);
    });

    afterEach(() => {
      fetch.mockClear();
    });
  });
});
