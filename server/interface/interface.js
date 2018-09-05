var fs = require("fs");
var path = require("path");
var config=require("./../config");
var excludeFile=config.excludeFile;
var root = path.join(__dirname);

// 引入当前文件夹下面的所有文件接口
const interface = function(app) {
    readDir(path.join(root))
    // parentPath: 如果是undefined则为第一层
    function readDir(path,parentPath){
        fs.readdir(path,function(err,menu){	
            if(!menu) return;
            menu.forEach(function(ele){	
                fs.stat(path+"/"+ele,function(err,info){
                    // 判断是否为文件夹
                    if(info.isDirectory()){
                        // 排除文件夹
                        if(excludeFile.folder.some(function(val) {
                            return ele===val;
                        })) return;
                        // 判断是否是第一层
                        if(!parentPath) {
                            readDir(path+"/"+ele,ele);
                        }else{
                            readDir(path+"/"+ele,parentPath+"/"+ele);
                        };
                    }else{
                        // 排除当前文件
                        if(excludeFile.file.some(function(val) {
                            return ele===val;
                        })) return;
                        console.log(ele);
                        if(!parentPath) {
                            var fileRequire=require("./"+ele);
                            // 如果模块是函数，则执行该函数
                            Object.prototype.toString.call(fileRequire)==="[object Function]" && fileRequire(app);
                        }else{
                            var fileRequire=require("./"+parentPath+"/"+ele);
                            Object.prototype.toString.call(fileRequire)==="[object Function]" && fileRequire(app);
                        };
                    }	
                })
            })			
        })
    }
}


module.exports=interface;