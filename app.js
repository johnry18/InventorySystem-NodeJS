var express       = require('express');
var app           = express();
var path          = require('path');
var bodyParser    = require('body-parser');
var http          = require('http').createServer(app);

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//set routes

var initialItems = [{id: 1, name: "item1"}, 
                    {id: 2, name: "item2"}, 
                    {id: 3, name: "item3"}];

app.get('/', function(req, res){
  res.render("index", {
    title: 'My First Application',
    items: initialItems
  });
});

app.post('/add', function(req, res){
  var item = req.body.newItem;
  initialItems.push({
    id: initialItems.length + 1,
    name: item
  });

  res.redirect('/');
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *: ' + port);
});
