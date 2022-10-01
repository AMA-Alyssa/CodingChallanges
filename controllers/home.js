const Workout = require("../models/Workout");

exports.getHome =  (req,res)=>{
    workouts = []
    res.render('home.ejs', {user: req.user, workouts, layout:'./layouts/main'});
}

exports.createWorkout = async (req, res) => {
    
        const letters = (req.body.workout).toUpperCase().split('')
        const selected = req.body.bodyFocus
        const newArray = []

    try{       
        
        //let workouts = await Workout.find()
        let workouts = await Workout.find({
            type:selected,
            letter: letters,
        })

        for(let i= 0; i < letters.length; i++){
            for(let j = 0; j < workouts.length; j++){
                if( letters[i] === workouts[j].letter){
                    newArray.push(workouts[j])
                }else{
                    continue;
                }
            }
        } 

        console.log(newArray)
        res.render('home.ejs', {
            user: req.user,
            workouts: newArray
        }); 

    } catch(err){
        console.log(err)
    }
}
