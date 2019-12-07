# 输出路径配置

* declaration 生成相应的.d.ts文件
* declarationDir 生成声明文件的路径,在该路径下会生成与编译目录相同的声明文件目录
* rootDir 告诉编译器，此目录下的文件需要经过编译即指定编译哪个目录,如果设置了该选项同时在外部有ts文件将会报错
* include 指明编译需要包含的文件
* exclude 指明编译需要排除的文件
* allowJS 可以编译js文件
<!-- * rootDirs 根文件夹列表，其组合内容表示运行时组合工程结构的内容 -->
<!-- * sourceRoots 指定调试器应该找到的ts文件路径 -->
<!-- * mapRoot 为调试器指定sourcemap文件的路径(不是使用生成时的路径)。当 .map文件是在运行时指定的，并不同于 js文件的地址时使用这个标记。指定的路径会嵌入到 sourceMap里告诉调试器到哪里去找它们。 -->


## 注意

* 编译器默认包含当前目录和子目录下所有的TypeScript文件，排除exclude里的指定文件。当设置rootDir时即去识别rootDir下的ts文件.即编译器识别的文件实际上是 rootDir + include - exclude.
* 编译器默认识别的文件类型:.ts、.tsx、.d.ts;当allowJS为true时识别:.js、.jsx
* include和exclude属性指定一个文件glob匹配模式列表.支持的glob通配符有：
    * * 匹配0或多个字符(不包括目录分隔符)
    * ? 匹配一个任意字符(不包括目录分隔符)
    * **/ 递归匹配任意子目录
* 