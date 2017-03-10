var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
    database: 'phi-group-warehouse',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

//PAUL'S CODE STARTS HERE

// get all tasks
router.get('/orders', function(req, res) {
    console.log('hit my orders route');
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            client.query('SELECT orders.order_date, products.description, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.address_type, customers.first_name, customers.last_name FROM customers JOIN addresses ON addresses.customer_id=customers.id JOIN orders ON addresses.id=orders.address_id JOIN line_items ON orders.id = line_items.order_id JOIN products ON products.id=line_items.product_id;',
                function(err, result) {
                    done();
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result.rows);
                        res.status(200).send(result.rows);
                    }
                }); // end of .query
        }
    });
});




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

module.exports = router;
