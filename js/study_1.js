// potfolio_list active_1 on off
document.addEventListener("DOMContentLoaded", function() {
const study_html = document.querySelectorAll('.study_html');
const right_con_1 = document.querySelector('#right_con_1');
const right_con_2 = document.querySelector('#right_con_2');
// const study_html_3 = document.querySelector('#study_html_3');


    study_html.forEach((a) => {
      a.addEventListener("click", function(e) {
      // 모든 li 요소에서 'active_2' 클래스를 제거합니다.
      study_html.forEach((b) => {
      b.classList.remove('active_2');
   });
     // 클릭한 li 요소에 'active_2' 클래스를 추  가합니다.
     a.classList.add('active_2');

     if( a == study_html_1 ) {
       right_con_1.classList.add('active_3');
     } else if( a ==  study_html_2) {
       // right_con_1.classList.remove('active_3')
       right_con_2.classList.add('active_3');
     }
    });
  });
});
