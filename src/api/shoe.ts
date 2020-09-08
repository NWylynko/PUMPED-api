import express from 'express';
import SQL from 'sql-template-tag';
import db from '../db';

const router = express.Router();

interface ShoeWithoutColours {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
  releaseDate: number;
  Brand: string;
  Style: string;
  Section: string;
  Collection: string;
  stars: number;
}

interface ShoeWithColours extends ShoeWithoutColours {
  colours: string[];
}

// doesn't work as stars average from reviews will error if
// there are no reviews to average the stars from and instead
// of defaulting to 0 or null it will just silent error and the
// row wont be returned, using IFNULL seems like it would fix
// this to set a default at 0 but doesn't seem to work.
// probably just going to have to send another db.get to get
// the average of stars and then add it into the data with a
// default of 0 if it returns null

router.get('/', async (req, res, next) => {
  // get all shoes

  try {
    const {
      brand = '%',
      style = '%',
      section = '%',
      collection = '%',
    } = req.query;

    const { sql, values } = SQL`
      SELECT
        Shoe.ID,
        Shoe.Name,
        Shoe.Description,
        Shoe.Price,
        Shoe.releaseDate,
        Brand.name as "Brand",
        Style.name as "Style",
        Section.name as "Section",
        Collection.name as "Collection",
        avg(Review.stars) as "Stars"
      FROM Shoe, Brand, Style, Section, Collection, Review
      WHERE Shoe.BrandID = Brand.ID
        AND Shoe.StyleID = Style.ID
        AND Shoe.SectionID = Section.ID
        AND Shoe.CollectionID = Collection.ID
        AND Review.ShoeID = Shoe.ID
        AND Brand.name LIKE ${brand}
        AND Style.name LIKE ${style}
        AND Section.name LIKE ${section}
        AND Collection.name LIKE ${collection}
    `;

    const shoes: ShoeWithoutColours[] = await db.all(sql, values);

    const results: ShoeWithColours[] = await Promise.all(shoes.map(async (shoe) => {
      // eslint-disable-next-line no-shadow
      const { sql, values } = SQL`
        SELECT colour, hex 
        FROM Colour 
        WHERE ShoeID = ${shoe.ID}`;
      const colours = await db.all(sql, values);
      return { ...shoe, colours };
    }));

    res.json({ data: results });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  // get single shoe

  try {
    const { ID } = req.params;

    const { sql, values } = SQL`
      SELECT
        Shoe.ID,
        Shoe.Name,
        Shoe.Description,
        Shoe.Price,
        Shoe.releaseDate,
        Brand.name as "Brand",
        Style.name as "Style",
        Section.name as "Section",
        Collection.name as "Collection",
        avg(Review.stars) as "Stars"
      FROM Shoe, Brand, Style, Section, Collection, Review
      WHERE Shoe.BrandID = Brand.ID
        AND Shoe.StyleID = Style.ID
        AND Shoe.SectionID = Section.ID
        AND Shoe.CollectionID = Collection.ID
        AND Review.ShoeID = Shoe.ID
        AND Shoe.ID = ${ID}
    `;

    const shoe: ShoeWithoutColours = await db.get(sql, values);

    res.json({ data: shoe });
  } catch (error) {
    next(error);
  }
});

interface newShoe {
  name: string;
  description: string;
  price: number;
  releaseDate: number;
  BrandID: number;
  StyleID: number;
  SectionID: number;
  CollectionID?: number;
  CoverImage?: number;
}

router.post('/', async (req, res, next) => {
  // add a new shoe

  try {
    const {
      name,
      description,
      price,
      releaseDate,
      BrandID,
      StyleID,
      SectionID,
      CollectionID,
      CoverImage,
    }: newShoe = req.body;

    const { sql, values } = SQL`
      INSERT INTO "main"."Shoe"
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
      );`;

    const result = await db.run(sql, values);

    res.json({ data: result || req.body });
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
