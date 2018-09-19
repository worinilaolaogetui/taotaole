


$(function(){



    $("#login-btn").on('tap',function(){
        var username = $("[name='username']").val().trim();
        var password = $("[name='password']").val().trim();

        if(!username){
            mui.toast('请输入用户名');
            return;
        }
        if(!password){
            mui.toast('请输入密码')
            return;
        }


        $.ajax({
            url:'/user/login',
            type:'post',
            data:{
                username:username,
                password:password
            },
            beforeSend: function(){
                $("#login-btn").html("正在登录...");
            },
            success:function(res){

                mui.toast('登录成功');

                $("#login-box").html("登录");


                setTimeout(function(){
                    location.href="user.html";
                },2000);
        }
        })

    });



});