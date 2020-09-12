export interface Shoe {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
  releaseDate: number;
  Brand: string;
  Style: string;
  Section: string;
  Collection: string;
  stars: number;
}

export interface PartOfShoe {
  [x: string]: any;
  name?: string;
  description?: string;
  price?: number;
  releaseDate?: number;
  BrandID?: number;
  StyleID?: number;
  SectionID?: number;
  CollectionID?: number;
  CoverImage?: number;
}

export interface newShoe {
  name: string;
  description: string;
  price: number;
  releaseDate: number;
  BrandID: number;
  StyleID: number;
  SectionID: number;
  CollectionID: number;
  CoverImage?: number | null;
}

export interface ShoeWithColours extends Shoe {
  colours: string[];
}

export interface GetAllShoes {
  stars?: number;
  brand?: string;
  style?: string;
  section?: string;
  collection?: string;
  name?: string;
}