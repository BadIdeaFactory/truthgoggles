import express from 'express';

const router = express.Router();

/* GET home page. */

router.get('*', (req, res) => {
  throw new Error('Houston, we have a problem.');
  res.render('index');
});
export default router;