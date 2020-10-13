export interface Collection {
  name: string;
}

export interface CollectionWithID extends Collection {
  ID: string;
}

export interface partOfCollection {
  name?: string;
}