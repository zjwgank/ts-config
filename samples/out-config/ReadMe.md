# 编译输出配置

* 注意：当同时存在outDir和outFile时，编译后输出的以outFile为准
* 注意：只有module为System或者AMD时，才能够实用outFile
* module配置：
   
     * None -- 当module为none时，不能够编译模块
     * CommonJS -- [CommonJS规范](https://www.jianshu.com/p/dd08f4095a49)
     * AMD -- [AMD规范，异步加载机制](https://www.cnblogs.com/thinkingthigh/p/7642733.html)
     * System -- [SystemJS,通用模块加载](https://blog.csdn.net/weixin_39331259/article/details/92802638)
     * UMD -- [通用模块定义规范](https://www.jianshu.com/p/6e61bf5c4d23)
     * ES6(ES2015) -- [ES6模块化](http://es6.ruanyifeng.com/#docs/module)
 * target配置即为编译输出后的ES版本

## 参考文献
  
  * [UMD](https://www.jianshu.com/p/6e61bf5c4d23)
  * [前端模块化规范](https://www.jianshu.com/p/00ee4e45c0cd)