export interface basicColour {
  colour: string;
  hex: string;
}

export interface Colour extends basicColour {
  ShoeID: string;
  ImageIDs: string[];
}

export interface ColourWithID extends Colour {
  ID: string;
}

export interface partOfColour {
  colour?: string;
  hex?: string;
}
