document.addEventListener("DOMContentLoaded", function() {
  const study_li = document.querySelectorAll('.study_li');
  const right_con = document.querySelectorAll('.right_con');
  const scroll_topp1 = document.querySelector('.scroll_topp1');
  const scroll_topp2 = document.querySelector('.scroll_topp2');
  const scroll_topp3 = document.querySelector('.scroll_topp3');
  const scroll_topp4 = document.querySelector('.scroll_topp4');
  const scroll_topp5 = document.querySelector('.scroll_topp5');
  const scroll_topp6 = document.querySelector('.scroll_topp6');
  const scroll_topp7 = document.querySelector('.scroll_topp7');
  const scroll_topp8 = document.querySelector('.scroll_topp8');
  const scroll_topp9 = document.querySelector('.scroll_topp9');
  const scroll_topp10 = document.querySelector('.scroll_topp10');
  const scroll_topp11 = document.querySelector('.scroll_topp11');
  const scroll_topp12 = document.querySelector('.scroll_topp12');
  const scroll_topp13 = document.querySelector('.scroll_topp13');
  const scroll_topp14 = document.querySelector('.scroll_topp14');
  const scroll_topp15 = document.querySelector('.scroll_topp15');


  study_li.forEach((a) => {
    a.addEventListener("click", function(e) {
      // 모든 li 요소에서 'active_2' 클래스를 제거합니다.
      study_li.forEach((b) => {
        b.classList.remove('active_2');
      });
      right_con.forEach((b) => {
        b.classList.remove('active_3');
      });
      // 클릭한 li 요소에 'active_2' 클래스를 추가합니다.
      a.classList.add('active_2');

      if( a == study_li_0) {
        right_con_10.classList.add('active_3');
        scroll_topp0.scrollIntoView({
         top: 0,
         behavior: "smooth"
        });
      }else if (a == study_li_1) {
        right_con_11.classList.add('active_3');
        scroll_topp1.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
      }else if (a == study_li_2) {
        right_con_17.classList.add('active_3');
        scroll_topp7.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
      }else if (a == study_li_3) {
        right_con_18.classList.add('active_3');
        scroll_topp8.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
      }else if (a == study_li_5) {
        right_con_12.classList.add('active_3');
        scroll_topp2.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
      }else if (a == study_li_6) {
        right_con_13.classList.add('active_3');
        scroll_topp3.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
      }else if (a == study_li_7) {
        right_con_19.classList.add('active_3');
        scroll_topp9.scrollIntoView({
          top: 0,
          behavior: "smooth"
        });
    }else if (a == study_li_8) {
      right_con_20.classList.add('active_3');
      scroll_topp10.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }else if (a == study_li_10) {
      right_con_14.classList.add('active_3');
      scroll_topp10.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }else if (a == study_li_11) {
      right_con_15.classList.add('active_3');
      scroll_topp5.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }else if (a == study_li_12) {
      right_con_16.classList.add('active_3');
      scroll_topp6.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }else if (a == study_li_13) {
      right_con_21.classList.add('active_3');
      scroll_topp11.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }else if (a == study_li_14) {
      right_con_22.classList.add('active_3');
      scroll_topp12.scrollIntoView({
        top: 0,
        behavior: "smooth"
      });
    }



      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const nav_2_li = document.querySelectorAll('.nav_2_li');
    const study_title = document.querySelector('.study_title');
    const bar = document.querySelectorAll('.bar');
    const right_con_wrap = document.querySelectorAll('.right_con_wrap');

    nav_2_li.forEach((a) => {
      a.addEventListener("click", function(e) {
        // nav_2_li 클릭하면 실행되는 이벤트이다.

        nav_2_li.forEach((b) => {
          b.classList.remove('active_1');
          // 모든 nav_2_li 요소에서 'active_2' 클래스 제거
        });

        bar.forEach((b) => {
          b.classList.remove('active_5');
          // 모든 bar 요소에서 'active_2' active_5클래스  제거
        });

        // 클릭한 요소에만 클래스 추가
        a.classList.add('active_1');
        // study_title 내용 변경
        if( a == nav_2_li_10) {
          study_title.textContent = 'Study #소프트웨어 공학';
          bar_10.classList.add('active_5');
        }else if (a == nav_2_li_11) {
          study_title.textContent = 'Study #데이터베이스';
          bar_11.classList.add('active_5');
        }else if (a == nav_3_li_12) {
          study_title.textContent = 'Study #네트워크';
          bar_12.classList.add('active_5');
        }else if (a == nav_3_li_13) {
          study_title.textContent = 'Study #C, Java';
          bar_13.classList.add('active_5');
        }




      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var screenWidth = document.getElementById("screenWidth");
    var screenHeight = document.getElementById("screenHeight");

    function updateScreenSize() {
        screenWidth.textContent = window.innerWidth;
        screenHeight.textContent = window.innerHeight;
        console.log(window.innerHeight)
    }
    // 초기에 화면 크기 정보 업데이트
    updateScreenSize();
    // 브라우저 크기가 변경될 때마다 화면 크기 정보 업데이트
    window.addEventListener("resize", updateScreenSize);




  });
