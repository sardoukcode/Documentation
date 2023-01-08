const movies = [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } ]
const movies = [{ title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }]



@@ -70,14 +70,43 @@ app.get('/search', (req, res) => {
app.get('/movies/create', (req, res) => {
    res.send("create")

});  
});
//  read command
app.get('/movies/read', (req, res) => {
    res.status(200);
    res.send( movies )

    res.send(movies)


});

// ORDERED BY DATE

app.get('/movies/read/by-date', (req, res) => {

    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.status(200);
    res.send(sortedMovies);
});


//   ORDERED BY RATING

app.get('/movies/read/by-rating', (req, res) => {

    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    res.status(200);
    res.send(sortedMovies);
});

// ORDERED BY TITLE

app.get('/movies/read/by-title', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.status(200);
    res.send( sortedMovies);
  });


// update command
app.get('/movies/update', (req, res) => {
    res.send("update")