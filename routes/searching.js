var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res) {
  
	/* json file path   */
    var filepath = './public/data.json'; 
	var email = req.query.email;
    /* reading from file to append the data */
    var readvarobj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    var count = 1;
    if(readvarobj['users'].length != "")
    {
    	for(var i=0; i<readvarobj['users'].length;i++)
	    {
	      if(readvarobj['users'][i].email == email)
	      {
	      	res.send("match");
	      }else{
	      	res.send("mismatch");
	      }
	    }

    }
    else{
    	res.send("mismatch");
    }
  	
});

module.exports = router;




