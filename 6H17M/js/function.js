  
        let cnt = 1
        let goodHeight = $('.item_goods').height()
        let itemBox = $('item_box')
        function colUp(){
            $('.column').slideUp()
        }
        colUp();
         $(window).resize(function(){
         let winWidth = window.outerWidth;
         let itemLength = $('item_box')
         /* console.log(itemLength) */
         /* console.log(winWidth) */
         if(winWidth < 640){
            $('item_box:lt(6)'),$('item_box:lt(28)')
             let itemBox = $('.item_box0')
            $('.time_img img').attr('src','./images/mo_time.jpg')   
             /* console.log(itemBox) */
         }else{
            $('.time_img img').attr('src','./images/time.jpg')   
         }
        
     })
  
        function getTime(){ //getTIme이라는 함수 생성
            let now = new Date(); //현재
            let dday = new Date("2021-04-21 06:00:00") //해당되는날짜 기간./ 기다려야되는날짜 B라고 하자
            //B와 현재시간의 간격 = dday - now 이고 값은 밀리초로 나타난다 ex8612000 이런식?
            let distance = dday - now;
            let Day = Math.floor(distance / (1000 * 60 * 60 * 24));
            let Hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let Min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
            let Sec = Math.floor(distance % (1000 * 60) / 1000 )
            document.getElementById('day').innerHTML = Day
            document.getElementById('hour').innerHTML = Hour
            document.getElementById('minute').innerHTML = Min
            document.getElementById('sec').innerHTML = Sec
            newtime = window.setTimeout('getTime();' , 1000)
        }
        getTime()
        // 슬라이더
        new Swiper('.swiper-container01',{
            speed: 1000,
            loop:true,
            spaceBetween: 0,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
       },
       pagination: {
          el: '.swiper-pagination',          
        }
        })
        new Swiper('.swiper-container02',{
            speed: 1000,
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            autoplay: {
            delay: 2600,
            disableOnInteraction: false,
       },
        })

