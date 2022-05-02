const bcryptjs = require('bcryptjs');
let db = require("../database/models");
let userController = {
    list: function(req,res){
        db.users.findAll()
            .then(function(users){
                console.log(users)
                res.render("users",{users})

            })
    },
    add:function(req,res){
        res.render("register")
    },
    create: function(req,res){
        console.log(req.body)
        db.users.create({
            name: req.body.user,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            rol: req.body.rol,
        })
        res.redirect("/movies")

    },
    login: function(req,res){
        res.render('login')
    },
    loginProcess: function(req,res){
        db.users.findAll()
            .then(function(users){
                for(i = 0; i < users.length ; i++){
                    let userToLogin = String(req.body.name);
                    let userFound = String(users[i].name);
                    let isOkThePassword = bcryptjs.compareSync(req.body.password,users[i].password);
                    if(users[i].name == userToLogin && isOkThePassword == true){
                        res.send("Has iniciado sesion")
                    }
                }
            })
    }
}

module.exports = userController;