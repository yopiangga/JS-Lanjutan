

$('.search-button').on('click', function(){

    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=6200d587&s=' + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            ulangMovie(movies);
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

})

function ulangMovie(movies){
    let cards = '';
    for(let i=0; i<movies.length; i++){
        movie = movies[i];
        cards += cetakMovie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
    }
    $('.movie-container').html(cards);

    $('.modal-detail-button').on('click', function(){
        // console.log($(this).data('imdbid'));
        $.ajax({
            url: 'https://www.omdbapi.com/?apikey=6200d587&i=' + $(this).data('imdbid'),
            success: m => {
                const movieDetail = `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md">
                      <ul class="list-group">
                          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                          <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                          <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                          <li class="list-group-item"><strong>Writers :</strong> ${m.Writer}</li>
                          <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;

            $('.modal-body').html(movieDetail);
            },
            error: (e) => {
                console.log(e.responseText);
            }
        });
    })
}

function cetakMovie(poster, title, year, imdbid){
    return `<div class="col-md-4 my-5">
    <div class="card" style="">
        <img src="${poster}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${imdbid}" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Detail</a>
        </div>
    </div>
</div>`

}



// console.log(movie);