$(function(){
    $('.why').hover(function(){
    
    })

    $('.search-box').click(function(e){
        $(this).animate({'width':'470px','background-color':'white'},300);
        $(this).addClass('border-radius');
        e.stopPropagation();
        
    })
    $('body').click(function(){
        $('.search-box').animate({'width':'300px','background-color':'transparent'},300);
        $(this).removeClass('border-radius');
    })
})