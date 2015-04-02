var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  	
  	var id = parseInt(req.query.id);
    var memid;
    var filepath = './public/data.json'   
 
    var readvarobj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    
    for(var i=0; i<readvarobj['users'].length;i++)
    {
      if(id == readvarobj['users'][i].id)
      {
        //delete readvarobj.users[i];
        memid = i;
        break;
      }
    }
      
    res.render('editmember',{title: 'Users List', users: readvarobj['users'][memid]});
    res.end();

});

router.post('/', function(req, res) {
  	
	/* receiving all post form data  */ 
	
      var memid = parseInt(req.body.memid);
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
    
    
    console.log(readvarobj["users"][memid-1]);
    /* creating json object */
	  readvarobj["users"][memid-1] = {
	  		"id": parseInt(memid), 
	       "name": {"firstName":fn, "lastName":ln}, 
	        "email":email,
	        "gender":gen,
	        "city":city,
	        "company":comp   
	  };
    console.log(readvarobj["users"][memid-1]);
    var objfinal = JSON.stringify(readvarobj, null, 4).replace(/null,/g,"");
	
    /* writing json object to file. */
        fs.writeFile(filepath, objfinal,'utf8', function(err) {
          res.redirect('./#tabs-2');
          res.end();          
        })  
    

});


module.exports = router;