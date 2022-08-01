
const renderer = new render()

function fetchMovie(){

    let input = $("#movie-name").val()
    //غيت بترسل $get 
    
    $.get(`/movies/${input}`,(res)=>{    
      console.log(res);  
      renderer.movieRenderer(res)
    })
}

$('#content').on('click','img',function(){
  let mydiv=$(this).closest('div')
  let id=$(this).closest('div').data().id
  $.get(`http://www.omdbapi.com/?apikey=b0d39b78&i=${id}`,
  (
  function(Rating){
 
 Rating.Ratings.forEach(rating => {
  mydiv.append(<li> ${rating.Value}</li>)
 });

  })
  )

})
