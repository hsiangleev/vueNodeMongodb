var config=require("./../../config");
const selectTest=function(dataSheet,whereStr,callback){
	var MongoClient = require('mongodb').MongoClient;
	var DB_CONN_STR = config.mongodb.mongoServer+config.mongodb.database;
	 
	MongoClient.connect(DB_CONN_STR, {
		useNewUrlParser: true,
		auth: {
			user: config.mongodb.dbUserName,
			password: config.mongodb.dbUserPassword,
		},
		authSource: config.mongodb.authSource
	}, function(err, db) {
		if(err){
			console.log('Error:'+ err);
			callback(err);
			return;
		}  
		//连接到数据库,表  
		var collection = db.db(config.mongodb.database).collection(dataSheet);
		collection.find(whereStr).toArray(function(err, result) {
			if(err)
			{
				console.log('Error:'+ err);
                callback(err);
				return;
            }     
            callback({data: result, ok: 1});
			db.close();
		});
	});
}

module.exports=selectTest;