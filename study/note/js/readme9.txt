概念:
 * DOM的全称和含义
   * 全称为 Document Object Model
   * 译为 文档对象模型
     * 文档 - DOM将HTML页面解析为一个文档 -> document对象
     * 对象 - DOM将HTML页面中内容解析为对应的对象
     * 模型 - DOM中对象之间的关系(节点树结构)
 * W3C对DOM的定义
 * DOM的级别
   * 0 级别 - 不是W3C的规范
 * DOM的组成部分
   * DOM核心
   * HTML DOM
   * CSS DOM
Document对象
 * document对象作为DOM解析HTML页面的入口
 * DOM查询
   * getElementById() - 通过元素的id属性查找
   * getElementsByName() - 通过元素的name属性查找
   * getElementsByTagName() - 通过元素的标签名查找
   * getElementsByClassName() - 通过元素的class属性查找
     * 是新增方法，IE 8及以下浏览器不支持
   * querySelector() - 利用CSS选择器的用法
   * querySelectorAll() - 利用CSS选择器的用法
 * NodeList类型
   * 动态NodeList
     * 含义 - 获取的集合随着页面的变化而变化
     * 特点 - 执行速度快，耗时短
     * 方法
       * getElementsByName()
       * getElementsByTagName()
       * getElementsByClassName()
   * 静态NodeList
     * 含义 - 获取的集合不会随着页面而变化
     * 特点 - 执行速度慢，耗时长
     * 方法 - querySelectorAll()
 * 