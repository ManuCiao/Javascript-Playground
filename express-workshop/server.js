var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');

app.use(express.static("public"));

app.use(formidable());

app.get('/my-lovely-endpoint', function (req, res) {
    res.send('Hello there!');
});

app.post('/create-post', function(req, res){
  // console.log(req.body);
  console.log(req.fields.blogpost);
  fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    // console.log(file);
    var parsedFile = JSON.parse(file);
    var time = Date.now();
    parsedFile[time] = req.fields.blogpost;
    console.log(parsedFile);
    var newfile = JSON.stringify(parsedFile);

    fs.writeFile(__dirname + '/data/posts.json', newfile, function (error) {
      if (error)
          return console.log(err);
    });
  });


});



app.listen(3000, function (){
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
