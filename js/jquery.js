  // 한 화면씩 이동.
  //
  // window.addEventListener("wheel", function(event) {
  //
  //   // console.log("현재 스크롤 위치: " + scrollY + "px");
  //   // console.log("현재 화면 크기: " + window.innerHeight + "px");
  //   // console.log("페이지: " + scrollY / window.innerHeight);
  //
  //   var pageNumber = scrollY / window.innerHeight;
  //   	if(event.deltaY < 0){
  //        window.scrollBy(0, -(window.innerHeight - 100));
  //     }else {
  //       // scrollBy(x,y) - 수직 스크롤양 / 수평 스크롤양 지정
  //       window.scrollBy (0, window.innerHeight - 100);
  //     }
  // });
  //
  //
  //




  window.addEventListener("scroll", function() {


    var scrollY = window.scrollY; // 수직 스크롤 위치
    var pageNumber = scrollY / window.innerHeight;

    const profile_li = document.querySelectorAll('.profile_li');
    const page_2_Certificate = document.querySelectorAll('.page_2_Certificate');
    const page_2_work = document.querySelectorAll('.page_2_work');

    // 0페이지일때
    if ( pageNumber === 0) {
        profile_li.forEach((li) => {
            li.style.transform = 'translate(90%, 0%)';
            li.style.opacity = '0';
        });
        page_2_Certificate.forEach((obj) => {
            obj.style.transform = 'translate(9%, 0%)'; // transform 속성 변경
            obj.style.opacity = '0'; // opacity 속성 변경
        });
        page_2_work.forEach((e) => {
            e.style.transform = 'translate(10%, 0%)'; // transform 속성 변경
            e.style.opacity = '0'; // opacity 속성 변경
        });
        // 1페이지일때
    // } else if (pageNumber > 0.9 || pageNumber >= 1.9) {
    } else if (pageNumber === 1 ) {

        profile_li.forEach((li) => {
            li.style.transform = 'translate(0%, 0%)';
            li.style.opacity = '1';
        });
        page_2_Certificate.forEach((obj) => {
            obj.style.transform = 'translate(0%, 0%)'; // transform 속성 변경
            obj.style.opacity = '1'; // opacity 속성 변경
        });
        page_2_work.forEach((e) => {
            e.style.transform = 'translate(0%, 0%)'; // transform 속성 변경
            e.style.opacity = '1'; // opacity 속성 변경
        });
        // 2~3페이지일때
    // } else if (pageNumber >= 2 || pageNumber == 3 || pageNumber == 4) {
  } else if (pageNumber === 2) {

        profile_li.forEach((li) => {
            li.style.transform = 'translate(90%, 0%)';
            li.style.opacity = '0';
        });
        page_2_Certificate.forEach((obj) => {
            obj.style.transform = 'translate(9%, 0%)'; // transform 속성 변경
            obj.style.opacity = '0'; // opacity 속성 변경

        });
        page_2_work.forEach((e) => {
            e.style.transform = 'translate(10%, 0%)'; // transform 속성 변경
            e.style.opacity = '0'; // opacity 속성 변경
        });
    }

});

document.addEventListener('DOMContentLoaded', function(){
  // 왼쪽 상단 메뉴 버튼 클릭
  document.querySelector(".disign_contaner_X").addEventListener("click", function(e){
      if ( document.querySelector('.disign_contaner').classList.contains('disign_contaner_nav_active') ){
        //메뉴닫힘
        document.querySelector('.disign_contaner').classList.remove('disign_contaner_nav_active');
        document.querySelector('.disign_contaner').classList.remove('disign_contaner_nav_active');
      }
    });
  });

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


    // page_4_li active_1 on off
    document.addEventListener("DOMContentLoaded", function() {
      const page_4_li = document.querySelectorAll('.page_4_li');
      const rec_3 = document.querySelector('#rec_3');
      const newBackgroundImageUrl = 'url(./img/index/rec_3_img_1.gif)';

      page_4_li.forEach((s, index) => {
        s.addEventListener("click", function() {
          page_4_li.forEach((otherLi, otherIndex) => {
            otherLi.classList.remove('active_1');
            const recRight = document.querySelector(`#rec_4_right_${otherIndex + 1}`);
            recRight.classList.toggle('active3', index === otherIndex);
          });

          s.classList.add('active_1');
          rec_3.style.backgroundImage = newBackgroundImageUrl;
          document.getElementById('rec_3_wrap').onclick = null;





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
         const disign_con_3 = document.querySelector('#disign_con_3');
         const disign_con_2 = document.querySelector('#disign_con_2');
         const disign_con_1 = document.querySelector('#disign_con_1');
         const disign_title = document.querySelector('.disign_title');
         const rec_3 = document.querySelector('#rec_3');
         const ttop = document.querySelector('.ttop');




         if (a == web_list_1) {
           rec_3.style.backgroundImage = webListImages[0];
            document.getElementById('rec_3_wrap').onclick = function() {
            event.preventDefault(); // 기본 동작을 막음
             window.open("http://www.luminar.co.kr", "_blank");
        };
        } else if (a == web_list_2) {
            rec_3.style.backgroundImage = webListImages[1];
            // rec_3_wrap.href = "./html/game/guess_the_number_game.html";
            document.getElementById('rec_3_wrap').onclick = function() {
            event.preventDefault(); // 기본 동작을 막음
            window.open("./html/game/guess_the_number_game.html", "_blank");
        };
        }else if (a == design_list_1) {
            rec_3.style.backgroundImage = designListImages[0];
            event.preventDefault(); // 기본 동작(새 창 열림)을 막음
            disign_title.textContent = '병원 이미지 작업';
            disign_con_1.style.display = 'block';
            disign_con_2.style.display = 'none';
            disign_con_3.style.display = 'none';
            ttop.scrollIntoView({
             top: 0,
             behavior: "smooth" // 부드러운 스크롤 효과를 사용할 수 있습니다.
            });
            designList3ClickHandler();

        } else if (a == design_list_2) {
            rec_3.style.backgroundImage = designListImages[1];
            event.preventDefault(); // 기본 동작(새 창 열림)을 막음
            disign_title.textContent = '뷰티포스팅';
            disign_con_2.style.display = 'block';
            disign_con_3.style.display = 'none';
            disign_con_1.style.display = 'none';
            ttop.scrollIntoView({
             top: 0,
             behavior: "smooth" // 부드러운 스크롤 효과를 사용할 수 있습니다.
            });
            designList3ClickHandler();

        } else if (a == design_list_3) {
            rec_3.style.backgroundImage = designListImages[2];
            event.preventDefault(); // 기본 동작(새 창 열림)을 막음
            disign_title.textContent = '포트폴리오 초기 디자인';
            disign_con_2.style.display = 'none';
            disign_con_3.style.display = 'block';
            disign_con_1.style.display = 'none';
            ttop.scrollIntoView({
             top: 0,
             behavior: "smooth" // 부드러운 스크롤 효과를 사용할 수 있습니다.
            });
            designList3ClickHandler();

          }else if ( a == study_list_1 ) {
           rec_3.style.backgroundImage = studyListImages[0];
           document.getElementById('rec_3_wrap').onclick = function() {
           event.preventDefault(); // 기본 동작을 막음
           window.open("./html/study/study_1.html", "_blank");
         }
       }
      });
    });
    function designList3ClickHandler() {
      const disign_contaner_1 = document.getElementById("disign_contaner_1");
      disign_contaner_1.classList.add("disign_contaner_nav_active");
      // disign_contaner_1 요소에만 overflow를 auto로 설정
      disign_contaner_1.style.overflow = "auto";

      event.preventDefault(); // 기본 동작(새 창 열림)을 막음
  }

});

// 디자인 페이지가 열렸을때 스크롤을 고정하는 코드이다.
window.addEventListener("scroll", function(event) {
  var disign_contaner = document.querySelectorAll(".disign_contaner");
  var innerHeight = window.innerHeight * 3; //현재 화면 길이*3이면 3페이지이다.
  if (disign_contaner_1.classList.contains('disign_contaner_nav_active')) {
    window.scrollTo(0, innerHeight); //window.scrollTo는 스크롤의 위치를 변경한다.
  }
});
// querySelectorAll('.potfolio_list');


        // // 자바스크립트 모바일 메뉴 온/오프
        // document.addEventListener('DOMContentLoaded', function(){
        //
        //   var design_list_3  = document.querySelectorAll('.design_list_3');
        //   // 왼쪽 상단 메뉴 버튼 클릭
        //
        //       document.querySelector('.design_list_3').classList.contains('active_2') ){
        //         //disign_contaner_nav_active
        //         document.querySelector('.disign_contaner').classList.remove('disign_contaner_nav_active');
        //
        //       } else {
        //         //메뉴펼처짐
        //         document.querySelector('.disign_contaner').classList.add('disign_contaner_nav_active');
        //
        //       }
        //     });
