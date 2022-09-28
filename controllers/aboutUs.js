

exports.aboutUs = (req, res) => {
  res.render('aboutUs.ejs', {user: req.user, workouts});
}


