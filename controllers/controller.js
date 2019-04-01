var mongoose = require('mongoose');
var faker = require('faker');
var User = mongoose.model('users');

var createUser = function(req,res){
    var user = new User({
        "name": faker.name.findName(),
        "email":faker.internet.email()
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllUsers = function(req,res){
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneUser = function(req,res){
    var userInx = req.params.id;
    User.findById(userInx,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};
//
// var findCafeByName = function(req, res){
//     var cafeName = req.params.name;
//     Cafe.find({name:cafeName},function(err,cafe){
//         if(!err){
//             res.send(cafeName);
//         }else{
//             res.sendStatus(404);
//         }
//     });
// };

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
// module.exports.findCafeByName = findCafeByName;