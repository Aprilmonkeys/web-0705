回顾DOM第二天内容:
 * Document对象
   * 创建节点
     * 元素节点 - createElement(标签名)
     * 属性节点 - createAttribute(属性名)
       * 问题 - 属性节点并不是一个子节点
       * 实现步骤
         1. 创建属性节点 - var attr = createAttribute(属性名);
         2. 设置属性的值 - attr.nodeValue = value;
         3. 将属性节点设置在元素节点 - element.setAttributeNode(attr);
     * 文本节点 - createTextNode(文本内容)
   * 一系列属性 - 获取HTML页面中的元素
     * documentElement属性 - 获取<html>
     * head属性 - 获取<head>
     * body属性 - 获取<body>
     * forms属性 - 获取HTML页面中所有的表单元素
     * images属性 - 获取HTML页面中所有的图片元素
 * Node对象
   * 遍历节点 - 通过DOM节点树结构中的关系进行查找
     * 父节点 - parentNode属性
       * parentNode与parentElement属性的区别
         * parentNode属性 - 获取父节点，既可以是元素节点也可以是文档节点
         * parentElement属性 - 获取父元素节点，只能是元素节点
     * 空白节点
       * 原因 - 编写HTML页面源代码时，输入的换行符
       * 描述 - 实际上是一个空的文本节点
       * 注意 - IE8及以下版本的浏览器不存在
     * 子节点
       * childNodes属性 - 获取所有子节点集合
         * 解决方案
           * 第一种方案 - 弃用原本的子节点属性
             改用 getElementsByTagName() 方法解决
           * 第二种方案
             * 使用原本的子节点属性
             * 人为进行判断，进行重构
       * firstChild属性 - 获取第一个子节点
       * lastChild属性 - 获取最后一个子节点
     * 兄弟节点
       * previousSibling - 获取上一个兄弟节点
       * nextSibling - 获取下一个兄弟节点
   * 插入节点
     * parent.appendChild(child) - 将节点插入到指定父节点的子节点列表的最后
     * parent.insertBefore(newChild,currentChild) - 将节点插入到指定父节点的指定子节点的前面
     * 没有insertAfter()方法 - 可以自定义
   * 删除节点 - parent.removeChild(child)
   * 替换节点 - parent.replaceChild(newChild,oldChild)
   * 复制节点 - cloneNode(boolean)
     * boolean类型的参数 - 是否复制后代节点
       * true - 表示复制后代节点
       * false - 表示不复制后代节点
今天的内容:
 * Element对象
   * 概念
     * 使用 节点 概念解析HTML
       * 被解析为元素节点、属性节点和文本节点
       * 这三者之间是相互独立的（文本节点与元素节点是父与子的关系）
     * 使用 元素 概念解析HTML
       * 被解析为元素，属性和文本是元素的一部分
     * 元素节点和元素都代表HTML页面中的标签
       * DOM查询的六个方法返回的既是元素节点(Node对象)，又是元素(Element对象)
   * 遍历元素
     * 注意 - 所有获取子元素和兄弟元素的属性，在 IE8及以下版本的浏览器不支持
       * 人为提供浏览器的兼容解决方案 - 让IE及以下版本的浏览器支持这些属性
     * 子元素
       * children属性 - 获取所有子元素的集合
       * firstElementChild属性 - 获取第一个子元素
       * lastElementChild属性 - 获取最后一个子元素
     * 兄弟元素
       * previousElementSibling属性 - 获取上一个兄弟元素
       * nextElementSibling属性 - 获取下一个兄弟元素
   * 属性操作
     * 获取属性 - getAttirbute(属性名)
     * 设置属性 - setAttribute(属性名,属性值)
     * 删除属性 - removeAttribute(属性名)
     * 判断是否含有某个属性 - hasAttribute(属性名)
       hasAttribute()和hasAttributes()方法的区别
       * hasAttribute()方法
         * ELement对象的方法
         * 作用 - 判断指定标签是否含有指定属性
       * hasAttributes()方法
         * Node对象的方法
         * 作用 - 判断指定标签是否包含属性
   * 文本操作
     * 通过 Node 对象的节点方式进行操作
       * 文本节点一定是元素节点的子节点 - 获取指定的文本节点
       * 通过 nodeValue 属性可以获取或设置文本节点的文本内容
     * textContent属性 - 获取或设置文本内容
       * 获取 - 获取指定元素中所有的文本内容(包含所有后代节点的文本内容)
     * innerText属性 - IE8及以下版本浏览器专有
       * IE9以上及其他浏览器新版本都兼容
     * 提供一个浏览器兼容解决方案
       function getText(elem){
            var text;
            if(elem.textContent){
                // TODO 当前浏览器支持 textContent
                text = elem.textContent;
            }else{
                // TODO 当前浏览器不支持 textContent，换成 innerText
                text = elem.innerText;
            }
            return text;
		}
   * innerHTML属性
     * 作用 - 获取或设置指定标签的HTML代码
     * 注意 - 使用 innerHTML 属性的安全性很低(可能接收一些恶意代码)
     * 解决 - 使用 innerHTML 属性时，对应的值不能是用户输入内容
 * 样式操作
   * 操作内联样式 - 操作标签的style属性
     * 设置内联样式
       * element.style = 样式内容
         * element.style.classAttr = value
       * 通过 setAttribute('style',样式内容) 方法
     * 获取内联样式
       * element.style - 返回 CSSStyleDeclaration 对象
         * 利用 CSSStyleDeclaration 对象的属性方式，设置内联样式属性
       *  getAttribute('style') - 返回只是包含了样式属性的字符串
   * 获取有效的样式
     * window.getComputedStyle(element, null)
       * 作用 - 获取页面指定标签的当前有效样式
       * 参数
         * element - 指定的标签
         * 一般情况传递 null
       * 返回值 - CSSStyleDeclaration 对象
       * 注意 - IE8及以下版本浏览器不支持
     * IE浏览器提供 currentStyle 属性
       * 作用 - getComputedStyle() 方法的作用相同
       * 返回值 - currentStyle 对象，类似于 CSSStyleDeclaration 对象
     * 浏览器的兼容解决方案
       function getStyle(elem){
          var result;
          // TODO 判断 getComputedStyle() 方法是否存在
          if(window.getComputedStyle){
              // TODO 当前浏览器支持 getComputedStyle() 方法
              result = window.getComputedStyle(elem,null);
          }else{
              // TODO 当前浏览器不支持 getComputedStyle() 方法
              result = elem.currentStyle;
          }
          return result;
	   }
   * 