const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'web_database'
});

connection.connect(err => {
  if (err) {
    console.error('Unable to connect to the database.');
    throw err;
  } else {
    console.log('Connected to the database.');
    do_select();
  }
});

function do_select() {
  let sql = 'select * from quotations where author = "Anonymous"';
  connection.query(
    sql,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
        connection.end();
      }
    }
  );
}

