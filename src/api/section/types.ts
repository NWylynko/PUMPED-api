export interface Section {
  name: string;
}

export interface SectionWithID extends Section {
  ID: string;
}

export interface partOfSection {
  name?: string;
}
