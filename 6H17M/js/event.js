       /* 메뉴버튼 클릭 */
       $('.btn_ham').on('click',function(){
        $('.main_nav').addClass('active')
    })
    $('.btn_clo').on('click',function(){
        $('.main_nav').removeClass('active')
    })
    $('#onlineshop span').on('click',function(){
        $('.column').slideToggle()
    })
    $('.btn_more').on('click',function(){           
        let more = $('.btn_more')
        if(cnt < 4){
            cnt++
            goodHeight += 1165                
            $('.item_goods').css({
                height : goodHeight + 'px'
            });               
        more.children().text('VIEW MORE (' + cnt + '/4)')
        };
    })
  
 