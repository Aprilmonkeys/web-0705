回顾JavaScript的第一天内容:
 * 概念
   * JavaScript是一个脚本语言 - 编写后，可以直接运行(缺失编译的环节)
   * JavaScript发展历史
     * 95年网景公司推出 LiveScript(JavaScript的前身)
       * LiveScript与JavaScript的关系
     * 网景公司联合SUN公司推出 JavaScript
       * Java与JavaScript的关系
     * 微软公司推出 JScript
       * JScript与JavaScript的关系
     * 网景公司联合SUN公司、微软和欧洲计算机制造商协会推出 ECMAScript
       * ECMAScript与JavaScript的关系
   * JavaScript的组成部分
     * ECMAScript - 脚本语言的标准(语法内容)
     * DOM - 文档对象模型
     * BOM - 浏览器对象模型
 * 如何使用JavaScript
   * 可以直接在HTML页面编写JS代码
     * 通过 <script> 元素
     * 注意 - <script> 元素应该在 <head> 中
       * 还可以出现在 <body> 元素中
   * 创建JS文件，在HTML页面引入
     <script src="JS文件的路径"></script>
     * type属性 - 设置当前引入文件的类型(text/javascript)
 * 基础语法
   * JavaScript区分大小写
     * 变量名全大写、全小写或大小写混合代表着不同的变量
   * 代码规范的内容
     * 尽量具有空行或缩进
     * 每个语句结束时，添加分号 - 表示结束
   * 注释
     * 单行注释 - //
     * 多行注释 - /**/
   * 关键字和保留字
     * 原则 - 都不能用来定义为变量名
     * 关键字 - 在JavaScript代码中具有特殊的含义
     * 保留字 - 还没有启用的关键字
 * 变量与常量
   * 变量
     * 概念 - 变量用于表示某个具体的数据内容
     * 简单理解 - 变量名就相当于为某个数据贴上签
     * 作用 - 允许重复使用某个具体的数据内容
     * 用法
       * 定义变量
         * 声明变量，但不初始化(赋值) - 默认值为 undefined
         * 声明变量，初始化(赋值)
         * 方式
           * 单行可以定义多个变量 - 变量定义之间使用逗号分隔
           * 多行可以定义多个变量
       * 调用变量
         * 调用变量，实际上使用该变量对应的数据内容
     * 特殊情况
       * 正常的使用方式 - 先定义变量，再调用变量
       * 先调用变量，再定义变量
         console.log(test);
         var test = 100;
         上述代码等价于
         var test;
         console.log(test);// undefined
         test = 100;
       * 重复声明 - 对应的数据内容会被覆盖
       * 重复赋值 - 对应的数据内容会被覆盖
   * 常量
     * 概念 - 就是一个只读的变量(一旦赋值后，值不能被改变)
     * 注意
       * 无论重复声明，还是重复赋值 - 常量都会报错
 * 数据类型
   * 概念 - 表示JavaScript中数据的分类
   * 数据类型的分类
     * 原始值(原始类型)
       * number类型
         * 包含了整数和小数
         * 注意 - 小数的计算可能出现误差
       * string类型
         * 定义字符串内容时，需要使用单引号或双引号
       * boolean类型
         * true/false 这两个值
       * undefined类型
         * 只存在一个值 - undefined
         * 得到undefined
           * 变量只定义，但不赋值
           * 变量直接赋值为 undefined
       * null
         * 作用 - 资源释放
       * typeof运算符 - 判断变量的原始值
     * 引用类型 - 实际开发中，比较少用
       * Number类型
         new Number()
       * String
         new String()
       * Boolean
         new Boolean()
       * instanceof运算符 - 判断变量的引用类型
今天的内容:
 * 数据类型
   * boolean类型
     非布尔值转换成布尔类型
     * number类型
       * 0,NaN -> false
       * 非 0 -> true
     * string类型
       * 空字符串 -> false
       * 非空字符串 -> true
     * undefined -> false
     * null -> false
 * 类型转换
   * 隐式类型转换
     * 转换为字符串 - number/boolean + ''
     * 转换为数字 - + string/boolean
     * 转换为布尔 - !!number/string
   * 显式类型转换 - JavaScript提供明确的方法
     * 构造函数方式
       * Number() - 转换为数字
       * String() - 转换为字符串
       * Boolean() - 转换为布尔
     * 转换方法
       * toString() - 转换为字符串
       * parseInt() - 转换为数字的整数
       * parseFloat() - 转换为数字的小数
 * 运算符
   * 算数运算符
     * 基本计算 - +、-、*和/
     * 求余运算符（%）
   * 自增或自减运算符
     * 自增运算符(++) - 每次增加 1
     * 自减运算符(--) - 每次减少 1
   * 比较运算符 - 结果都是boolean类型
     * == - 判断是否相等(相等的结果为true)
     * != - 判断是否不等(不等的结果为true)
     * >
     * >=
     * <
     * <=
   * 全等与不全等 - 判断值和类型
     * 全等 - ===
     * 不全等 - !==
   * NaN值
     * NaN == NaN - 返回的结果为false，表示不等
     * isNaN()方法
       * 含义 - 判断指定变量是否不是一个数字
   * 逻辑运算符 - boolean类型
     * 逻辑与运算符 - &&
     * 逻辑或运算符 - || - SHIFT + |\
     * 逻辑非运算符 - !
     * 逻辑短路原则
       * 逻辑与运算符
         * 逻辑与运算符前面为false，结果都将返回逻辑与运算符前面的值
         * 逻辑与运算符前面为true，结果都将返回逻辑与运算符后面的值
       * 逻辑或运算符
         * 逻辑或运算符前面为false，结果都将返回逻辑或运算符后面的值
         * 逻辑或运算符前面为true，结果都将返回逻辑或运算符前面的值
   * 赋值运算符
     * = - 赋值运算符
     * 简写形式
       * A += B - A = A + B
       * A -= B - A = A - B
       * A *= B - A = A * B
       * A /= B - A = A / B
       * A %= B - A = A % B
       * 左边的效率 高于 右边的效果
   * 字符串连接运算符(+)
     * 将两个字符串进行拼接 - 拼串
     * 注意 - (+) 1.number是加法计算;2.string是连接计算
   * number类型扩展
     无穷 - 正无穷和负无穷
     * 正无穷 + 负无穷 = 0 - 错误
     * 正无穷 - 正无穷 = 0 - 错误
     * 正无穷 + 正无穷 = 正无穷