module.exports = {
   getHome: (req,res)=>{
        res.render('home.ejs', {user: req.user});
    }
}