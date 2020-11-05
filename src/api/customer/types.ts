export interface Customer {
  // [key: string]: string | undefined;
  firstName?: string;
  lastName?: string;
}

export interface CustomerWithID extends Customer {
  ID: number;
}
