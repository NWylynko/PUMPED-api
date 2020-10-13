export interface Stock {
  ShoeID: number,
  ColourID: number,
  size: number,
  stock: number,
}

export interface StockWithID extends Stock {
  ID: string;
}

export interface partOfStock {
  stock?: number,
}
