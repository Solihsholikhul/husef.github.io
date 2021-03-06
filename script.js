 $('.search-button').on('click', function() {
     $.ajax({

         url: 'https://www.omdbapi.com/?apikey=901fff63&s=' + $('.input-keyword').val(),
         success: result => {
             const movies = result.Search;
             let card = '';
             movies.forEach(m => {
                 card += showCard(m);
             });
             $('.movie-container').html(card);


             //tombol di klik
             $('.modal-detail-button').on('click', function() {
                 $.ajax({
                     url: 'https://www.omdbapi.com/?apikey=901fff63&i=' + $(this).data('imdbid'),
                     success: m => {
                         const movieDetail = showDetailMovie(m);
                         $('.modal-body').html(movieDetail);
                     },
                     error: (e) => {
                         console.log(e.responseText);
                     }

                 });
             });

         },
         error: (e) => {
             console.log(e.responseText);
         }

     });

 });

 //  fecth
 //  const searchButton = document.querySelector('.search-button');
 //  searchButton.addEventListener('click', function() {

 //              const inputKeyword = document.querySelector('.input-keyword');
 //              fetch('https://www.omdbapi.com/?apikey=901fff63&i=tt0848228&s=' + inputKeyword.value)

 //              .then(response => response.json())
 //                  .then(response => {
 //                      const movies = response.Search;
 //                      let card = '';
 //                      movies.forEach(m => card += showCard(m));
 //                      const movieContainer = document.querySelector('.movie-container');
 //                      movieContainer.innerHTML = card;


 //                      //Tombol belum berhasil
 //                      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
 //                      modalDetailButton.forEach(btn => {
 //                          btn.addEventListener('click', function() {
 //                              const imdbid = this.dataset.imdbid;
 //                              fetch('https://www.omdbapi.com/?apikey=901fff63&i=' + imbdid)
 //                                  .then(response => response.json())
 //                                  .then(m => {
 //                                      const movieDetail = showDetailMovie(m);
 //                                      const modalBody = document.querySelector('.modal-body');
 //                                      modalBody.innerHTML = movieDetail;


 //                                  });

 //                          });
 //                      });


 //                  });



 function showCard(m) {
     return ` <div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster }" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title }</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" 
                    data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
            </div>
            </div>`;
 }

 function showDetailMovie(m) {
     return ` <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>${m.Title} ${m.Year}</h4>
                        </li>  
                        <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writers : </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>`;
 }
