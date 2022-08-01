

class render{

    movieRenderer(movies){
        $("#content").empty()
        const source = $('#movie-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({movies});
    //    console.log(movies)
        // append our new html to the page
        $('#content').append(newHTML);
     
     }


}

