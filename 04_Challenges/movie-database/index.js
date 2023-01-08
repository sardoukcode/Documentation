@@ -6,13 +6,22 @@ const port = 3000



const movies = [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } ]




app.get('/', (req, res) => {
    res.status(200);

    res.send('Wellcome')
  })
})


// Test command
app.get('/test', (req, res) => {
    res.status(200);

    res.send("ok")

});
@@ -21,22 +30,28 @@ app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();

    res.send("so: " + hours + ":" + seconds )
  });
    res.status(200);


    res.send("so: " + hours + ":" + seconds)
});

// hello command
  app.get('/hello/:id', (req, res) => {
app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.status(200);

    res.send(`Hello,${id}`);
  });  
  app.get('/hello', (req, res) => {
});
app.get('/hello', (req, res) => {
    const id = req.params.id;
    res.status(200);

    res.send(`Hello`);
  });
});

//   search command
app.get('/search',(req,res) => {
app.get('/search', (req, res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
@@ -45,23 +60,45 @@ app.get('/search',(req,res) => {
        res.send(`ok, data: ${search}`);
    }
    else {



        res.status(500);
        res.send("you have to provide a search");
    }
});




// create commad
app.get('/movies/create', (req, res) => {
    res.send("create")

});  
//  read command
app.get('/movies/read', (req, res) => {
    res.status(200);
    res.send( movies )


});
// update command
app.get('/movies/update', (req, res) => {
    res.send("update")

});
// delete command
app.get('/movies/delete', (req, res) => {
    res.send("delete")

});











app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
    console.log(`Example app listening on port http://localhost:${port}`)
})