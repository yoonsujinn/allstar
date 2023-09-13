document.addEventListener("DOMContentLoaded", function() {
  const study_li = document.querySelectorAll('.study_li');
  const right_con = document.querySelectorAll('.right_con');

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

      if( a == study_li_1) {
        right_con_1.classList.add('active_3');
      }else if (a == study_li_2) {
        right_con_2.classList.add('active_3');
      }else if (a == study_li_3) {
        right_con_3.classList.add('active_3');
      }else if (a == study_li_4) {
        right_con_4.classList.add('active_3');
      }else if (a == study_li_5) {
        right_con_5.classList.add('active_3');
      }else if (a == study_li_6) {
        right_con_6.classList.add('active_3');
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
        if( a == nav_2_li_1) {
          study_title.textContent = 'Study #Html & Css';
          bar_1.classList.add('active_5');

        }else if (a == nav_2_li_2) {
          study_title.textContent = 'Study #JavaScript';
          bar_2.classList.add('active_5');
        }


      });
    });
  });
