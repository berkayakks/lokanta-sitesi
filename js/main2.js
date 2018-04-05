$(function(){

			$(".navbar-nav a").click(function () {//.nav-pills altındaki tüm a'lara tıklayınca bu metod çalışır

          var divId = $(this).attr("data-panelId");//bi değişkene tıklanan butonun panel Id sini çektim

            $("html, body").animate({
                scrollTop: $(divId).offset().top
            }, 1000);
         
        });
});