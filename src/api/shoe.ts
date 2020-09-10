import express from 'express';
import SQL from 'sql-template-tag';
import { escape } from 'sqlstring';
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

router.get('/', async (req, res, next) => {
  // get all shoes

  try {
    const {
      brand = '%',
      style = '%',
      section = '%',
      collection = '%',
      name = '%',
      stars = 0,
    } = req.query;

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

    const empty = results.length === 0 ? true : undefined;

    res.json({
      success: true,
      data: results,
      empty,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:ID', async (req, res, next) => {
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
        AND Shoe.ID = ${ID}
    `;

    const shoe: ShoeWithoutColours = await db.get(sql, values);

    const empty = !shoe ? true : undefined;

    res.json({
      success: true,
      data: shoe,
      empty,
    });
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
  CollectionID: number;
  CoverImage?: number | null;
}

router.post('/', async (req, res, next) => {
  // add a new shoe

  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error('no data sent');
    }

    const {
      name,
      description,
      price,
      releaseDate,
      BrandID,
      StyleID,
      SectionID,
      CollectionID,
      CoverImage = null,
    }: newShoe = req.body;

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
      );`;

    await db.run(sql, values);

    res.json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    next(error);
  }
});

interface PartOfShoe {
  [x: string]: any;
  name?: string;
  description?: string;
  price?: number;
  releaseDate?: number;
  BrandID?: number;
  StyleID?: number;
  SectionID?: number;
  CollectionID?: number;
  CoverImage?: number;
}

router.patch('/:ID', async (req, res, next) => {
  // update a single or multiple table of a shoe
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error('no data sent');
    }

    let sql = 'UPDATE "Shoe" SET ';

    const parts: PartOfShoe = req.body;

    Object.keys(parts).forEach((partName, index, array) => {
      // if the current item is the length of the array then its the last item
      // the last item cant have a comma
      const comma = index === array.length - 1 ? '' : ',';

      sql += `${escape(partName)} = ${escape(parts[partName])}${comma} `;
    });

    sql += `WHERE Shoe.ID = ${escape(req.params.ID)}`;

    await db.run(sql);

    res.json({
      success: true,
      data: { ...req.params, ...req.body },
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  // remove a shoe
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
});

export default router;
