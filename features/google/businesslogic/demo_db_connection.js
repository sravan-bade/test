
var mysql = require('mysql');


    this.getPwd=function(callback,userName){
        var con = mysql.createConnection({
            host: "tet.net",
            user: "mycloud_user",
            password: "sdfd@$u48",
            database: "mycloud_db"
        });
        console.log("===>"+userName+"===>");

       con.connect(function(err) {
            if (err) throw err;
            con.query("select a_pass from admin_users where a_email = '"+userName+"'", function (err, result, fields) {
                if (err) throw err;
                con.end();
                 callback(result[0].a_pass);


            });
        });

    }



