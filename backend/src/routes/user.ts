import Router from 'express-promise-router';
import { Request, Response, NextFunction, query } from 'express';
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
router.get('/:uid', async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.params;
  const { rows } = await db.query('SELECT * FROM public.users WHERE uid=$1', [
    uid,
  ]);
  if (rows[0]) {
    res.json(rows[0]);
  }
  res.status(404);
  res.json({ message: 'Unable find user with that uid' });
});

// Update user
router.put('/:uid', async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.params;
  const { firstName, lastName, email } = req.body;
  let query = 'UPDATE public.users SET ';
  // Build query
  if (firstName) {
    query += "first_name='" + firstName + "', ";
  }
  if (lastName) {
    query += "last_name='" + lastName + "', ";
  }
  if (email) {
    query += "email='" + email + "',";
  }
  query = query.substr(0, query.lastIndexOf(','));
  query += " WHERE uid='" + uid + "'";
  
  const { rowCount } = await db.query(query, []);
  res.json({ message: 'Updated ' + rowCount + ' user(s)' });
});

// Delete user
router.delete('/:uid', async (req: Request, res: Response, next: NextFunction) => {
    const { uid } = req.params;
    const {rowCount} = await db.query('DELETE FROM public.users WHERE uid=$1', [uid]);
    if (rowCount > 0) {
        res.json({ message: 'Successfully deleted the user' });
    }
    res.status(404);
    res.json({ message: 'Unable to delete the user with that uid' });
  }
);

module.exports = router;
