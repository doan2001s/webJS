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
  // Sending our index.html file as 
  // response. In path.join() method
  // __dirname is the directory where
  // our app.js file is present. In 
  // this case __dirname is the root
  // folder of the project.

//   Render
//   res.sendFile(path.join(__dirname, '/views/index.html'));

//Trang home
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/views/index.html'))

});
// Trang blog
app.get('/blog',(req,res)=>{
  res.sendFile(path.join(__dirname, '/views/blog.html'))
})

// Trang contact
app.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname, '/views/contact.html'))
})
app.listen(3000, () => {
    console.log('Server is up on port 3000');
  }); 