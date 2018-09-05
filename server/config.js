const config = {
    dev: {
        port: 3000,         // nodejs端口号
    },
    // build之后的文件（静态文件）
    file: {
        staticFile: __dirname + '/../dist/',            // 静态文件夹托管地址
        path: __dirname + '/../dist/index.html'         // 初始页地址
    },
    mongodb: {
        mongoServer: "mongodb://127.0.0.1:27017/",
        database: 'mytest',                             // 数据库名
        dbUserName: "hsianglee",
        dbUserPassword: "lx123321",
        authSource: "admin",                            // 当前用户管理的数据库
    },
    // 默认interface接口文件夹下的文件自动引入，excludeFile为排除的文件(interface.js必须排除，否则无限循环)
    excludeFile: {
        folder: ["mongodb"],
        file: ["interface.js"]
    }
}


module.exports=config;