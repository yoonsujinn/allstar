
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


    // page_4_li active_1 on off
    document.addEventListener("DOMContentLoaded", function() {
        const page_4_li = document.querySelectorAll('.page_4_li');

        const page_4_li_1 = document.querySelectorAll('#page_4_li_1');
        const page_4_li_2 = document.querySelectorAll('#page_4_li_2');
        const page_4_li_3 = document.querySelectorAll('#page_4_li_3');

        page_4_li.forEach((liElement) => {
            liElement.addEventListener("click", function(e) {
              page_4_li.forEach((otherLi) => {
             otherLi.classList.remove('active_1');
         });
         // 클릭한 li 요소에 'active_1' 클래스를 추가합니다.
         liElement.classList.add('active_1');
          if (document.querySelector('#page_4_li_1').classList.contains('active_1')) {
              document.querySelector('#rec_4_right_1').classList.add('active3')
              document.querySelector('#rec_4_right_2').classList.remove('active3');
              document.querySelector('#rec_4_right_3').classList.remove('active3');
        } else if (document.querySelector('#page_4_li_2').classList.contains('active_1')) {
            document.querySelector('#rec_4_right_2').classList.add('active3')
            document.querySelector('#rec_4_right_1').classList.remove('active3');
            document.querySelector('#rec_4_right_3').classList.remove('active3');
        } else if (document.querySelector('#page_4_li_3').classList.contains('active_1')) {
          document.querySelector('#rec_4_right_3').classList.add('active3')
          document.querySelector('#rec_4_right_2').classList.remove('active3');
          document.querySelector('#rec_4_right_1').classList.remove('active3');
        }
            });
          });
        });


        // page_4_web_list_1 active_1 on off
        document.addEventListener("DOMContentLoaded", function() {
            const page_4_web_list_1 = document.querySelectorAll('.page_4_web_list_1');
            page_4_web_list_1.forEach((liElement) => {
                liElement.addEventListener("click", function(e) {
                  page_4_web_list_1.forEach((otherLi) => {
                 otherLi.classList.remove('active_2');
             });
             // 클릭한 li 요소에 'active_1' 클래스를 추가합니다.
             liElement.classList.add('active_2');
                });
              });
            });






    document.addEventListener('DOMContentLoaded', function() {
          //  DOMContentLoaded는 모든 html문서와 css가 로드가 된 후에 실행된다는 뜻이다.
           var menuItems = document.getElementsByClassName('menu_a');
           // menu_a 클래스 저장
           var mobileSideMenu = document.querySelector('.mobile_side_menu');
           // mobile_side_menu 클래스 저장
           for (var i = 0; i < menuItems.length; i++) {
               menuItems[i].addEventListener('click', function(event) {
                 // addEventListener는 이벤트를 처리하는 메서드중 하나다.
                   event.preventDefault();
                   //preventDefault =  a링크이동을 막는다.
                   var target = this.getAttribute('href');
                   //this.getAttribute는 href 안에 들어있는 요소를 가져온다.
                   document.querySelector(target).scrollIntoView({
                       behavior: 'smooth'
                   });
                   // Hide the mobile_side_menu
                   document.querySelector('.mobile_side_menu').classList.remove('mobile_side_menu_on');
                   document.querySelector('.mobile_menu').classList.remove('mobile_menu_on');
               });
           }
       });


// 한화면씩 이동하는 스크롤
$(document).ready(function() {
    var isAnimating = false; // 애니메이션이 실행 중인지 여부를 추적하는 플래그

    $(window).on('mousewheel DOMMouseScroll', function(event) { // 스크롤 이벤트 핸들러 등록
    event.preventDefault(); // 기본 스크롤 동작 막기
    if (isAnimating) {return false;}// 애니메이션이 실행 중이면 종료

    var page44 = document.getElementById("page_4"); // 요소를 ID로 선택
    var elementHeight = page44.offsetHeight;
    var screenHeight = window.innerHeight; // 화면 높이를 측정
    var currentScrollTop = $(window).scrollTop(); // 현재 스크롤 위치 가져오기


          var newScrollTop;
          if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
              // 마우스 휠을 위로 스크롤했을 때
              newScrollTop = currentScrollTop - elementHeight;
              // console.log(newScrollTop+"실제 이동되는 스크롤");
              // console.log(currentScrollTop+"현재스크롤위치");
              // console.log(elementHeight+"화면높이");
          } else {
              // 마우스 휠을 아래로 스크롤했을 때
              newScrollTop = currentScrollTop + elementHeight;
              // console.log(newScrollTop+"실제 이동되는 스크롤");
              // console.log(currentScrollTop+"현재스크롤위치");
              // console.log(elementHeight+"화면높이");
          }

          // 스크롤 애니메이션 적용
          isAnimating = true; // 애니메이션 실행 중 플래그 설정
          $("html, body").animate({ scrollTop: newScrollTop }, 500, function() {
              // 애니메이션이 완료되면 플래그를 다시 false로 설정
              isAnimating = false;
          });
      });
  });
