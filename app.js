const express = require('express');
const path = require('path');
const app = express();
  
// Static file
app.use(express.static(path.join(__dirname, "public")));
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))


// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Render file
app.get('/', (req, res) => {
  
  // Sending our index.html file as 
  // response. In path.join() method
  // __dirname is the directory where
  // our app.js file is present. In 
  // this case __dirname is the root
  // folder of the project.

//   Render
//   res.sendFile(path.join(__dirname, '/views/index.html'));
res.sendFile(path.join(__dirname, '/views/index.html'))

});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
  }); 