export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  picture: {
      large: string;
      medium: string;
      small: string;
      tiny: string;
  };
  releaseDate: number;
  colours: string[];
  stars: number;
}
