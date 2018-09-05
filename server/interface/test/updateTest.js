var update=require("./../mongodb/update");

const updatetTest = function(app) {
    app.post('/update', function(req, res){
        var dataSheet="person";
        var updateMsg={
            whereStr: {
                "title":"MongoDB 教程"
            },
            updateStr: {
                $set: {"likes": req.body.val}
            }
        };
        update(dataSheet,updateMsg,function(result) {
            res.send(result)
        })
    });
    
}

module.exports=updatetTest;