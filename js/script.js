// $(".inner_stay").click(function(){
//     $(this).parent().addClass("on").sibilings().removeClass("on");
// });

$('.inner_stay_a').hide();
$(".stay").click(function(){
    $(this).children().addClass("inner_stay_a").parent().siblings().children().removeClass("inner_stay_a");
});
$('.stay_hidden').hide();
$(".stay").click(function(){
    $(this).children().children().children('.stay_hidden').show().parent().parent().parent().siblings().children().children().children('.stay_hidden').hide();
});

$(".menu_link a").click(function(){
    $("#menu").css({
        'margin-left':'0',
        'transition':'margin-left 0.5s'
    })
});
$(".close_btn").click(function(){
    $("#menu").css({
        'margin-left':'100vw',
        'transition':'margin-left 0.5s'
    })
});
$(".m_gnb li a").click(function(){
    $("#menu").css({
        'margin-left':'100vw',
        'transition':'margin-left 0.5s'
    })
});