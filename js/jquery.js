
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


    // event.deltaY 값은 스크롤 방향과 스크롤 양을 나타냅니다.
    // event.deltaY > 0 일 때는 아래로 스크롤, event.deltaY < 0 일 때는 위로 스크롤입니다.

    var $html = $("html");
    var page = 1;
    var lastPage = $(".pages").length;
    // 마지막페이지



    window.addEventListener("wheel", function(e){
    	e.preventDefault();
    },{passive : false});
    // 원래 마우스 휠 이벤트를 막는다.

    $(window).on("wheel", function(e){
    	if($html.is(":animated")) return;
    	if(e.originalEvent.deltaY > 80){
        console.log("아래"+e+page);
        // 첫번째 페이지 마지막 페이지 인식
    		if(page == 5) return;
      		page++;
    	}else if(e.originalEvent.deltaY < 80){
        console.log("위"+e+page);
      		if(page == 1) return;
        	page--;
    	}
      //
    	var posTop = (page-1) * $(window).height();
    	$html.animate({scrollTop : posTop});

});
