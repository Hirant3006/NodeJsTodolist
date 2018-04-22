var Users = require("../models/userModel");

module.exports = function (app) {

    app.get("/api/setupUsers", function (req,res) {

        // setup seed data

        var seedUser= [
            {
                name : "admin",
                password: "admin"
            }
        ];

        Users.create(seedUser,function (err,results) {

            res.send(results);
        })
    })
}