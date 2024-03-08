const teams = require('../utils/teams');

const validateId = (req, res, next) => {
  const id = Number(req.params.id);
  if (!teams.some((t) => t.id === id)) {
    return res.sendStatus(404).json({ message: 'Time não encontrado' });
  } else
  next();
};

module.exports = validateId;
