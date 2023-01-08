const movies = [{ title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }]
const movies = [
    {id:1, title: 'Jaws', year: 1975, rating: 8 },
    {id:2, title: 'Avatar', year: 2009, rating: 7.8 },
    {id:3, title: 'Brazil', year: 1985, rating: 8 },
    {id:4, title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]



@@ -107,6 +112,27 @@ app.get('/movies/read/by-title', (req, res) => {
  });



//   movie defined by the ID

  app.get('/movies/read/id/:id', (req, res) => {

    const id = req.params.id;

    const movie = movies.find(movie => movie.id === Number(id));

    if (movie) {
      res.status(200);
      res.send(movie)
    } else {
      res.status(404);
      res.send(`the movie ${id} does not exist` );
    }
  });




// update command
app.get('/movies/update', (req, res) => {
    res.send("update")