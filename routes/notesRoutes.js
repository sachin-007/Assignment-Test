const express = require('express');
const notesController = require('../controllers/notesController');
const notesValidator = require('../middleware/notesValidator');

const router = express.Router();

router.post('/',notesValidator.validateNote,notesController.createNote);
router.get('/',notesController.getNotes);
router.get('/:id',notesController.getSingleNote);
router.patch('/:id',notesValidator.validateNote,notesController.updateNote);
router.delete('/:id',notesController.deleteNote);

module.exports = router;