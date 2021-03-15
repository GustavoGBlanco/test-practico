export interface RawCategories {
  name: string;
}

export interface RawData {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  }
  thumbnail: string;
  picture?: [
    {
      url: string;
    }
  ]
  condition: string;
  shipping: {
    free_shipping: boolean;
  }
  address: {
    state_name: string;

  },
  item_categories: RawCategories[];
  pictures: string;
  sold_quantity?: number;
  description?: string;
}

export interface SearchResponse {
  filters: RawCategories[];
  results: RawData[];
}