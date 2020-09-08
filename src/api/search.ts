import express from 'express';
import SQL from 'sql-template-tag';
import db from '../db';

const router = express.Router();

router.get('/Brand/:search', async (req, res, next) => {
  // search for brand by name
  try {
    const { search } = req.params;

    const likeSearch = `%${search}%`;

    const { sql, values } = SQL`SELECT * FROM Brand WHERE name LIKE ${likeSearch} LIMIT 5`;

    const results = await db.all(sql, values);

    res.json({ results });
  } catch (error) {
    next(error);
  }
});

router.get('/Style/:search', async (req, res, next) => {
  // search for style by name
  try {
    const { search } = req.params;

    const likeSearch = `%${search}%`;

    const { sql, values } = SQL`SELECT * FROM Style WHERE name LIKE ${likeSearch} LIMIT 5`;

    const results = await db.all(sql, values);

    res.json({ results });
  } catch (error) {
    next(error);
  }
});

router.get('/Section/:search', async (req, res, next) => {
  // search for section by name
  try {
    const { search } = req.params;

    const likeSearch = `%${search}%`;

    const { sql, values } = SQL`SELECT * FROM Section WHERE name LIKE ${likeSearch} LIMIT 5`;

    const results = await db.all(sql, values);

    res.json({ results });
  } catch (error) {
    next(error);
  }
});

router.get('/Collection/:search', async (req, res, next) => {
  // search for collection by name
  try {
    const { search } = req.params;

    const likeSearch = `%${search}%`;

    const { sql, values } = SQL`SELECT * FROM Collection WHERE name LIKE ${likeSearch} LIMIT 5`;

    const results = await db.all(sql, values);

    res.json({ results });
  } catch (error) {
    next(error);
  }
});

export default router;
