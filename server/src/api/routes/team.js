import TeamMember from '../../models/teamMember';

module.exports = (router) => {
  // GET: List of active projects
  router.get('/team', (req, res) => {
    TeamMember.find().sort({ name: 1 })
      .exec().then(members => res.status(200).json(members))
      .catch(err => res.status(500).json({
        message: 'Error finding team members',
        error: err,
      }));
  });

  // POST: Create new project...
  router.post('/team', (req, res) => {
    const member = new TeamMember(req.body);
    member.save((err, response) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(response);
    });
  });
};
