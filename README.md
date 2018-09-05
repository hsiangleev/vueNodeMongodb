### vue+nodejs+mongodb搭建前后端分离外层骨架

#### 1. 项目运行

``` bash
# 依赖项安装
npm install

# vue项目启动(8080)
npm run dev

# nodejs项目启动(3000)
npm run server

# 打包生成
npm run build
```
#### 2. 文件说明
1. server文件夹为书写nodejs所在
    1.1 interface文件夹为接口文件夹，所有接口可以放在这，此文件夹下的所有接口文件默认全部引入，可在config.js里面添加忽略的文件
    1.2 mongodb文件夹为已经封装好的对mongodb数据库的增删改查
    1.3 test文件夹为使用mongdb接口做的测试
2. 其它文件夹为vue-cli生成文件，不做说明