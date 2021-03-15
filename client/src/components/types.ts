export interface ItemRender {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    }
    thumbnail: string;
    picture?: string;
    condition: string;
    shipping: {
        free_shipping: boolean;
    }
    address?: {
            state_name: string;
        }
    item_categories: Category[];
    sold_quantity?: number;
    description?: string;
}

export interface Category {
  name: string;       
}

export interface SearchItems {
    categories?: Category[]
    items: ItemRender[];

}