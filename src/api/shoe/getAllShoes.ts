import SQL from 'sql-template-tag';
import db from '../../db';
import { Shoe, GetAllShoes, ShoeWithColours } from './types';

async function getAllShoes({
  brand = '%',
  style = '%',
  section = '%',
  collection = '%',
  name = '%',
  stars = 0,
}: GetAllShoes): Promise<ShoeWithColours[]> {
  const { sql, values } = SQL`
    SELECT
      Shoe.ID,
      Shoe.Name,
      Shoe.Description,
      Shoe.Price,
      Shoe.releaseDate,
      Shoe.Stars,
      Brand.name as "Brand",
      Style.name as "Style",
      Section.name as "Section",
      Collection.name as "Collection"
    FROM Shoe, Brand, Style, Section, Collection
    WHERE Shoe.BrandID = Brand.ID
      AND Shoe.StyleID = Style.ID
      AND Shoe.SectionID = Section.ID
      AND Shoe.CollectionID = Collection.ID
      AND Shoe.Stars >= ${stars}
      AND Brand.name LIKE ${brand}
      AND Style.name LIKE ${style}
      AND Section.name LIKE ${section}
      AND Collection.name LIKE ${collection}
      AND Shoe.name LIKE ${name}
  `;

  const shoes: Shoe[] = await db.all(sql, values);

  const results: ShoeWithColours[] = await Promise.all(shoes.map(async (shoe) => {
    // eslint-disable-next-line no-shadow
    const { sql, values } = SQL`
      SELECT colour, hex 
      FROM Colour 
      WHERE ShoeID = ${shoe.ID}`;
    const colours = await db.all(sql, values);
    return { ...shoe, colours };
  }));

  return results;
}

export default getAllShoes;