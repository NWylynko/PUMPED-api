export interface Style {
  name: string;
}

export interface StyleWithID extends Style {
  ID: string;
}

export interface partOfStyle {
  name?: string;
}
