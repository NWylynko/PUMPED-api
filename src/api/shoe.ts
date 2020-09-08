import express from 'express';
import SQL from 'sql-template-tag';
import db from '../db';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // get all shoes

  try {
    const {
      brand = '%', style = '%', section = '%', collection = '%',
    } = req.query;

    const { sql, values } = SQL`
      SELECT
        Shoe.ID,
        Shoe.Name,
        Shoe.description,
        Shoe.Price,
        Shoe.releaseDate,
        Brand.name as "Brand",
        Style.name as "Style",
        Section.name as "Section",
        Collection.name as "Collection"
      FROM Shoe, Brand, Style, Section, Collection
      WHERE Shoe.BrandID = Brand.ID
        AND Shoe.StyleID = Style.ID
        AND Shoe.SectionID = Section.ID
        AND Shoe.CollectionID = Collection.ID
        AND Brand.name LIKE ${brand}
        AND Style.name LIKE ${style}
        AND Section.name LIKE ${section}
        AND Collection.name LIKE ${collection}
      `;

    const results = await db.all(sql, values);

    res.json({ results });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  // get single shoe
  res.json({});
});

router.post('/', async (req, res, next) => {
  // add a new shoe

  try {
    const {
      name, description, price, releaseDate, BrandID, StyleID, SectionID, CollectionID, CoverImage,
    } = {
      name: 'Jogga',
      description: 'run fast',
      price: 80,
      releaseDate: new Date().toDateString(),
      BrandID: 1,
      StyleID: 1,
      SectionID: 1,
      CollectionID: 1,
      CoverImage: 1,
    };

    const { sql, values } = SQL`INSERT INTO "main"."Shoe"
    ("name", "description", "price", "releaseDate", "BrandID", "StyleID", "SectionID", "CollectionID", "CoverImage")
    VALUES (${name}, ${description}, ${price}, ${releaseDate}, ${BrandID}, ${StyleID}, ${SectionID}, ${CollectionID}, ${CoverImage});`;

    const result = await db.run(sql, values);

    res.json({ result });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res) => {
  // update the entire content of a shoe
  res.json({});
});

router.patch('/:id', async (req, res) => {
  // update a single or multiple table of a shoe
  res.json({});
});

router.delete('/:id', async (req, res) => {
  // remove a shoe
  res.json({});
});

export default router;
