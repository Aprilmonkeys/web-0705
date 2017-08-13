/**
 * Created by JYL on 2014/6/25.
 */
//12格子黑块,默认值为0表示没有黑块,如果设置为1表示该块是黑块
var board = new Array();
var timerun = 0.000;
var score = 0;
var t;
$(function(){
    //游戏初始化工作
    init();
});

function init(){
    for(var i=0;i<4;i++){
        board[i] = new Array();
        for(var j=0;j<3;j++){
            //初始化所有的白块
            var grid = $("#grid-"+i+"-"+j);
            grid.css("top", getPosTop(i, j));
            grid.css("left", getPosLeft(i, j));
            //初始化用于随机生成黑块的12格子
            $("#box_container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
            var block = $("#block-"+i+"-"+j);
            block.css("top", getPosTop(i, j));
            block.css("left", getPosLeft(i, j));
            //将12个黑块的值初始化为0
            board[i][j] = 0;
        }
    }
    for(var i=0;i<4;i++){
        //生成随机的列j
        var randy = parseInt(Math.floor(Math.random() * 3));
        //用于保证4行随机生成黑块，不能组成一列
        if(i>0&&board[i-1][randy] == 1){
            randy = parseInt(Math.floor(Math.random() * 3));
        }
        //获取对应随机的黑块
        var block = $("#block-"+i+"-"+randy);
        //将得到的黑块改变样式
        block.css("background-color","#000");
        board[i][randy] = 1;
    }
    //初始化游戏开始提示
    $("#block-3-0").text("按J开始");
    $("#block-3-1").text("按K开始");
    $("#block-3-2").text("按L开始");
}

function getPosTop(i,j){
    return i*100;
}

function getPosLeft(i,j){
    return j*100;
}