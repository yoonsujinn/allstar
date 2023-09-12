//
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


    // page_4_li active_1 on off
    document.addEventListener("DOMContentLoaded", function() {
        const page_4_li = document.querySelectorAll('.page_4_li');
        const page_4_li_1 = document.querySelectorAll('#page_4_li_1');
        const page_4_li_2 = document.querySelectorAll('#page_4_li_2');
        const page_4_li_3 = document.querySelectorAll('#page_4_li_3');

        const newBackgroundImageUrl = 'url(./img/index/rec_3_img_1.png)';

        page_4_li.forEach((liElement) => {
            liElement.addEventListener("click", function(e) {
              page_4_li.forEach((otherLi) => {
             otherLi.classList.remove('active_1');
         });
     // 클릭한 li 요소에 'active_1' 클래스를 추가합니다.
      page_4_li.forEach((liElement, index) => {
        liElement.addEventListener("click", function(e) {
          page_4_li.forEach((otherLi, otherIndex) => {
            otherLi.classList.remove('active_1');
            const recRight = document.querySelector(`#rec_4_right_${otherIndex + 1}`);
            recRight.classList.toggle('active3', index === otherIndex);
          });

          // 클릭한 li 요소에 'active_1' 클래스를 추가합니다.
          liElement.classList.add('active_1');
          rec_3.style.backgroundImage = newBackgroundImageUrl;
        });
      });
    });
  });
});
    // potfolio_list active_1 on off
  document.addEventListener("DOMContentLoaded", function() {
    const potfolio_list = document.querySelectorAll('.potfolio_list');

        potfolio_list.forEach((a) => {
          a.addEventListener("click", function(e) {
          // 모든 li 요소에서 'active_2' 클래스를 제거합니다.
          potfolio_list.forEach((b) => {
          b.classList.remove('active_2');
       });
         // 클릭한 li 요소에 'active_2' 클래스를 추가합니다.
         a.classList.add('active_2');

         const rec_3 = document.querySelector('#rec_3');
         const newBackgroundImageUrl = 'url(./img/index/web_list_1.png)';
         const webListImages = [
           'url(./img/index/web_list_1.png)','url(./img/index/web_list_2.png)'
         ];
         const designListImages = [
           'url(./img/index/design_list_1.png)','url(./img/index/design_list_2.png)','url(./img/index/design_list_3.png)'
         ];
         const studyListImages = [
           'url(./img/index/study_list_1.png)','url(./img/index/study_list_2.png)','url(./img/index/study_list_3.png)'
         ];

         if( a == web_list_1 ) {
           rec_3.style.backgroundImage = webListImages;
         }else if ( a == web_list_2 ) {
           rec_3.style.backgroundImage = webListImages[1];
         }else if ( a == design_list_1 ) {
           rec_3.style.backgroundImage = designListImages[0];
         }else if ( a == design_list_2 ) {
           rec_3.style.backgroundImage = designListImages[1];
         }else if ( a == design_list_3 ) {
           rec_3.style.backgroundImage = designListImages[2];
         }else if ( a == study_list_1 ) {
           rec_3.style.backgroundImage = studyListImages[0];
         }else if ( a == study_list_2 ) {
           rec_3.style.backgroundImage = studyListImages[1];
         }else if ( a == study_list_3 ) {
           rec_3.style.backgroundImage = studyListImages[2];
         }
         // 그리고, background이미지를 변경합니다.

         console.log(webListImages);
         console.log(designListImages);
         console.log(studyListImages);

         // rec_3 요소의 배경 이미지 설정


            });
          });


        });
