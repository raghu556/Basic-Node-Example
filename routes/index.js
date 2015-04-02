var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  var filepath = './public/data.json'   
 
    var readvarobj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    var id = (readvarobj["users"].length)+1;
    
    //var objfinal = JSON.stringify(readvarobj["users"]);//.replace(/null,/g,"");
    
    //res.writeHead(200);	
    //console.log(readvarobj['users']);
    //res.write(JSON.stringify(readvarobj["users"][1].name.firstName));
	var json_string = { action:"date +%s", result:"1367263074"};
    res.render('index',{title: 'Members Form', users: readvarobj});

    res.end();

  	//res.render('index', { title: 'Express' });
});

module.exports = router;




