回顾DOM第五天内容:
 * DOM的事件
   * 事件周期
     * 捕获阶段 - 从外向里的传播
     * 触发阶段
     * 冒泡阶段 - 从里向外的传播
     * addEventListener()方法的第三个参数决定
       * true - 捕获阶段
       * false - 默认值，冒泡阶段
   * 阻止冒泡阶段
     * IE 9 及之后版本和其他浏览器: stopPropagation() 方法
     * IE 8 及之前版本的浏览器: cancelBubble 属性
   * 事件委托
     * 注意 - 并不是一个技术内容，而是场景
     * 场景
       * 为新增的按钮绑定事件 - 1.页面载入绑定事件；2.新增按钮时重新绑定
       * 找到所有按钮的共同祖先节点 - 为这个祖先节点绑定事件
 * BOM
   * 注意
     * 没有标准的，其实都是浏览器提供的
     * BOM只存在于浏览器环境中
   * window对象
     * window对象代表的就是浏览器窗口
     * window对象浏览器环境最顶层的对象
     * 其他BOM对象和document对象都是window对象的属性
     * 属性
       * self属性 - 只读的window对象
       * 定义的全局变量和全局函数 - 都是window对象的属性和方法
     * 方法
       * 用于测试
         * alert() - 提示框
         * confirm() - 确认框
       * 打开和关闭窗口
         * open() - 打开新窗口
         * close() - 关闭当前窗口
       * 有关滚动
         * scrollBy()
         * scrollTo()
   * navigator对象
     * 通过该对象得到有关浏览器的信息
     * userAgent属性
       * 获取用户的浏览器产品
       * 获取用户的操作系统
   * history对象
     * 存储用户曾经访问过的地址
     * 属性 - length
     * 方法
       * back()
       * forward()
       * go()
   * location对象
     * 存储当前浏览器窗口的地址栏信息
今天的内容:
 * setTimeout()方法
   * 作用 - 设定时间(单位为毫秒)，规定在这个时间后执行指定代码
   * clearTimeout() - 取消 setTimeout() 方法设定的时间
   * 用法
     * setTimeout(code,millisec)
       * code - 表示指定时间后所执行的JavaScript代码段(语句块)
         * 实际上，code参数是一个回调函数
       * millisec - 表示设定的时间，单位为毫秒
       * 返回值 - 返回一个标识(标识当前setTimeout()方法的设定)
     * clearTimeout(id_of_settimeout)
       * id_of_settimeout - 就是 setTimeout() 方法的返回值
 * setInterval()方法
   * 作用 - 设定时间(单位为毫秒)，按照指定时间反复执行指定代码
   * clearInterval() - 取消 setInterval() 方法的机制
   * 用法
     * setInterval(code,millisec)
       * code - 表示指定时间为周期执行的JavaScript代码段(语句块)
         * 实际上，code参数是一个回调函数
       * millisec - 表示设定的时间，单位为毫秒
       * 返回值 - 返回一个标识(标识当前setInterval()方法的设定)
     * clearInterval(id_of_setinterval)
       * id_of_setinterval - 就是 setInterval() 方法的返回值