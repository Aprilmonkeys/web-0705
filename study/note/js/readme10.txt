回顾DOM第一天内容:
 * 概念
   * DOM的全称为 Document Object Model，译为 文档对象模型
     * 文档 - DOM将HTML页面解析为一个文档 -> document对象
     * 对象 - DOM将HTML中内容解析为一个对象
     * 模型 - 这些对象之间的关系(节点树结构)
   * DOM的分级
     * 0 级并不是W3C的标准
   * DOM的组成部分
     * DOM CORE
     * DOM HTML
     * DOM CSS
     * DOM XML
 * DOM树结构
   * 将HTML页面解析为一个树形结构
   * 节点 - 树结构中每个连接的地方(元素、属性和文本)
   * 常见的节点类型
     * 文档节点
     * 元素节点
     * 属性节点
     * 文本节点
   * nodeName、nodeType和nodeValue
     * 文档节点 - #document 9 null
     * 元素节点 - 元素名 1 null
     * 属性节点 - 属性名 2 属性值
     * 文本节点 - #text 3 文本内容
 * Document对象
   * document对象作为HTML页面的入口
   * DOM查询
     * 第一组
       * getElementById() - 通过id属性查找
       * getElementsByName() - 通过name属性查找
       * getElementsByTagName() - 通过标签名查找
       * getElementsByClassName() - 通过class属性查找
         * 是新增方法 - IE8及以下版本不支持
     * 第二组 - 通过CSS选择器
       * querySelector()
       * querySelectorAll()
   * 优缺点
     * 第一组的优点 - 速度快，性能好
     * 第一组的缺点 - 操作麻烦
     * 第二组的优点 - 操作方便
     * 第二组的缺点 - 速度慢，性能差
 * NodeList集合
   * 动态NodeList
   * 静态NodeList
今天的内容:
 * Document对象
   * 创建节点
     * 元素节点 - createElement(标签名)
     * 属性节点 - createAttribute(属性名)
       * 注意 - 创建属性节点时，只能定义属性名，而不能定义属性值
       * 完成的步骤
         1. 创建属性节点: var attr = createAttribute(attrName)
         2. 设置属性节点的值: attr.nodeValue = value;
         3. 添加属性节点: element.setAttributeNode(attr)
       * 在节点树结构中，属性节点并不是一个子节点
     * 文本节点 - createTextNode(文本内容)
   * 获取元素属性
     * documentElement属性 - 获取页面中<html>
     * head属性 - 获取页面中<head>
     * body属性 - 获取页面中<body>
     * forms属性
     * images属性
 * Node对象
   * 遍历节点
     * 父节点 - parentNode
       * 目标 -> 元素节点或文档节点
       * parentElement - 获取父元素节点
         * 如果目标节点为<html> - parentElement的值是 null
     * 空白节点问题
       * 描述 - 由于编写HTML代码时，输入换行符 -> 浏览器解析HTML页面为DOM结构时，自动添加空白节点
       * 空白节点 - 实际上就是一个空的文本节点
       * 注意 - IE8及以下版本的浏览器不存在空白节点问题
       * 导致问题 - 获取子节点及兄弟节点的属性不能正常使用
       * 解决方案
         * 第一个解决方案 - 弃用获取子节点和兄弟节点的属性
           * 利用 getElementsByTagName() 方法
         * 第二个解决方案
           function getChildren(elem){
                // TODO 用于存储真正的所有的子节点
			    var arr = [];
			    
			    // TODO 获取指定元素节点的所有子节点（包含空白节点）
                var children = elem.childNodes;
                // TODO 遍历所有的子节点
                for(var i=0;i<children.length;i++){
                    // TODO 空白节点一定是空的文本节点
                    var child = children[i];
                    if(child.nodeType == 1){
                        // TODO 表示是真正的子节点
						arr.push(child);
                    }
                }
                return arr;
			}
     * 子节点
       * childNodes - 所有子节点
       * firstChild - 第一个子节点
       * lastChild - 最后一个子节点
     * 兄弟节点
       * previousSibling - 上一个兄弟节点
       * nextSibling - 下一个兄弟节点
 * 插入节点
   * parent.appendChild(child)方法
     * 作用 - 将child节点插入到parent父节点的子节点列表的最后面
   * parent.insertBefore(newChild,currentChild)方法
     * 作用 - 将newChild插入到parent父节点下currentChild子节点的前面
   * 注意 - 没有insertAfter()方法
 * 删除节点 - parent.removeChild(child)
 * 替换节点 - parent.replaceChild(newChild,oldChild)
   * newChild - 创建新的，从页面获取
   * parent和oldChild之间必须是父子关系
 * 复制节点 - cloneNode(boolean)