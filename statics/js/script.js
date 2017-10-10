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
        var foodIsSpecial = $("#inputSpecial").val();
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
                window.location.href='/manageFood';
            },
            error:function(){
                alert("新增失败");
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
});