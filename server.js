
const express=require('express')
const app = express()
const path = require('path')// package built-in to node
const axioss = require('axios')
const { default: axios } = require('axios')



//app.use to upload the files to clients side 
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


//بنشغل السيرفر
const port = 8081
app.listen(port,function(){
    console.log("Server is running on port"+port)

})

//test server is ok "work"
app.get('/sanity',function(req,res){
   
    res.send("ok")
})

let movies = []
//app.get بتستقبل من اليوزر ريكوست
app.get(`/movies/:title`,(req,res)=>{


//axsos get data from  api
axios.get(`http://www.omdbapi.com/?apikey=b0d39b78&s=${req.params.title}`)
.then(function (response) {
    // handle success
   movies = response.data.s
 /*
  movies= movies.map((movie)=>{
    return 
        title: movie.title,
        thumbnail: recipe.thumbnail,
        href: recipe.href,
        ingredients: recipe.ingredients
    } 

  })
  res.send(recipes)*/
  console.log()
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  

})

