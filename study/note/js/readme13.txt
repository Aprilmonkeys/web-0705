回顾DOM第四天内容:
 * 事件的概念
   * 什么是事件 - 用户与页面交互的瞬间（用户操作页面）
   * 事件的作用 - 连接用户与页面之间的关系
 * 绑定事件的方式
   * 事件属性 - 属于HTML的内容
     * 并没有将HTML的结构与行为有效分离
   * 通用方式
     1.获取HTML页面中的元素
     2.绑定事件
       element.onclick = function(){
           3.编写事件的处理函数
       }
   * 事件监听器
     * addEventListener(eventName,functionName,boolean)
       * eventName - 表示事件名称，例如"click"
       * functionName - 表示事件的处理函数
       * boolean - 默认
       * IE8及以下不支持
     * attachEvent(eventName,functionName)
       * eventName - 表示事件名称，例如"onclick"
       * functionName - 表示事件的处理函数  
     * 浏览器兼容解决方案
       function bind(elem,eventName,functionName){
           if(elem.addEventListener){
               elem.addEventListener(eventName,functionName);
           }else{
               elem.attachEvent('on'+eventName,function(){
                   functionName.call(elem);
               });
           }
       }
 * 事件对象
   * 基本内容
     * 并不需要创建，直接使用 - 封装在事件的处理函数中(形参)
   * 获取目标元素
     * event.target - 获取触发事件的元素
       * this - 获取绑定事件的元素
     * event.srcElement - 获取触发事件的元素
   * 阻止默认行为
     * event.preventDefault()
     * event.returnValue = false;
 * 获取鼠标的坐标值
   * pageX和pageY - 鼠标相对于页面的坐标值(可能具有滚动条)
   * clientX和clientY - 鼠标相对于可视窗口的坐标值
   * screenX和screenY - 鼠标相对于屏幕的坐标值
   * offsetX和offsetY - 鼠标的相对坐标值
今天的内容:
 * 事件周期 - 事件传播的原理
   * 捕获阶段 - 由外向里的传播
   * 触发阶段 - 触发指定元素的事件 - 我们自己理解
   * 冒泡阶段 - 由里向外的传播
   * 注意
     * 最终得到的结论 - 在实际开发中，使用的是冒泡阶段
       addEventListener(eventName,functionName,false)
 * 阻止事件的冒泡
   * event.stopPropagation()方法 - IE8及以下不支持
   * cancelBubble属性 - IE8及以下支持
 * 
扩展内容:
 * 创建技术博客
   * 原因 - 公司招聘，有技术博客或GitHub帐号者优先
   * 创建
     * 使用第三方的网站
       * 博客园
       * CSDN
       * segmentFault - 开发者问答社区
     * 建站
       * 购买个域名 - 阿里云(注册名字的拼音)
       * 静态博客 - Hexo(GitHub或Coding)
 * BOM
   * 概念
     * BOM是没有标准的，主要是由浏览器提供
     * BOM包含window、navigator、screen、history和location对象
   * window对象
     * 基本内容
       * window对象是浏览器环境中最顶层的对象
       * 其他的BOM对象都是以window对象的属性形式出现的
       * 调用window对象的属性和方法时，可省略"window."
   * Navigator对象
     * 浏览器内核
       * Chrome/Safari - webkit
       * IE - Trident
       * 火狐 - Gecko
   * 
 * 相关网站
   * Mozilla(MDN) - 火狐浏览器提供的开发者社区
     * 提供了一整套完整的HTML、CSS和JavaScript的教程
   * 微软提供了类似的开发者社区
     * MSDN - 提供了有关IE私有的对象