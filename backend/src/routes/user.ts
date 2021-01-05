import Router from 'express-promise-router';
import { Request, Response, NextFunction } from 'express';
import db from '../db';

const router = Router();

type User = {
  uid: string;
  first_name: string;
  last_name: string;
  email: string;
};

router.get('/', async (req: Request, res: Response, next: NextFunction) => {});

// Create user
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { uid, firstName, lastName, email } = req.body;
  await db
    .query(
      'INSERT INTO public.users (uid, first_name, last_name, email) VALUES ($1, $2, $3, $4)',
      [uid, firstName, lastName, email]
    )
    .then((queryResult) => {
        res.json({ message: 'Successfully added a new user' });
    })
    .catch((err) => {
        res.status(412);
        res.json(err);
    });
});

// Read user
router.get(
  '/:uid',
  async (req: Request, res: Response, next: NextFunction) => {}
);

module.exports = router;
