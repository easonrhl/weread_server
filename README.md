## 前言

该项目是仿微信读书的后端接口，使用 express 和 mysql 搭建

## 项目运行

1. 通过 git 克隆到本地

   ```
   git clone https://github.com/easonrhl/weread_server.git
   ```

2. 解压 mysql 压缩包，并导入到 mysql

3. 在 app/service/db.config.js 进行 node 连接 mysql 的相关配置

   ```
   module.exports = {
     password: '123456',
     user: 'root',
     host: 'localhost',
     port: 3306,
     database: 'weread'
   }
   ```

4. 运行项目

   ```
   node app.js
   ```

   