# 严格模式配置


* noImplictAny -- 在表达式和声明上有隐含的any类型时报错。当编译器无法根据变量用途判断出变量类型时，会把变量类型默认为any，常见为没有声明类型的函数参数上 ---->类型声明强制工具
* noImplictThis -- 当this表达式的值为any类型时,生成一个错误。即当将一个any类型或者隐士any类型的值赋给this表达式即会报错。
* alwaysStrict --  以严格模式解析并为每个源文件生成"use strict"语句
<!-- * noImplicitUseStrict -- 模块输出不包含“use strict"指令 但是不能与alwaysStrict共用 -->
* strictNullChecks -- 严格的null检查模式，null和undefined值不包含任何类型里，只能用它们自己和any类型赋值(有个例外，undefined可以赋值到void),即对于变量来说只能赋予它本身类型的值
* strictPropertyInitialization -- 确保类的非undefined属性已经在构造函数里初始化,依赖于strictNullChecks
* strictFunctionTypes -- 禁用函数参数双向协变检查 -- 详细在类型声明中介绍
* strict -- 启用所有严格类型检查，即启用上述所有严格类型检查



### 参考文档

[non-nullable处理](https://juejin.im/post/5dc9f3f5e51d455fc74a28fa)
[双向协变处理](https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html#%E4%B8%80%E4%B8%AA%E6%9C%89%E8%B6%A3%E7%9A%84%E9%97%AE%E9%A2%98)
