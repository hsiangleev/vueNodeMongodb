var insert=require("./../mongodb/insert");

const insertTest = function(app) {
    app.post('/insert', function(req, res){
        var dataSheet="person";
        var insertData=[{c:"ccc"},{d:"ddd"}];
        insert(dataSheet,insertData,function(result) {
            res.send(result)
        })
    });
    
}

module.exports=insertTest;