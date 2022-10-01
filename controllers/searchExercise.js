

exports.searchExercise = (req, res) => {
  res.render('search.ejs', {user: req.user, workouts,layout:'./layouts/main.ejs'});
}


