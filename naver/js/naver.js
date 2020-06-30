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
        var selMenu = $(this).text();
        
        if(tmpMenu.indexOf(selMenu)>=0){
            tmpMenu.splice(tmpMenu.indexOf(selMenu),1);
            $(this).find('input').prop('checked',false);
        }
        else{
            if(tmpMenu.length == 5) {
                alert('최대 5개까지 설정할 수 있습니다.')
                return;
            }
            tmpMenu.push()
        }
        
        
        /*
        $('.extra-group').toggleClass('display-none');
        $('.extra-choice').toggleClass('display-none');
        */
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
        $(this).find('.thumb').toggleClass('display-none');
        $(this).find('.popup-wrap').toggleClass('display-none');
    })
    $('.popup-wrap>a').hover(function(){
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('disable');
    })

    setInterval(function(){
        $('.ad-image').first().animate({'margin-top':'-270px'},1000,function(){
            $('.ad-image').last().detach().prependTo('.link-ad').css('margin-top','-405px');
            $(this).removeAttr('style');
           
        })
    },3000)

    setInterval(function(){
        $('.news-rolling').first().animate({'margin-bottom':'-24px'},1000,function(){
            $(this).detach().appendTo('.roller').css('margin-bottom','0px').removeAttr('style');
        })
    },1000)

    var cardRollingNum = cardRolling();
    $('.data-content').hover(function(){
        //마우스가 요소 안에 있을 때
        clearInterval(cardRollingNum);
    },function(){
        //마우스가 요소 밖에 있을 때
        cardRollingNum = cardRolling();
    })

    $('.btn-prev').click(function(){
        if(!$('.data-content>.data').is('animated')){
            $('.data-content>.data').last().detach().prependTo('.data-content').css('margin-left','-281px');
            $('.data-content>.data').first().animate({'margin-left':'0'},500);
        }
    })
    $('.btn-next').click(function(e){
        if(!$('.data-content>.data').is('animated')){
            $('.data-content>.data').first().animate({'margin-left':'-281px'},500,function(){
                $(this).detach().appendTo('.data-content').removeAttr('style');
            })
        }
    })

    $('.category-content').click(function(e){
        e.preventDefault();
        $(this).attr('aria-selected','true');
        $('.category-content').not($(this)).attr('aria-selected','false');
        $(this).attr('aria-selected',true);
        themeBtnView();
      
    })
    $('.shop-header .tab').click(function(e){
        e.preventDefault();
        $('.shop-header .tab').attr('aria-selected','false');
        $(this).attr('aria-selected','true');
        tabRandom();
    })
    tabRandom();
    /* 오른쪽 3번째 컨텐츠에서 상품/쇼핑몰/MEN이 선택되면 선택된 내용에 맞는 body가 보이도록 하는 함수*/
    function shopView(){
        var target=$('.shop-header .tab[aria-selected=true]').attr('data-target');
        $('.')
    }

    function tabRandom(){
        var arr = [];
        $('.shop-content>.group-mall>.mall-area>.link-mall').removeClass('random');
        for( ; arr.length < 4 ; ){
            var r = getRandom(1, 12);
            if(arr.indexOf(r) >= 0){
                continue;
            }
            arr.push(r);
            if (r <= 6){
                $('.shop-content>.group-mall>.mall-area').eq(0).find('.link-mall').eq(r-1).addClass('random');
            } else {
                $('.shop-content>.group-mall>.mall-area').eq(1).find('.link-mall').eq(r-7).addClass('random');
            }
        }
    }

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    $('.btn-box>a').click(function(e){
        e.preventDefault();
        //var currentObj = $('.group-control>.num-box>.currentNum');
        var currentObj = $(this).parents('.group-control').find('.num-box>.currentNum');
        //현재 페이지 번호를 가져옴
        var current = currentObj.text();
        //이전 버튼인 경우, 해당 버튼을 btn-prev 클래스를 가지고 있음
        current = parseInt(current);
        var change;
        var max = $(this).parents('.group-control').find('.num-box>.currentNum').text();
        max = parseInt(max);
        if($(this).hasClass('btn-prev')){
            change = current - 1;
            if(change == 0){
                change = max;
            }
        }
        //다음버튼인 경우
        else {
            change = current + 1;
            if (change == max + 1){
                change = 1;
            }
        }
        currentObj.text(change);    
    })
   
   
})
function cardRolling(){
    return setInterval(function(){
        $('.data-content>.data').first().animate({'margin-left':'-281px'},500,function(){
            $(this).detach().appendTo('.data-content').removeAttr('style');
        })
    },3000)

}

function themeBtnView(){
    $('.category-item .category-content').first().attr('aria-selected');
    $('.category-item .category-btn-next').removeClass('display-none');
    if($('.category-item .category-content').first().attr('aria-selected') == 'true') {
        $('.category-item .category-btn-prev').addClass('display-none');
    }
    if($('.category-item .category-content').last().attr('aria-selected') == 'true') {
        $('.category-item .category-content').addClass('display-none');
    }
}
