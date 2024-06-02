export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  description: string;
  isFeatured: boolean;
  storage: Storage;
  color: Color;
  images: Images[];
}

export interface Images {
  id: string;
  url: string;
}

export interface Storage {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
