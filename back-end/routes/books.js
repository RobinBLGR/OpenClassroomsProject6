const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp');

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.getAllBooks);
router.post('/', auth, multer, sharp, booksCtrl.createBook);
router.get('/bestrating', booksCtrl.getBestRatedBooks);
router.get('/:id', booksCtrl.getOneBook);
router.put('/:id', auth, multer, sharp, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.post('/:id/rating', auth, booksCtrl.rateBook);

module.exports = router;
