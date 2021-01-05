import Router from 'express-promise-router';
import { Request, Response, NextFunction } from 'express';
import db from '../db';

const router = Router();

// Create plant
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Check if uid exists in firebase or postgres
  // TODO: What should happen if no repeat is provided
  const { name, type, waterTime, repeat, uid } = req.body;
  await db
    .query(
      'INSERT INTO public.plants (name, type, water_time, repeat, uid) VALUES ($1, $2, $3, $4, $5)',
      [name, type, waterTime, repeat, uid]
    )
    .then((queryResult) => {
      res.json({ message: 'Successfully added a new plant' });
    })
    .catch((err) => {
      res.status(412);
      res.json(err);
    });
});

// Get all a user's plants
router.get('/:uid', async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.params;
  const { rows } = await db.query('SELECT * FROM public.plants WHERE uid=$1', [
    uid,
  ]);
  res.json(rows);
});

// Update plant
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, type, waterTime, repeat } = req.body;
  
  let query = 'UPDATE public.plants SET ';
  // Build query
  if (name) {
    query += "name='" + name + "', ";
  }
  if (type) {
    query += "type='" + type + "', ";
  }
  if (waterTime) {
    query += "water_time='" + waterTime + "',";
  }
  if (repeat) {
    query += "repeat='{" + repeat + "}',";
  }
  query = query.substr(0, query.lastIndexOf(','));
  query += " WHERE id='" + id + "'";
  
  const { rowCount } = await db.query(query, []);
  res.json({ message: 'Updated ' + rowCount + ' plant' });
});

// Delete plant
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const {rowCount} = await db.query('DELETE FROM public.plants WHERE id=$1', [id]);
    if (rowCount > 0) {
        res.json({ message: 'Successfully deleted the plant' });
    }
    res.status(404);
    res.json({ message: 'Unable to delete the plant with that id' });
});

module.exports = router;
