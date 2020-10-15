import SQL from 'sql-template-tag';
import db from '../../db';
import type { Shoe } from '../shoe/types';

function getWishlist(CustomerID: number): Promise<Shoe[]> {
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
      FROM Shoe, Brand, Style, Section, Collection, WishList
      WHERE Shoe.BrandID = Brand.ID
        AND Shoe.StyleID = Style.ID
        AND Shoe.SectionID = Section.ID
        AND Shoe.CollectionID = Collection.ID
        AND Shoe.ID = WishList.ShoeID
        AND WishList.CustomerID = ${CustomerID}
    `;

  return db.all(sql, values);
}

export default getWishlist;
