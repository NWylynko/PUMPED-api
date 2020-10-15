import SQL from 'sql-template-tag';
import db from '../../db';
import type { newShoe, newShoeWithID } from './types';

const getIDOfNewShoe = (CoverImage: number): Promise<{ ID: number }> => {
  // the cover image is unique so its safe to get the id from it
  const { sql, values } = SQL`
    SELECT ID
    FROM Shoe
    WHERE CoverImage = ${CoverImage}
  `;

  return db.get(sql, values);
};

const addTag = (ShoeID: number, TagID: number) => {
  const { sql, values } = SQL`
    INSERT INTO ShoeTag
    (
      "ShoeID",
      "TagID"
    ) VALUES (
      ${ShoeID},
      ${TagID}
    )
  `;

  return db.run(sql, values);
};

async function addShoe({
  name,
  description,
  price,
  releaseDate,
  BrandID,
  StyleID,
  SectionID,
  CollectionID,
  CoverImage,
  tags = [],
}: newShoe): Promise<newShoeWithID> {
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

  const { ID: ShoeID } = await getIDOfNewShoe(CoverImage);

  await Promise.all(tags.map((TagID) => addTag(ShoeID, TagID)));

  return {
    ID: ShoeID,
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
