export interface ItemCategory {
  path_from_root: [
    {
      name: string;
    }
  ]
}

export interface RawCategories {
  values: [
    {
      path_from_root: [
        {
          name: string;
        }
      ]
    }
  ]
}

export interface RawData {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  },
  address: {
    state_name: string;
  }
  category_id: string;
  pictures?: [
    {
      url: string;
    }
  ]
  sold_quantity?: number;
  description?: RawDescription;
}

export interface RawDescription {
  plain_text: string;
}

export interface SearchResponse {
  filters: RawCategories[];
  results: RawData[];
}