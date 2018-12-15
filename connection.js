
console.log("connection_test");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fj2l9hkfbqq6j26r",
    password: "pqs4c58l7or2wzmt",
    database: "cecsmzb44igisoh4",
    port: 3306
  });
  
module.exports = {
    start: function(){
        con.connect(function(err) {
            if (err) throw err;
               return "Connected!";
        });
    },
    run: function(query){
        con.query("Select * from receipe", function (err, result) {
            if (err) throw err;
            console.log("Result: " + result[0].name);
        });
    }
};
