import express from 'express';

const router = express.Router();

require('./routes/project')(router);
require('./routes/team')(router);
require('./routes/standup')(router);

module.exports = router;