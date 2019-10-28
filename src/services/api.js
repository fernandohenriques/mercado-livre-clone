import fetch from 'isomorphic-unfetch';

function api() {
  const baseUrl = process.env.API_URL;

  return {
    getProducts: async (q) => {
      if (!q) return null;

      const url = new URL(baseUrl);
      url.search = new URLSearchParams({ q });

      try {
        const response = await fetch(url);
        return await response.json();
      } catch (e) {
        return null;
      }
    },
  };
}

export default api;
