exports.getHome =  (req,res)=>{
        res.render('home.ejs', {user: req.user});
}

exports.createWorkout = (req, res) => {
   console.log(req.body)
}