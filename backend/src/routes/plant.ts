import Router from 'express-promise-router';
import { Request, Response, NextFunction } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.json('Plants Route');
});

// Create plant
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Check if uid exists in firebase or postgres
  // TODO: What should happen if no repeat is provided
  const { name, type, waterTime, repeat, uid } = req.body;
  await db.query(
    'INSERT INTO public.plants (name, type, water_time, repeat, uid) VALUES ($1, $2, $3, $4, $5)',
    [name, type, waterTime, repeat, uid]
  )
  .then(queryResult => {
      res.json({ message: 'Successfully added a new plant' });
  })
  .catch(err => {
    res.status(412);
    res.json(err);
  });
});

module.exports = router;
