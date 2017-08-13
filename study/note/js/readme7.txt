回顾JavaScript第六天内容:
 * JSON格式
   * 概念
     * 全称为 JavaScript Object Notation，译为 JavaScript 对象表示法
     * 定义 - 是一个轻量级的数据交换格式
     * 特点
       * 易于程序员编写和查看
       * 易于计算机解析和生成
   * 数据结构
     * Object对象
       { key : value, key : value,... }
     * Array数组
       [value,value,value,...]
     * 允许嵌套
   * 支持独立的JSON文件
     * JSON文件的扩展名为 ".json"
     * 字符串必须使用双引号
   * JavaScript的JSON - JSON对象
     * 将JSON对象(对象和数组)转换为JSON字符串
       * JSON.stringify(jsonObject)
     * 将JSON字符串转换为JSON对象(对象和数组)
       * JSON.parse(jsonString)
 * Function对象
   * 概念
     * JavaScript 中所有的函数都是 Function 对象
   * 定义函数
     var 函数名 = new Function(参数,函数体);
     * 在实际开发中，函数体的定义不容易编写
 * 引用类型
   * 概念
     * 数据类型
       * Number - 通过创建对象方式定义数字
       * String - 通过创建对象方式定义字符串
       * Boolean - 通过创建对象方式定义布尔值
     * 定义构造函数
       * 作用 - 为了创建对象(工厂方式)
       * 语法结构
         function 构造函数名称(形参){
             this.属性名 = 属性值;
             this.方法名 = function(){}
         }
         var 对象名 = new 构造函数名称();
   * Date类型 - 获取或设置日期和时间
     * 得到当前的时间对象 - new Date()
     * 获取日期
       * getFullYear() - 获取年份
       * getMonth() - 获取月份
       * getDate() - 获取日期
     * 获取时间
     * getTime()方法
       * 作用 - 获取距离 1970年1月1日的毫秒数
       * 用法 - 用于计算时间或日期
   * Math类型 - 用于数学计算
     * 注意 - 不需要创建对象
     * 属性
       * PI - 获取圆周率
     * 方法
       * random() - 生成 0~1 之间的随机数
   * 全局对象
     * 注意 - 不能直接使用，但是存在
     * 用法 - 全局对象的属性或方法可以直接调用
今天的内容:
 * 数组
   * 概念
     * 定义 - 值的有序集合(列表)
       * 值 - 指的是数据(注意数据类型)
       * 有序 - 值之间是排序的顺序
       * 集合(列表) - 数组可以存储多个数据内容
   * 定义数组
     * 字面量方式
       var 数组名称 = [ value,value,... ]
     * 构造函数方式
       var 数组名称 = new Array(value,value,...)
       var 数组名称 = new Array(length)
   * 数组的分类
     * 索引数组 - 默认创建的数组
       * 索引值是由数字组成(从 0 开始的)
     * 关联数组 - 类似于JavaScript的对象
       * 索引值是由字符串组成
       * 注意 - ECMAScript官方规范中并没有提供关联数组的概念
   * 操作数组的元素
     * 获取数组中的元素 - 数组名称[索引值]
     * 修改数组中的元素 - 数组名称[索引值] = 新的值
     * 删除数组中的元素 - delete 数组名称[索引值]
       * 注意 - 只是删除对应位置上的值，位置保留 - undefined
   * 遍历数组
     * for语句
     * for..in语句
 * 二维数组
   * 概念 - 数组的嵌套结构
 * 数组操作
   * 进出栈操作
     * 操作数组的结束
       * push() - 向数组的最后添加元素
       * pop() - 删除数组中最后一个元素
     * 操作数组的开始
       * shfit() - 删除数组中第一个元素
       * unshfit() - 向数组的开始添加元素
   * 排序方法
     * reverse() - 颠倒数组中元素的顺序
     * sort() - 对数组的元素进行排序
       * 注意 - 默认排序并不是由小到大的排序
   * 