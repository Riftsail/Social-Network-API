const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    removeReaction,
    deleteThought
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST, and DELETE at /api/thoughts/:thoughtId/reactions
// router
//   .route('/:thoughtId/reactions')
//   .post(addReaction)
//   .delete(removeReaction);

  router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;