$(function(){
    $("#search-btn").on('click',function(){

        var keyword = $(this).siblings('input').val();




        if(keyword){

            keyArr.unshift(keyword);

            localStorage.setItem('keyArr',JSON.stringify(keyArr));

            location.href = "search-result.html?keyword=" + keyword;

        }else{
            alert('请输入搜索关键字');
        }
    });



    var keyArr = [];


    if(localStorage.getItem('keyArr')){

        keyArr = JSON.parse(localStorage.getItem('keyArr'));

        var html = template('historyTpl', {result: keyArr});

        $("#history-box").html(html);





    }

    $("#clearBtn").on('click',function(){

        $("#history-box").html('');

        localStorage.removeItem('keyArr');

        keyArr = [];
    });

    $("#history-box").on('click','li',function(){

        location.href='search-result.html?keyword=' + $(this).text();
    })

});