回顾CSS的第一天内容:
 * 概念
   * 概念 - 全称为层叠样式表
   * 作用 - 将HTML的结构与样式进行分离
     * 结构 - HTML标签 - HTML
     * 样式 - 显示的样子 - CSS
 * 如何使用CSS
   * 内联样式
     * HTML元素的通用 style 属性设置 CSS 的样式属性
     * 问题
       * HTML的结构与样式并没有有效分离
       * 这种使用的 CSS 样式只针对当前元素有效
   * 外联样式
     * 通过 <style> 元素定义 CSS 样式
       * 该元素定义在 <head> 元素中
       * 属性
         * type - text/css
     * 通过 <link> 元素引入外部的 CSS 文件
       * CSS 文件的扩展名为 ".css"
       * <link> 元素的属性
         * rel="stylesheet" - 表示当前引入的文件类型
         * href - 设置当前引入 CSS 文件的路径
 * CSS 的语法
   选择器 {
       样式属性 : 属性值 ; - 声明
       * 样式属性 - CSS 预定义的
       * 属性值 - 不同的样式属性具有不同的值
   }
 * 块级元素与行内元素
   * 块级元素 - 独占一行(占满页面的整个宽度)
     * 特点 - 垂直方向排列(充当表格中的行)
     * <div> 元素 - 无语义化
   * 行内元素 - 不独占一行(宽度取决于文本内容)
     * 特点 - 水平方向排列(充当表格中的单元格)
     * 注意 - 占满一行时，自动换行
     * <span> 元素
 * CSS 的选择器
   * 常见的选择器
     * ID选择器 - 通过HTML元素的 id 属性值定位元素
       * 定位元素只能唯一的一个
     * 类选择器 - 通过HTML元素的 class 属性值定位元素
     * 元素选择器 - 通过HTML元素的标签名定位元素
     * 属性选择器 - 通过HTML元素的属性定位元素
   * 关系选择器
     * 后代选择器
       目标元素 后代元素
     * 子元素选择器
       目标元素>子元素
     * 相邻兄弟选择器
       目标元素+下一个兄弟元素
   * 组合选择器
     * 多个选择器并列使用，中间没有任何分隔 - 交集
     * 多个选择器并列使用，中间使用逗号分隔 - 并集
 * 颜色的设置方式
   * 使用英文单词
     * 问题 - 可能在不同浏览器中存在色差
     * 注意 - 在实际开发中，不建议使用
   * 三原色 - 红色、绿色、蓝色
     * 八进制 - rgb(红色,绿色,蓝色)
       * 每个颜色的范围 - 0 ~ 255
     * 十六进制 - #红色绿色蓝色
       * 每个颜色的范围 - 00 ~ FF
 
今天的内容:
 * 盒子模型(框模型)
   * 内容区 - HTML元素
   * 内边距(padding)
   * 边框(border)
   * 外边距(margin)
 * 边框(border)
   * border - 简写属性，同时设置宽度、颜色和样式
     * border-bottom - 设置下边框
     * border-left - 设置左边框
     * border-right - 设置右边框
     * border-top - 设置上边框
   * 设置样式
     * border-width - 设置四个边框的宽度(px)
       * 分几种情况
         * 设置一个值 - 表示四个边框
         * 设置两个值 - 上下和左右
         * 设置三个值 - 上、左右、下
         * 设置四个值 - 上、右、下、左
       * 分四方向
         * border-top-width
         * border-right-width
         * border-bottom-width
         * border-left-width
     * border-color - 设置四个边框的颜色
     * border-style - 设置四个边框的样式
       * none - 无边框效果
       * solid - 实线
       * double - 双实线
       * dashed - 虚线
       * dotted - 点状边框
 * 内边距(padding)
   * padding - 简写属性，设置四个方向的内边距
   * padding-top
   * padding-right
   * padding-bottom
   * padding-left
 * 外边距(margin)
   * margin - 简写属性，设置四个方向的外边距
     * margin-top
     * margin-right
     * margin-bottom
     * margin-left
   * 影响自身元素的位置
     * margin-top
     * margin-left
   * 影响相邻元素的位置
     * margin-right
     * margin-bottom
 * 行内元素的盒子模型
   * 边框和内边距都是有效的
   * 外边距的问题
     * 左右外边距有效
     * 上下外边距无效
 * box-sizing属性
   * content-box - 默认盒子模型
     * 实际的宽度 = width + border + padding
   * border-box - 怪异盒子模型
     * 实际的宽度 = width