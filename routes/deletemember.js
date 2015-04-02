var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  	
    /* receiving all post form data  */ 

    var memid = parseInt(req.query.id);

    /* json file path   */
      var filepath = './public/data.json'   

    /* reading from file to append the data */
    var readvarobj = JSON.parse(fs.readFileSync(filepath, 'utf8'));

    for(var i=0; i<readvarobj['users'].length;i++)
    {
      if(memid == readvarobj['users'][i].id)
      {
        //delete readvarobj.users[i];
        readvarobj['users'].splice(i,1)
        break;
      }
    }
     
    for(var i=0; i<readvarobj['users'].length;i++)
    {
        readvarobj["users"][i].id = i+1;
    }
    
    var objfinal = JSON.stringify(readvarobj, null, 4).replace(/null,/g,"");

    /* writing json object to file. */
    fs.writeFile(filepath, objfinal,'utf8', function(err) {
      res.redirect('./#tabs-2');
      res.end();          
    })  

});


module.exports = router;