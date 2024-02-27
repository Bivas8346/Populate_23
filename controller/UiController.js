const MovieModel = require('../model/movie');
const UserModel = require('../model/user');
const ReviewModdel = require('../model/review')

exports.Home = (req,res)=> {
    ReviewModdel.find().populate("user").populate("movie").then((err,data)=>{
        if(data){
            console.log(data);
            res.render("home",{
                title: "Home page",
                displayData: data
            })
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

exports.Movie = (req,res)=> {
    res.render("movie",{
        title: "Add Movie page"
    })
}

exports.addMovie = (req,res)=>{
    MovieModel({
        Moviename: req.body.movie,
        actor: req.body.actor,
        director: req.body.director
    }).save().then(result=> {
        console.log("New Movie Details Added 👍");
        res.redirect("/user");
    }).catch(error=>{
        console.log(error);
    })
}

exports.User = (req,res)=> {
    MovieModel.find().then(result=>{
        res.render("user",{
            title: "user page",
            displayData: result
        })
    }).catch(error=>{
        console.log(error);
    })
}

exports.AddUser= (req,res)=>{
    UserModel({
        Username: req.body.user,
        email: req.body.email,
        movie : req.body.movie
    }).save().then(result=>{
        console.log(`User also Added--`);
        res.redirect("/review")
    }).catch(error=>{
        console.log(error);
    })
}



exports.Review = (req,res)=> {
    UserModel.find().then(result1=>{
        MovieModel.find().then(result2=>{
            res.render("review",{
                title: "Review page",
                displayData1: result1,
                displayData2: result2
            })
        }) 
    }).catch(error=>{
        console.log(error);
    })
}

exports.AddReview = (req,res)=> {
    ReviewModdel({
        user: req.body.user,
        movie: req.body.movie,
        review: req.body.review
    }).save().then(result=>{
        console.log(`Review added succesfully--`);
        res.redirect("/")
    }).catch(error=>{
        console.log(error);
    })
}