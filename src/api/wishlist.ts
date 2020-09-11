import express from 'express';
import SQL from 'sql-template-tag';
import { escape } from 'sqlstring';
import db from '../db';

const router = express.Router();

router.get('/:CustomerID', async (req, res, next) => {
  // get a customers wishlist
  try {

    const { CustomerID } = req.params

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
    `

    const data = await db.all(sql, values)

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

router.post('/:CustomerID/:ShoeID', async (req, res, next) => {
  // add a new wishlist item
  try {

    const { CustomerID, ShoeID } = req.params

    const { sql, values } = SQL`
    INSERT INTO "WishList"
    (
      "ShoeID",
      "CustomerID"
    ) VALUES (
      ${ShoeID}, 
      ${CustomerID}
    );`;

    await db.run(sql, values);

    res.json({ 
      success: true,
      data: { CustomerID, ShoeID }
    });
  } catch (error) {
    next(error)
  }
});

router.delete('/:customerID/:id', async (req, res, next) => {
  // remove a wishlist item
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

router.delete('/:customerID', async (req, res, next) => {
  // clear a wishlist
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

export default router;
