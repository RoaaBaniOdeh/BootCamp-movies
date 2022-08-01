const renderer = new render()

function fetchMovie(){

    let input = $("#movie-name").val()
    //غيت بترسل $get 
    $.get(`/movies/${input}`,(res)=>{
      //console.log(res)
      renderer. movieRenderer(res)
    })
}

/*
const clickphototfun= function () {
	let firstingred = $(this).closest('div').find('ul  :first-child').text()
	alert(firstingred)
}
$("body").on("click", "img",clickphototfun);
*/