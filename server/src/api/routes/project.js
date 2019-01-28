import Project from '../../models/project';

module.exports = (router) => {
  // GET: List of active projects
  const query = { isActive: { $eq: true } };
  router.get('/projects', (req, res) => {
    Project.find(query).sort({ name: 1 })
      .exec().then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({
        message: 'Error finding active projects',
        error: err,
      }));
  });

  // POST: Create new project...
  router.post('/projects', (req, res) => {
    const project = new Project(req.body);
    project.save((err, response) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(response);
    });
  });
};
