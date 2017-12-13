$('body').on('touchmove', function (event) {
    event.preventDefault();
});
//广告
var imgArr = ["http://st.wboll.com/static/wboll_game/static/game/puhui/images/gg1.jpg", "http://st.wboll.com/static/wboll_game/static/game/puhui/images/gg2.jpg", "http://st.wboll.com/static/wboll_game/static/game/puhui/images/gg3.jpg", "http://st.wboll.com/static/wboll_game/static/game/puhui/images/gg4.jpg", "http://st.wboll.com/static/wboll_game/static/game/puhui/images/gg5.jpg"];//??????
$(".guanggao").html("<img src='" + imgArr[Math.floor((Math.random() * imgArr.length ))] + "' />");



setTimeout(function(){
    $(".guanggao ").hide();
},5000)

//分享
$(".share-btn").on("touchstart", function () {
    $(".share").show();
})
$(".share").on("touchstart", function () {
    $(this).hide();
})

//拆红包
$(".chai").on("touchstart", function () {
    $(".alert").hide();
    $(".alert-chai").show();

})


//音乐
var musicHandle = $('#music');
var audio = document.getElementById('J_audio');
var audioFlag = 0;
musicHandle.on('click', function () {
    audioFlag = 1;
    if ($(this).hasClass('m-play')) {
        audio.pause();
        $(this).removeClass('m-play');
    } else {
        audio.play();
        $(this).addClass('m-play');
    }
});


var timesNum = 30;
var scoreSum = 0;

var idNum = 0;
var clickLiId = "";


var moneyNum = 0;

var timesDjS;
var timesAdd;


var bodyWidth = $(window).width();
var bodyHeight = $(window).height();
var mysign = 0;

$(function () {
    mysign = 0;

    $(".pgBox").css({"height": bodyHeight, "width": bodyWidth});
    //todo:++
    $(".start-btn").on("touchstart", function () {
        $(".index ").hide();
        $(".rule ").show();

        var n = 5;
        var t = setInterval(function () {
            --n;
            $("#count").html(n);
            if (n == -1) {
                clearInterval(t);
                $(".pgGz").hide();
                play();
            }
        }, 1000)

    })
});

function timesDj() {

    timesDjS = setInterval(function () {

        if (timesNum == 0) {
            clearInterval(timesAdd);
            clearInterval(timesDjS);


            moneyNum = parseInt(scoreSum);
//                moneyNum>10?moneyNum=10:moneyNum=moneyNum;


            temesOver();
        }
        else {
            timesNum--;
            $("#timeDjVal").text(timesNum);
        }

    }, 1000);

}
function temesOver() {
    setTimeout(function () {
        //todo:gameover 显示的结果
        //分数没有达到
        //$(".alert-wl").css({"display":"block"});

        //
        //中过奖
        //$(".alert-opened").css({"display":"block"});

        if (isget == 0){
            $(".alert-opened").show();
        }else {
            /*if(scoreSum>11155){
                $(".alert-hongbao").show();
                $('#getprize').on('touchstart',function(){
                    var amount = parseInt(Math.random()*(110-100+1)+100)/100;
                    $('.hb-money').html(amount);
                    var data={
                        amount : amount,
                        openid : getCookie('openid')
                    };
                    $.ajax({
                        url:myurl+'/score',
                        type: "POST",
                        dataType: 'json',
                        data : data,
                        success: function (result) {
                            if(result.code==1){
                                $(".alert-wl").show();
                                $(".alert-wl").html('您已经领过红包了')
                            } else if (result.code ==3 ){
                                $(".alert-wl").show();
                                $(".alert-wl").html('您来晚了，红包与您擦肩而过')
                            } else if (result.code ==2) {*/
                                $(".alert-wl").show();
                                $(".alert-wl").html('您来晚了，红包与您擦肩而过')
          /*                  }
                        }
                    });
                })*/
      /*      }else {
                $(".alert-wl").show();
            }*/
        }


        $(".redBox").removeClass("redBoxDown");
        $(".icoGold").remove();
        $(".playagain").one("click", function () {
            timesNum = 30;
            scoreSum = 0;
            $(".scoreVal").text(scoreSum);
            $(".scoreVal-count").text(scoreSum);
            $(".scoreVal-score").text(scoreSum);
            /* $(".pgGameOver").removeClass("pt-page-moveFromTop").addClass("pt-page-moveToTop");

             setTimeout(function(){
             $(".pgGameOver").css({"display":"none","visibility":"hidden"});
             },1000);*/
            $(".alert").hide();
            window.location.reload(true);
            play();

        });


    }, 4000);
}
function play() {

    timesDj();
    timesAdd = setInterval(function () {

        appendLi();
    }, 500);
}

function redMoney() {
    var liXnum = randomNum(bodyWidth * 2, 0);

}

function appendLi() {

    var tempStr = "";
    idNum++;

    var idName = "red" + idNum;	//?????? ???
    var redBoom = randomNum(10, 0);
    var jiaBoomClass = "jinBoom" + redBoom;//className
    //alert("idName:"+idName+"redBoom"+redBoom);


    var redWidth = randomNum(50, 40);

//todo:++
    tempStr = "<li class=\"" + jiaBoomClass + "\" id=\"" + idName + "\" style=\"width:" + redWidth + "px;\"><div class=\"money\" ><img src=\"images/zp-zhizhen1.png\"></div></li>";


    var liXnum = randomNum(bodyWidth * 2, 0);
    var liX = liXnum - bodyWidth;

    //$(".redBox ul").append(tempStr);
    $(".redBox ul li").last().after(tempStr);

    /*todo:++*/
    $('#'+idName).on('touchstart',function(){
        bangDingLi(idName);
    });

    //todo
    $("#" + idName).animate({"top": (bodyHeight + 100) + "px", "left": liX + "px"}, 3000, function () {

        $("#" + idName).remove();
    });

}

var icoGoldNum = 0;

function bangDingLi(id) {

    var thisId = id,
        thisIdName = $("#" + thisId);

    var thisClass = thisIdName.attr("class");
    var thisClassNum = thisClass.substr(thisClass.length - 1, 1);

    //alert("thisClassNum:"+thisClassNum);

    var icoTop = parseInt(thisIdName.offset().top);
    var icoLeft = parseInt(thisIdName.offset().left);
    //var icoTop=$("#"+thisId).offset().top;
    //var icoLeft=$("#"+thisId).offset().left;

    if (thisClassNum >= 0 && thisClassNum <= 3) {
        scoreSum = scoreSum + 1;
        $(".scoreVal").text(scoreSum);
        $(".scoreVal-count").text(scoreSum);
        $(".scoreVal-score").text(scoreSum);

        thisIdName.children(".money").remove();
        appGold(icoLeft, icoTop);


    } else if (thisClassNum >= 4 && thisClassNum <= 5) {

        thisIdName.remove();

        scoreSum = scoreSum + 1;
        $(".scoreVal").text(scoreSum);
        $(".scoreVal-count").text(scoreSum);
        $(".scoreVal-score").text(scoreSum);

        thisIdName.children(".money").remove();
        appGold(icoLeft, icoTop);

    } else if (thisClassNum >= 6 && thisClassNum <= 8) {
        scoreSum = scoreSum + 1;
        $(".scoreVal").text(scoreSum);
        $(".scoreVal-count").text(scoreSum);
        $(".scoreVal-score").text(scoreSum);

        thisIdName.children(".money").remove();
        appGold(icoLeft, icoTop);

    } else if (thisClassNum >= 9) {
        scoreSum = scoreSum + 1;
        $(".scoreVal").text(scoreSum);
        $(".scoreVal-count").text(scoreSum);
        $(".scoreVal-score").text(scoreSum);

        thisIdName.children(".money").remove();
        appGold(icoLeft, icoTop);

    }
    setTimeout(function () {
        thisIdName.remove();
    }, 700);

}
function appGold(x, y) {

    var goldNum = randomNum(8, 4);

    var maxX = x + 40;
    var minX = x - 40;
    var maxY = y + 30;
    var minY = y - 30;


//            for(var i=0;i<goldNum;i++){

    //alert("for");
    icoGoldNum++;
    var icoColdId = "icoGold" + icoGoldNum;

    var goldX = randomNum(maxX, minX);
    var goldY = randomNum(maxY, minY)

    /*  $(".redBox").after("<div class=\"icoGold\" id=\""+icoColdId+"\" style=\"top:"+goldY+"px;left:"+goldX+"px\" ><img src=\"images/gold.png\"></div>");
     $("#"+icoColdId).animate({"top":(bodyHeight-30)+"px","left":goldX+"px"},2000);
     */
    $(".redBox").after("<div class=\"icoGold\" id=\"" + icoColdId + "\" style=\"top:" + goldY + "px;left:" + goldX + "px\"></div>");
    $("#" + icoColdId).animate({"top": (bodyHeight - 30) + "px", "left": goldX + "px"}, 2000);

    $("#" + icoColdId).html("+1");
    $("#" + icoColdId).css({"color": "#c00a0a", "font-size": "20px"});
    setTimeout(function () {
        $(".icoGold").css("display", "none");
    }, 2000)
}

function randomNum(maxNum, minNum) {

    var randomNum = Math.floor((maxNum - minNum) * Math.random() + minNum);

    return randomNum;
}
function sharePage() {

    $(".page_share").removeClass("page_up").addClass("page_down");
};

function closePage() {
    $(".page_share").removeClass("page_down").addClass("page_up");
}


function musicPlay() {

    var audio = document.getElementById('musicgold');

    var pasGold = function () {
        audio.currentTime = 0;
        audio.pause();
        audio.removeEventListener("ended", pasGold, false);
    }
    audio.muted = false;
    audio.addEventListener('ended', pasGold, false);
    audio.currentTime = 0;
    audio.play();

}
function boomPlay() {

    var audio4 = document.getElementById('musicboom');

    var pasBoom = function () {

        audio4.currentTime = 0;
        audio4.pause();
        audio4.removeEventListener("ended", pasBoom, false);

    }
    audio4.muted = false;
    audio4.addEventListener('ended', pasBoom, false);
    audio4.currentTime = 0;
    audio4.play();
}








