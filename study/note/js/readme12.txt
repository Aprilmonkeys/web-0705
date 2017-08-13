回顾DOM第三天的内容:
 * Element对象
   * 概念
     * 无论是节点还是元素都是解析HTML页面的内容
   * 遍历元素
     * 子元素
       * children - 获取所有子元素的集合
       * firstElementChild - 获取第一个子元素
       * lastElementChild - 获取最后一个子元素
     * 兄弟元素
       * previousElementSibling - 获取上一个兄弟元素
       * nextElementSibling - 获取下一个兄弟元素
     * 注意
       * 通过 Element 对象的遍历元素方式没有空白节点的问题
       * IE8及以下版本的浏览器不支持
   * 属性操作
     * 获取属性 - getAttribute()
     * 设置属性 - setAttribute()
     * 删除属性 - removeAttribute()
     * 判断是否包含某个属性 - hasAttribute()
       * hasAttributes() - 判断是否包含属性
   * 文本操作
     * 通过 Node 对象方式
       1. 获取指定元素节点
       2. 文本节点一定是指定元素节点的子节点
       3. 通过 nodeValue 属性得到文本节点的文本内容
     * textContent 属性
       * textContent - 获取或设置指定的文本内容
         * IE8及以下版本浏览器不支持
       * innerText - 获取或设置指定的文本内容
         * IE8及以下版本浏览器支持
     * 浏览器的兼容解决方案
   * innerHTML属性
     * 操作指定标签的HTML代码
     * 问题 - 安全问题
 * CSS的操作
   * 内联样式操作 - style属性
     * element.style - 返回封装CSS样式属性的对象
     * element.getAttribute('style') - 返回样式定义的文本内容
   * 外联样式操作
     * document对象提供 styleSheets 属性 - 封装了有关外联样式的所有内容
     * 为 <link> 或 <style> 标签设置 id 属性
   * 获取有效样式
     * window.getComputedStyle()方法 - 返回当前指定标签的有效样式
       * IE8及以下版本浏览器不支持
     * currentStyle属性 - 返回当前指定标签的有效样式
       * IE8及以下版本浏览器支持
     * 浏览器的兼容解决方案
   * 其他样式属性
     * clientWidth和clientHeight
       clientHeight = height + padding-top + padding-bottom
     * offsetWidth和offsetHeight
       offsetHeight = height + padding-top + padding-bottom + border-top + border-bottom
   * 有关滚动的属性
     scrollHeight = scrollTop + clientHeight
     * scrollWidth和scrollHeight
     * scrollTop和scrollLeft
今天的内容:
 * 绑定事件
   * 通过 JavaScript 方式绑定
     1.获取页面中的指定标签
     2.指定标签.onclick = function(){
         3.编写处理函数
     }
   * 通过 事件属性 方式绑定
     <button onclick=""></button>
   * 事件监听器
 * 事件监听器
   * addEventListener(eventName, function, boolean)方法
     * eventName - 表示当前绑定的事件名称，例如"click"
     * function - 表示绑定事件对应的处理函数
     * boolean - 可选
   * addEventListener与onclick等方式的区别
     * addEventListener - 允许绑定相同事件多次
     * onclick方式 - 只允许绑定相同事件一次
   * 浏览器的兼容问题
     * addEventListener - 不支持IE8及以下
     * attachEvent - 支持IE8及以下
   * 浏览器的兼容解决
     function bind(elem, eventName, functionName){
         if(elem.addEventListener){
              elem.addEventListener(eventName, functionName);
         }else{
              elem.attachEvent('on' + eventName, function(){
                  functionName.call(elem);
              });
         }
	 }
 * 事件(Event)对象
   * 概念
     * 不需要创建事件对象，事件本身预定义的
     * 绑定事件并定义处理函数时，该处理函数具有参数 - 事件对象
       element.addEventListener('click',function(event){
           形参event -> 就是事件对象，名称其实可以自定义的
       });
   * 目标(target)元素
     * event.target属性 - 获取触发当前事件的元素
       * this - 获取绑定当前事件的元素
       * 注意 - IE8及以下版本不支持
     * event.srcElement属性 - 获取触发当前事件的元素
       * IE8及以下版本浏览器提供的
     * 浏览器兼容解决方案
       var target = event.target || event.srcElement;
   * 阻止默认行为
     * 默认行为 - HTML页面的标签原本具有的行为
       * 链接<a>元素 - 跳转功能
       * 表单<form>元素 - 配合submit按钮使用时，提交表单
     * 阻止默认行为
       * preventDefault()方法 - 除了IE8及以下版本都支持
       * returnValue属性 - IE8及以下版本支持
       * 如果 onclick 方式 - return false;
         * 不仅可以实现阻止默认行为，还可以实现阻止代码执行
   * 获取鼠标坐标
     * pageX和pageY - 获取鼠标相对于页面的坐标值
     * clientX和clientY - 获取鼠标相对于内容区的坐标值
     * screenX和screenY - 获取鼠标相对于屏幕的坐标值
   * 获取鼠标的相对坐标
     * offsetX和offsetY
 * 