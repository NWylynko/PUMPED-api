export interface Colour {
  ShoeID: string;
  colour: string;
  hex: string;
}

export interface ColourWithID extends Colour {
  ID: string;
}

export interface partOfColour {
  colour?: string;
  hex?: string;
}