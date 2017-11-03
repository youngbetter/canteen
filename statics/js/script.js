$(document).ready(function(){
    $("#login").click(function(){
        var user = $("#username").val();
        var pwd = $("#password").val();
        var pd = {"userTel":user, "userPsw":pwd};
        $.ajax({
            type:'post',
            dataType : 'json',
            url:'/login',
            data:pd,
            cache:false,
            success:function(data){
                window.location.href='/index';
            },
            error:function(){
                alert("登陆失败");
            },
        });
    });

    $("#addNewFood").click(function(){
        var askType = 'addNewFood';
        var foodName = $("#inputName").val();
        var foodCantId = $("#inputCant").val();
        var foodWinId = $("#inputWin").val();
        var foodPrice = $("#inputPrice").val();
        var foodIsSpecial = $('#inputSpecial').val();
        var new_data = {"askType":askType,
                  "foodName":foodName,
                  "foodCantId":foodCantId,
                  "foodWinId":foodWinId,
                  "foodPrice":foodPrice,
                  "foodIsSpecial":foodIsSpecial,
                  };
        $.ajax({
            type:'post',
            dataType : 'json',
            url:'/manageFood',
            data:new_data,
            cache:false,
            success:function(data){
                //var obj = jQuery.parseJSON(data);//获取的数据一般为json格式，用这个方法来解析数据
                var temp = document.getElementById("theTemplate").innerHTML;
                $("#test_template").append(temp);
                $("td.FN span#foodName").text(data.foodName);
                $("td.hidden-phone span#foodCantId").text(data.foodCantId);
                $("td.hidden-phone span#foodWinId").text(data.foodWinId);
                $("td.FP span#foodPrice").text(data.foodPrice);
                $("td.FIS span#foodIsSpecial").text(data.foodIsSpecial);
            },
            error:function(){
                alert("新增失败");
            },
        });
    });

    $("#addNewMsg").click(function(){
        var askType = 'addNewMsg';
        var msgType = $("#inputMsgType").val();
        var msgCant = $("#inputCant").val();
        var msgContent = $("#inputMsg").val();
        var new_data = {"askType":askType,
                  "msgType":msgType,
                  "msgCant":msgCant,
                  "msgContent":msgContent,
                  };
        $.ajax({
            type:'post',
            dataType : 'json',
            url:'/feedBack',
            data:new_data,
            cache:false,
            success:function(data){
                //var obj = jQuery.parseJSON(data);//获取的数据一般为json格式，用这个方法来解析数据
                if(data.msgType=='失物招领'){
                    var temp = document.getElementById("SWZL").innerHTML;
                    $("#SWZLTemplate").append(temp);
                    $("div.alert-success span#SWZLmsg").text(data.msgContent);
                }
                else if(data.msgType=='食堂公告'){
                    var temp = document.getElementById("STGG").innerHTML;
                    $("#STGGTemplate").append(temp);
                    $("div.alert-info span#STGGmsg").text(data.msgContent);
                }
                else{
                    var temp = document.getElementById("XPFB").innerHTML;
                    $("#XPFBTemplate").append(temp);
                    $("div.alert-warning span#XPFBmsg").text(data.msgContent);
                }
            },
            error:function(){
                alert("发布失败");
            },
        });


    });

    $("#logout").click(function(){
        window.location.href='/login';
    });

    $(".toIndex").click(function(){
        window.location.href='/index';
    });

    $(".toManageFoodofMei").click(function(){
        window.location.href='/manageFood';
    });

    $(".toFeedBack").click(function(){
        window.location.href='/feedBack';
    });

    $(".toStatistics").click(function(){
        window.location.href='/statistics';
    });

    $(".fa-trash-o").click(function(){
        //var item = document.getElementById("menuItem");
        this.parentNode.parentNode.parentNode.remove();
    });
});