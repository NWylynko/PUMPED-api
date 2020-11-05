import SQL from 'sql-template-tag';
import db from '../../db';
import type { Shoe, ShoeWithColours } from './types';

async function getShoe(ShoeID: number): Promise<ShoeWithColours> {
  const { sql, values } = SQL`
    SELECT
      Shoe.ID,
      Shoe.Name as "Name",
      Shoe.Description as "Description",
      Shoe.Price as "Price",
      Shoe.releaseDate,
      Shoe.Stars,
      Shoe.CoverImage,
      Brand.name as "Brand",
      Brand.icon as "BrandIcon",
      Style.name as "Style",
      Section.name as "Section",
      Collection.name as "Collection"
    FROM Shoe, Brand, Style, Section, Collection
    WHERE Shoe.BrandID = Brand.ID
      AND Shoe.StyleID = Style.ID
      AND Shoe.SectionID = Section.ID
      AND Shoe.CollectionID = Collection.ID
      AND Shoe.ID = ${ShoeID}
  `;

  const shoe: Shoe = await db.get(sql, values);

  const result: ShoeWithColours = await (async () => {
    // eslint-disable-next-line no-shadow
    const { sql, values } = SQL`
      SELECT
        Colour.colour,
        Colour.hex,
        ColourImage.ImageID
      FROM 
        Colour,
        ColourImage
      WHERE Colour.ID = ColourImage.ColourID
      AND ShoeID = ${shoe.ID}
      ORDER BY Colour.ID
      `;
    const colours = await db.all(sql, values);
    return { ...shoe, colours };
  })();

  return result;
}

export default getShoe;
