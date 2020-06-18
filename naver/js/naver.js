$(function(){
    $('html').scrollTop(0);
    $('.btn_close').click(function(e){
        $('.naver-whale').remove();
        //3일동안 보지 않기 버튼을 클릭했을 때 url에 #이 붙는 것을 방지
        e.preventDefault();
    })
    $('.btn-auto-search-fold').click(function(){
        $('.autoframe').toggleClass('display-none');
    
    })
})