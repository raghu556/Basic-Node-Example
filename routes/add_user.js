var express = require('express');
var qs = require('querystring');
var fs = require('fs');


var router = express.Router();

/* Post users listing. */
router.post('/', function(req, res) {
   /* sending response to browser */
      //res.send('Added user !!');
      
    /* receiving all post form data  */ 
      var fn = req.body.fname;
      var ln = req.body.lname;
      var email = req.body.email;
      var gen = req.body.gender;
      var city = req.body.city;
      var comp = req.body.company;


    /* json file path   */
      var filepath = './public/data.json'   

    /* reading from file to append the data */
     
    var readvarobj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    var id = (readvarobj["users"].length)+1;
    
    /* creating json object */
      readvarobj["users"][id] = {
           "id": id, 
           "name": {"firstName":fn, "lastName":ln}, 
            "email":email,
            "gender":gen,
            "city":city,
            "company":comp   
        };
    
    var objfinal = JSON.stringify(readvarobj, null, 4).replace(/null,/g,"");

    /* writing json object to file. */
        fs.writeFile(filepath, objfinal,'utf8', function(err) {
          res.redirect('./#tabs-2');
          res.end();          
        })  
});


module.exports = router;
