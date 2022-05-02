let db = require("../database/models");
let moviesController ={
    list: function(req,res) {
        db.movies.findAll({
            include: [{association: "genres"},{association: "actors"}]
        })
            .then(function(movies){
                res.render("listadoDePeliculas", {movies})
            })
    },
    add: function(req,res){
        res.render("crearPelicula")
    },
    create: function(req,res){
        db.movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        });

        res.redirect("/movies");

    },
    delete: function(req,res){

    },
    detail: function(req,res){
        db.movies.findByPk(req.params.id,{
            include: [{association: "genres"},{association: "actors"}]
        })
            .then(function(movies){
                res.render("detallePelicula", {movies})
            })
    },
    drama: function(req,res){
        db.movies.findAll({
            where: {
                genre_id: 3
            }
        })
            .then(function(movies){
                res.render('peliculasDrama',{movies})
            })
    },
    delete: function(req,res){
        db.movies.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("/movies")
    }
};

module.exports = moviesController;