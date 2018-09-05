var select=require("./../mongodb/select");

const selectTest = function(app) {
    app.post('/select', function(req, res){
        var dataSheet="person";
        var whereStr={
            "c" : "ccc"
        };
        select(dataSheet,whereStr,function(result) {
            res.send(result)
        })
    });
}

module.exports=selectTest;