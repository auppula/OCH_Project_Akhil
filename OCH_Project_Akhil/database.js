const mysql = require('mysql');

const con= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Momdad1993!@',
 database: 'ochproject'
 });

//  con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE competitions(competition_id varchar(300) ,competition_Type varchar(300),competition_theme varchar(300),Competition_Start varchar(300),competition_end varchar(300),audience_rating_date varchar(300),judge_rating_date varchar(300),winners_declaration_date varchar(300))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });


module.exports = con;