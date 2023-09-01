
// 자바스크립트 모바일 메뉴 온/오프
document.addEventListener('DOMContentLoaded', function(){
  // 왼쪽 상단 메뉴 버튼 클릭
    document.querySelector(".mobile_menu").addEventListener("click", function(e){
        if ( document.querySelector('.mobile_side_menu').classList.contains('mobile_side_menu_on') ){
            //메뉴닫힘
            document.querySelector('.mobile_side_menu').classList.remove('mobile_side_menu_on');
            document.querySelector('.mobile_menu').classList.remove('mobile_menu_on');
        } else {
            //메뉴펼처짐
            document.querySelector('.mobile_side_menu').classList.add('mobile_side_menu_on');
            document.querySelector('.mobile_menu').classList.add('mobile_menu_on');
        }
      });
    });


    // var t = document.getElementsByClassName('.menu_a');
    //     t.addEventListener('click', function() {
    //       console.log(i);
    //     alert('Box clicked!');
    // });

    document.addEventListener('DOMContentLoaded', function() {
           var menuItems = document.getElementsByClassName('menu_a');
           var mobileSideMenu = document.querySelector('.mobile_side_menu');

           for (var i = 0; i < menuItems.length; i++) {
               menuItems[i].addEventListener('click', function(event) {
                   event.preventDefault();
                   var target = this.getAttribute('href');
                   document.querySelector(target).scrollIntoView({
                       behavior: 'smooth'
                   });

                   // Hide the mobile_side_menu
                   document.querySelector('.mobile_side_menu').classList.remove('mobile_side_menu_on');
                   document.querySelector('.mobile_menu').classList.remove('mobile_menu_on');
               });
           }
       });
