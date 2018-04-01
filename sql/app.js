var { exec } = require('child_process');
var testArr, prdArr;

exec('grep "CREATE TABLE" db.test.sql', function(error, stdout, stderr){
    testArr = stdout.split('\n');
    exec('grep "CREATE TABLE" db.prd.sql', function(error, stdout, stderr){
        prdArr = stdout.split('\n');
        var res = [];
        prdArr.forEach(function(item, index) {
            if (testArr.indexOf(item) == -1) {
                res.push(item.split('`')[1]);
            }
        });
        console.log(res);
    });
});