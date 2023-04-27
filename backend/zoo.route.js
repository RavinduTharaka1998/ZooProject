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

// businessRoutes.route('/edit/:id').get(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err,customers){
//         res.json(customers);
//     });
// });

// businessRoutes.route('/update/:id').post(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err, customers){
//         if(!customers)
//             res.status(404).send("Data is not found??");
//         else{
//             customers.name = req.body.name;
//             customers.address = req.body.address;
//             customers.nic = req.body.nic;
//             customers.phone = req.body.phone;
//             customers.customer_type = req.body.customer_type;
//             customers.email = req.body.email;
//             customers.password = req.body.password;


//             customers.save().then(business => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// businessRoutes.route('/delete/:id').get(function(req,res){
//     Customers.findByIdAndRemove({_id:req.params.id}, function (err, customers){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });



module.exports = zooRoutes;