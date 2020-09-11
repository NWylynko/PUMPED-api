import SQL from 'sql-template-tag';
import db from '../../db';
import { newShoe } from './types';

async function addShoe({
  name,
  description,
  price,
  releaseDate,
  BrandID,
  StyleID,
  SectionID,
  CollectionID,
  CoverImage = null,
}: newShoe): Promise<newShoe> {
  const { sql, values } = SQL`
    INSERT INTO "Shoe"
    (
      "name", 
      "description", 
      "price", 
      "releaseDate", 
      "BrandID", 
      "StyleID", 
      "SectionID", 
      "CollectionID", 
      "CoverImage"
    ) VALUES (
      ${name}, 
      ${description}, 
      ${price}, 
      ${releaseDate}, 
      ${BrandID}, 
      ${StyleID}, 
      ${SectionID}, 
      ${CollectionID}, 
      ${CoverImage}
    );
  `;

  await db.run(sql, values);

  return {
    name,
    description,
    price,
    releaseDate,
    BrandID,
    StyleID,
    SectionID,
    CollectionID,
    CoverImage,
  };
}

export default addShoe;
