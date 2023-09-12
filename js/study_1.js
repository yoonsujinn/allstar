document.addEventListener("DOMContentLoaded", function() {
  const study_html = document.querySelectorAll('.study_html');
  const right_con = document.querySelectorAll('.right_con');

  study_html.forEach((a) => {
    a.addEventListener("click", function(e) {
      // 모든 li 요소에서 'active_2' 클래스를 제거합니다.
      study_html.forEach((b) => {
        b.classList.remove('active_2');
      });

      // 클릭한 li 요소에 'active_2' 클래스를 추가합니다.
      a.classList.add('active_2');

      const study_html_1 = document.getElementById('study_html_1');
      const study_html_2 = document.getElementById('study_html_2');
      const right_con_1 = document.getElementById('right_con_1');
      const right_con_2 = document.getElementById('right_con_2');

      right_con.forEach((b) => {
      b.classList.remove('active_3');
   });

      if( a == study_html_1) {
        right_con_1.classList.add('active_3');
      }else if (a == study_html_2) {
        right_con_2.classList.add('active_3');
      }


      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const nav_2_li = document.querySelectorAll('.nav_2_li');

    nav_2_li.forEach((a) => {
      a.addEventListener("click", function(e) {
        // 모든 li 요소에서 'active_2' 클래스를 제거합니다.
        nav_2_li.forEach((b) => {
          b.classList.remove('active_1');
        });

        a.classList.add('active_1');
      });
    });
  });
