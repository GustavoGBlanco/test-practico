const BACKEND = `http://localhost:3001/api`;

export const ItemService = {
  search: async (query: string): Promise<any> => {
    try {
      const response = await fetch(`${BACKEND}/items?search=${query}`);
      const data = await response.json();
      if (response.status !== 200) {
        return {
          error: true,
          message: data.message,
        }
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  item: async (id: string): Promise<any> => {
    try {
      const response = await fetch(`${BACKEND}/items/${id}`);
      const item = await response.json();
      if (response.status !== 200) {
        return {
          error: true,
          message: item.message,
        }
      }
      return item;
    } catch (error) {
      return error;
    }
  }
}