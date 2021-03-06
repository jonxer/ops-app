// create a new express router
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller');
  eventsController = require('./controllers/events.controller');

// export router
module.exports = router;

// define routes
// main router
router.get('/',             mainController.showHome);

//event router
router.get('/events',       eventsController.showEvents);


// seed events
router.get('/events/seed',  eventsController.seedEvents);

// create events
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug', eventsController.processEdit);

// delete events

// show a single event
router.get('/events/:slug', eventsController.showSingle);
