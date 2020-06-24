$(function(){
    var defaultMenu = ['사전','뉴스','증권','부동산','지도','영화','뮤직','책','웹툰'];
    var defaultMenuLink =['https://dict.naver.com','https://news.naver.com','https://finance.naver.com','https://land.naver.com','https://map.naver.com/v5/','https://movie.naver.com','https://vibe.naver.com/about','https://book.naver.com','https://comic.naver.com/index/nhn'];
    var selectMenu = [];
    var selectMenuLink = [];
    var allMenuLink = ['모든 링크가 위에처럼 있어야함'];
    var tmpMenu = [];

    $('html').scrollTop(0);
    $('.btn_close').click(function(e){
        $('.naver-whale').remove();
        //3일동안 보지 않기 버튼을 클릭했을 때 url에 #이 붙는 것을 방지
        e.preventDefault();
    })
    $('.btn-auto-search-fold').click(function(){
            $('.autoframe').toggleClass('display-none');
            $('.icon-auto-search-fold').toggleClass('display-none');
            $('.icon-auto-search-open').toggleClass('display-none');
    
    })
    $('.btn-more').click(function(){
        $('.btn-more').toggleClass('display-none');
        $('.extra-service').toggleClass('display-none');
        $('.extra-select').toggleClass('display-none');
        $('.box-service-menu.set').removeClass('display-none');
        $('.box-group-keyword').toggleClass('display-none');  
        $('.box-service-menu').toggleClass('display-none');   
        
    })
    $('.btn-menu-set').click(function(){
        $('.extra-group').toggleClass('display-none');
        $('.extra-choice').toggleClass('display-none');

        var cnt=0;
        var max=5;

        $('.favorite-service').each(function(){
            if(cnt<max){
                $(this).addClass('box-empty');
                $(this).find('.link-menu-black').text('');
            } else{
                $(this).addClass('display-none');
            }
        })

    })

    $('.btn-set').click(function(){
        if(!$(this).hasClass('not')){
            $(this).find('i').addClass('set_on');
            $('.btn-set>i').removeClass('set_on');
        }
    })

    $('.thumb-box').hover(function(){
        $(this).find('img').toggleClass('display-none');
        $(this).find('.popup-wrap').toggleClass('display-none');
    })
    $('.popup-wrap>a').hover(function(){
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('disable');
    })

    setInterval(function(){
        $('.ad-image').first().animate({'margin-bottom':'-135px'},1000,function(){
            $(this).detach().appendTo('.adhere').css('margin-bottom','0px').removeAttr('style');
        })
    },1000)
    setInterval(function(){
        $('.news-rolling').first().animate({'margin-bottom':'-24px'},1000,function(){
            $(this).detach().appendTo('.roller').css('margin-bottom','0px').removeAttr('style');
        })
    },1000)
})
    