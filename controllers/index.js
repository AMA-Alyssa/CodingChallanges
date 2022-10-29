module.exports = {
    getIndex: (req,res)=>{
        try{
            res.render('index.ejs', {
                layout:'./layouts/main'
            })
        }
        catch (error) {
            response.status(500).send({message: error.message})
        }   
    }
}