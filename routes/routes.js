//PAUL'S CODE STARTS HERE


// PAUL'S CODE ENDS HERE

// CHAD'S CODE STARTS HERE
router.get('/warehouse', function(req, res) {
  console.log('hit my get warehouses route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{

      client.query('SELECT * FROM warehouse;', function(err, result) {
        done(); // close the connection db

        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});


//CHAD'S CODE ENDS HERE

// KRIS'S CODE STARTS HERE
router.get('/customers', function(req, res) {
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('SELECT first_name, last_name FROM customers;', function(err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// KRIS'S CODE ENDS HERE
