import dotenv from 'dotenv';
import fetch from 'isomorphic-unfetch';

function api() {
  dotenv.config();
  const baseUrl = process.env.API_URL;

  return {
    getProducts: async (q) => {
      if (!q) return null;

      const url = new URL(`${baseUrl}/items`);
      url.search = new URLSearchParams({ q });

      try {
        const response = await fetch(url.href);
        return await response.json();
      } catch (e) {
        return null;
      }
    },
  };
}

export default api;
