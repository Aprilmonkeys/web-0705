CSS:
 * 定位(position)
   * static - 默认值，静态定位。表示没有开启定位
   * absolute - 绝对定位，脱离文档流
     * 如果父级元素没有开启定位的话 - 相对于HTML页面的定位
     * 如果父级元素设置为绝对定位的话 - 相对于父级元素的定位
   * fixed - 固定定位，脱离文档流
     * 相对于HTML页面的定位
   * relative - 相对定位，没有脱离文档流
     * 相对定位后的位置，是相对于当前元素的原本位置进行计算
     * 行内元素设置为相对定位时 - 依旧是内联元素的效果
JavaScript:
 * 概念
   * JavaScript是脚本语言
     * 编写之后，可以直接运行(编译的过程)
   * JavaScript发展
     * 95年网景公司推出 LiveScript 脚本语言(基本上算是JavaScript的前身)
     * 网景公司联合 SUN 公司完善 LiveScript，更名为 JavaScript
       * JavaScript与Java语言的关系 - JavaScript是Java语言的脚本语言(错误的)
       * JavaScript的语法内容参考了Java语言
     * 微软公司推出 IE 3.0 时，发布了 JavaScript 的克隆版本 - JScript
       * JavaScript和JScript - 浏览器的兼容问题
     * 网景公司联合 SUN 公司、微软公司、欧洲计算机制造商协会
       * 共同推出一版统一的版本 - ECMAScript
       * ECMAScript后期演变成脚本语言的标准
   * 国内浏览器的情况
     * QQ浏览器 - 内核版本目前是V5
     * 百度浏览器 - 内核版本目前是X5
     * 遨游浏览器 - 自主内核
   * 浏览器的内核
     * IE - 6/7/8(8版本之前) 9/10/11 Edge
     * 其他浏览器 - webkit(Apple)
   * JavaScript组成部分
     * ECMAScript - 语言的标准(定义语法)
       * ECMAScript自从 2015 年推出 ES 6 之后
       * 今后每年推出一个新版本
     * DOM - Document Object Model(文档对象模型)
     * BOM - Browser Object Model(浏览器对象模型)
 * 如何使用JavaScript
   通过 <script> 元素编写 JavaScript 语言
   * 定义<script>元素，直接编写
   * 通过<script>元素，引入外部JS文件
 * 基础语法
   * 区分大小写
     atguigu、Atguigu和ATGUIGU - 代表三个内容
   * 
 * 
 * 	
 * 变量与常量
   * 变量
     * 作用 - 表示某个具体的数据内容
     * 特点 - 允许可以反复的使用具体的数据
     * 用法
       * 定义变量 - 为某个的数据定义一个变量名称
       * 调用变量 - 通过具体的变量名称使用某个数据
   * 常量
     * 作用 - 表示某个具体的数据内容
     * 注意 - 就是一个只读(不能修改)的变量
     * 定义常量
       const 常量名 = 数据内容;
 * 数据类型
   * 概念 - 所谓数据类型，表示当前存储的数据的分类
   * 数据类型的分类(以当前笔记为准)
     * 原始值(原始类型) - typeof运算符
       * number(数字) - 表示数字
         * NaN - 特殊值，全称为 Not a Number，译为不是一个数字
       * string(字符串) - 表示文本内容
       * boolean(布尔) - true/false
       * undefined
       * null
     * 引用类型 - instanceof运算符
       * Number
       * String
       * Boolean
 * 