/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)
 9. 当鼠标悬停在某个小图上,在上方显示对应的中图
 10. 点击向右/左, 移动当前展示商品的小图片
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

$(function () {
   // showHide()
   //  subMenu()
   //  search()
   //  share()
   //  address()
   // minicart()
   //  products()
   // mediumImg()
   // movePic()
   // showBig()


    //11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
    function showBig() {
        var $mask = $('#mask') //小黄块
        var $maskTop = $('#maskTop') //透明层
        var $largeImgContainer = $('#largeImgContainer') //大图的容器
        var $loading = $('#loading') //加载过程图
        var $largeImg = $('#largeImg') //大图的标签
        var $mediumImg = $('#mediumImg') //中图标签
        var MASK_WIDTH = $mask.width()
        var MASK_HEIGHT = $mask.height()
        var MEDIUM_WIDTH = $mediumImg.width()
        var MEDIUM_HEIGHT = $mediumImg.height()

        $maskTop.hover(function () {
            $mask.show()
            $largeImgContainer.show();

            var srcM = $mediumImg.attr('src');
            var srcL = srcM.replace('m.jpg','l.jpg');
            $largeImg.attr('src',srcL);
            $largeImg.show();

            var largeImgWidth = $largeImg.width();
            var largeImgHeight = $largeImg.height();
            var largeImgBoxWidth =largeImgWidth/2;
            var largeImgBoxHeight = largeImgHeight/2;
            $largeImgContainer.css({
                width:largeImgBoxWidth,
                height:largeImgBoxHeight
            })
            $maskTop.mousemove(function (event) {
                var left = 0;
                var top = 0;
                var eventLeft = event.offsetX;
                var eventTop = event.offsetY;
                left = eventLeft - MASK_WIDTH/2;
                top = eventTop - MASK_HEIGHT/2;

                if(left<0){
                    left = 0;
                }else if(left>MEDIUM_WIDTH-MASK_WIDTH){
                    left = MEDIUM_WIDTH-MASK_WIDTH;
                }
                if(top<0){
                    top = 0;
                }else if (top>MEDIUM_HEIGHT-MASK_HEIGHT){
                    top = MEDIUM_HEIGHT-MASK_HEIGHT;
                }
                $mask.css({
                    left:left,
                    top:top
                })
                //计算大图移动位置
                var largeImgLeft =largeImgWidth*left/MEDIUM_WIDTH;
                var largeImgTop = largeImgHeight*top/MEDIUM_HEIGHT;
                $largeImg.css({
                    left:-largeImgLeft,
                    top:-largeImgTop
                })

            })
        },function () {
            $mask.hide()
            $largeImgContainer.hide();
        })

    }



    //9. 点击向右/左, 移动当前展示商品的小图片
    function movePic() {
        var $preview = $('#preview')
        var $backward = $preview.children('h1').children('a:eq(0)')
        var $forward = $preview.children('h1').children('a:eq(1)')
        var $iconList = $('#icon_list')
        var show_img = 5;
        var pics = $iconList.children('li').length;
        var imgCount = 0;
        var itemsWidth = 62;

        if(pics>show_img){
            $forward.attr('class','forward')
        }

        $forward.click(function () {
            var nowClass = $(this).attr('class');
            if(nowClass!=='forward_disabled'){

                imgCount++;
                $iconList.css('left',-imgCount*itemsWidth)

                if (imgCount == pics-show_img){
                    $forward.attr('class','forward_disabled');
                }
                if(imgCount > 0){
                    $backward.attr('class','backward');
                }
            }
        })

        $backward.click(function () {
            var nowClass = $(this).attr('class');
            if (nowClass!=='backward_disabled'){
                imgCount--;
                $iconList.css('left',-imgCount*itemsWidth)

                if (imgCount == 0){
                    $backward.attr('class','backward_disabled');
                }
                if (imgCount<pics-show_img){
                    $forward.attr('class','forward');
                }
            }


        })
    }



    //9. 当鼠标悬停在某个小图上,在上方显示对应的中图
    function mediumImg () {
        $('#icon_list>li').hover(function () {
            $(this).siblings().children().removeClass('hoveredThumb');
            $(this).children().addClass('hoveredThumb');
            var imgSrc =$(this).children().attr('src');
            var mImgSrc = imgSrc.replace('.jpg','-m.jpg');
            $('#mediumImg').attr('src',mImgSrc);
        },function () {
            $(this).children().removeClass('hoveredThumb');
        })
    }
    // 8. 点击切换产品选项 (商品详情等显示出来)
    function products () {
        $('.main_tabs>li').click(function () {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
            //查找内容容器
            var $divs = $('#product_detail>div:not(:first)');
            var index = $(this).index();
            $divs.hide();
            $divs.eq(index).show();
        })
    }
    // 7. 鼠标移入移出切换显示迷你购物车
    function minicart () {
        $('#minicart').hover(function () {
            $(this).addClass('minicart');
            $(this).children('div').show();
        },function () {
            $(this).removeClass('minicart');
            $(this).children('div').hide();
        })
    }

    //5. 鼠标移入移出切换地址的显示隐藏
    function address () {
        $('#store_select').hover(function () {
            $('#store_content,#store_close').show();
        },function () {
            $('#store_content,#store_close').hide();
        });
        //点击小叉叉关闭内容区域和小叉叉
        $('#store_close').click(function () {
            $('#store_content,#store_close').hide();
        })
        //完成选项卡切换功能  6. 点击切换地址tab
        $('#store_tabs>li').click(function () {
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover')
        })
    }
    // 4. 点击显示或者隐藏更多的分享图标
    function share () {
        var isOpen = true;
        $('#dd>#shareMore').click(function () {
            if(isOpen){
                $('#dd').css('width','200px');
                $(this).prevAll(':lt(2)').show();
                $(this).children().addClass('backword');
            }else{
                $('#dd').css('width','155px');
                $(this).prevAll(':lt(2)').hide();
                $(this).children().removeClass('backword');
            }
            isOpen = !isOpen;
        })
    }
    // 3. 输入搜索关键字, 列表显示匹配的结果
    function search () {

        $('#txtSearch').on('keyup focus',function () {
            var val = this.value.trim();
            //var val2 = $.trim($(this).val())
            if (val){
                $('#search_helper').show();
            }
        }).blur(function () {
            $('#search_helper').hide();
        })
    }
    // 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
    function subMenu () {
        $('#category_items .cate_item').hover(function () {
            $(this).children('div').show()
        },function () {
            $(this).children('div').hide()
        })
    }
  //1. 鼠标移入显示,移出隐藏
    function showHide () {
        $('[name=show_hide]').hover(function () {
            //通过拼接字符串找到要操作的子元素
            var id = $(this).attr('id');
            $('#'+id+'_items').show();
        },function () {
            var id = $(this).attr('id');
            $('#'+id+'_items').hide();
        })
    }



})




