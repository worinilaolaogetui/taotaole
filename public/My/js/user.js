


var userInfo = null;



$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    async: false,
    success:function(res){
        console.log(res);

        if(res.error && res.error == 400){
            location.href = 'login.html';
        }

        userInfo = res;

    }
});

$(function(){

    $("#logout").on('tap',function(){

        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                if(res.success){
                    mui.toast('退出登录成功');
                    setTimeout(function(){
                        location.href="index.html";
                    },2000)
                }
            }
        })
    });


    var html = template('userTpl', userInfo);
    console.log(html);

    $("#userInfoBox").html(html);




})