# 类型配置

## 默认所有可见的`@types`包会在编译过程中被包含出来,即默认情况下会自动包含支持全局使用的任何定义。node_modules/@types文件夹以及它们子文件夹下的所有包都是可见的：也就是说`./node_modules/@types/`,`../node_modules/@types/`和`../../node_modules/@types/`等等
* types -- 要包含的类型声明文件名列表,即可以导入的声明的全局变量:`types:["node"]`=>只能拿到全局的Global,但是拿不到其他已经引入的全局变量例如`jquery的$`
* typeRoots -- 要包含的类型声明文件路径列表，即可以导入的生命的全局变量路径。