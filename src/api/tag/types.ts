export interface Tag {
  tag: string
}

export interface TagWithID extends Tag {
  ID: string;
}

export interface partOfTag {
  tag?: string
}
