# 模块引用配置

* baseUrl: 解析非相对模块名的基准目录
* paths: 模块名到基于baseUrl的路径映射列表
    设置baseUrl来告诉编译器去哪里查找模块。所有非相对模块导入都会被当作相对于baseUrl。paths进行路径映射时包括简单的映射和复杂的映射，即通过配置映射列表进行实现。
    ```
    简单的映射                      复杂的映射
    baseUrl:'.',                   baseUrl:'.'
    paths:{                        paths:{
      config:['config'],              config:['config','config/index']
    }                              }
    ```
    当查找模块时，去对应相对模块查找即`./config`或者`./config/index`下查找。

## 注意

  * ts-node运行是注意，module配置为CommonJS，否则会因为import模块导致错误
  * ts-node运行时，配置paths需要引入tsconfig-paths,`import 'tsconfig-paths/register'`,[tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)
