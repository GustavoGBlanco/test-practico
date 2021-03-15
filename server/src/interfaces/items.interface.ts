export interface Author {
  name: string;
  lastname: string;
}

export interface Category {
  name: string;
}

export interface Item {
  author?: Author;
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  },
  thumbnail: string;
  picture?: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  },
  categories?: Category[];
  sold_quantity?: number;
  description?: string;
}

export interface SearchItems {
  author: Author;
  categories: Category[]
  items: Item[];
}