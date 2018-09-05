var remove=require("../mongodb/remove");

const removeTest = function(app) {
    app.post('/remove', function(req, res){
        var dataSheet="person";
        var whereStr={
            by: "菜鸟教程"
        }
        remove(dataSheet,whereStr,function(result) {
            res.send(result)
        })
    });
    
}

module.exports=removeTest;