const express = require('express');
const zooRoutes = express.Router();

let Projects = require('./project.model');

zooRoutes.route('/addproject').post(function (req,res){
    let projects = new Projects(req.body);
    console.log("Project Add Route Called....")
    projects.save()
        .then(projects => {
            res.status(200).json({'project' : 'project is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

zooRoutes.route('/').get(function (req, res){
    console.log("Project Get Route Called....")
    Projects.find(function (err,pro){
        if(err)
            console.log(err);
        else{
            res.json(pro)
        }
    });

});

zooRoutes.route('/getoneprojet/:id').get(function (req, res){
    let id = req.params.id;
    console.log("Get One Project id " +id);
    Projects.findOne({$and:[{_id : id}]},function (err,pro){
        if(err)
            console.log(err);
        else{
            res.json(pro)
        }
    });

});

zooRoutes.route('/editproject/:id').get(function (req,res){
    let id = req.params.id;
    Projects.findById(id, function (err,project){
        res.json(project);
    });
});

zooRoutes.route('/updateproject/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Update Project id " +id);
    Projects.findById(id, function (err, projects){
        if(!projects)
            res.status(404).send("Data is not found??");
        else{
            projects.tittle = req.body.tittle;
            projects.owner = req.body.owner;
            projects.amount = req.body.amount;
            projects.description = req.body.description;
            projects.type = req.body.type;
            projects.duration = req.body.duration;
            projects.status = req.body.status;


            projects.save().then(projects => {
                res.json('Update Complete');
            })
            .catch(err =>{
                    res.status(400).send("Unable to update data");
            });
        }
    });
});

zooRoutes.route('/admindeleteproject/:id').get(function(req,res){
    Projects.findByIdAndRemove({_id:req.params.id}, function (err, projects){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

zooRoutes.route('/adminacceptproject/:id').get(function (req,res){
 
    let id = req.params.id;
    console.log("Accept Project id : "+id)
    Projects.findById(id, function (err, projects){
        if(!projects)
            res.status(404).send("Data is not found??");
        else{
            projects.status = "accepted";

            projects.save().then(projects => {
                res.json('Update Completed');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

zooRoutes.route('/adminrejectproject/:id').get(function (req,res){
 
    let id = req.params.id;
    console.log("Reject Project id : "+id)
    Projects.findById(id, function (err, projects){
        if(!projects)
            res.status(404).send("Data is not found??");
        else{
            projects.status = "rejected!!!";

            projects.save().then(projects => {
                res.json('Update Completed');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


module.exports = zooRoutes;