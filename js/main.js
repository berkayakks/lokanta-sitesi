$(function(){
	$(window).scroll(function(){
		var heigth=$(this).scrollTop();
		navbar=$('.fixed-top');
		if (heigth>400) {
			
			navbar.addClass('change-fix-top');
			
		}else{
			navbar.removeClass('change-fix-top');
		}
	});

$(".navbar-nav a").click(function () {//.nav-pills altındaki tüm a'lara tıklayınca bu metod çalışır

          var divId = $(this).attr("data-panelId");//bi değişkene tıklanan butonun panel Id sini çektim
         
            $("html, body").stop().animate({
                scrollTop: $(divId).offset().top
            },1000);
         
        });
		
		


});




