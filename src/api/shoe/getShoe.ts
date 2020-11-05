import SQL from 'sql-template-tag';
import db from '../../db';
import type { Shoe, ShoeWithDetails } from './types';
import type { ShoeColour } from '../colour/types';
import type { StockWithID } from '../stock/types';

async function getShoe(ShoeID: number): Promise<ShoeWithDetails> {
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

  const result: ShoeWithDetails = await (async () => {
    // eslint-disable-next-line no-shadow
    const colours = await (async (): Promise<ShoeColour[]> => {
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
      return db.all(sql, values);
    })();

    const stock = await (async (): Promise<StockWithID[]> => {
      const { sql, values } = SQL`
        SELECT *
        FROM Stock
        AND ShoeID = ${shoe.ID}
      `;
      return db.all(sql, values);
    })();

    return { ...shoe, colours, stock };
  })();

  return result;
}

export default getShoe;
