/**
 * Created by JYL on 2014/6/25.
 */
$(document).keydown(function(event){
    switch (event.keyCode) {
        case 74://J
            if(board[3][0] == 1 && score == 0){
                timeRun();
                clearText();
                moveDown();
                randFirst();
            }else if(board[3][0] == 1 && score <50){
                //按键正确的
                moveDown();
                randFirst();
            }else{
                //按键错误的
                isgameover();
            }
            break;
        case 75://K
            if(board[3][1] == 1 && score == 0){
                timeRun();
                clearText();
                moveDown();
                randFirst();
            }else if(board[3][1] == 1 && score <50){
                //按键正确的
                moveDown();
                randFirst();
            }else{
                //按键错误的
                isgameover();
            }
            break;
        case 76://L
            if(board[3][2] == 1 && score == 0){
                timeRun();
                clearText();
                moveDown();
                randFirst();
            }else if(board[3][2] == 1 && score <50){
                //按键正确的
                moveDown();
                randFirst();
            }else{
                //按键错误的
                isgameover();
            }
            break;
    }
});

//用于初始化计时器
function timeRun(){
    timerun += 0.001;
    $("span").text(timerun.toString().substr(0,5));
    t = setTimeout("timeRun()",1);
}

//用于清空游戏开始的提示内容
function clearText(){
    $("#block-3-0").text("");
    $("#block-3-1").text("");
    $("#block-3-2").text("");
}

//用于整体黑块向下移动一行
function moveDown(){
    for(var i=3;i>=0;i--){
        for(var j=2;j>=0;j--){
            if(board[i][j] == 1){
                if(i==3){
                    //将当前黑块的黑色设置为白色
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                }else{
                    //找到黑块,向下移动
                    //1 将当前黑块的下一行同一列的黑块设置为黑色的
                    $("#block-"+(i+1)+"-"+j).css("background-color","#000");
                    board[i+1][j] = 1;
                    //2 将当前黑块的黑色设置为白色
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                }
            }
        }
    }
    score += 1;
}

//用于初始化第一行的随机黑块
function randFirst(){
    var randy = parseInt(Math.floor(Math.random() * 3));
    var block = $("#block-0-"+randy);
    block.css("background-color","#000");
    board[0][randy] = 1;
}

function isgameover(){
    //将计时器停止
    clearTimeout(t);
    $("#box_container").append("<div id='gameover' class='gameover'><p>本次用时</p><span>" + timerun.toString().substr(0,5) + "秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
    var gameover = $("#gameover");
    gameover.css("width", "300px");
    gameover.css("height", "400px");
    gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
}

function restartgame(){
    $("#gameover").remove();
    $(".block").remove();
    $("#time_box").html("<span>0.000</span>"+"秒");
    init();
}