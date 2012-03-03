$(document).ready(function(){
      

       $('<div id = "backgroundPopup"> </div>').appendTo($('body'));
      var popupStatus = 0;
      $(".contactname").click(
	function(){
		centerPopup();
		loadPopup();
	});
      $('#backgroundPopup').click(	
	function(){
		disablePopup();
	});

    

	function loadPopup(){
		if (popupStatus==0){
		  $("#backgroundPopup").css({
			"opacity": "0.7"
			});
		  $("#backgroundPopup").fadeIn("slow");
		  $(".contactname").css("background", "white").css("z-index", "2").fadeIn("slow");
		  popupStatus = 1;
		}		
	}

	function disablePopup(){
		if (popupStatus == 1){
		  $("#backgroundPopup").fadeOut("slow");
		  $(".contactname").fadeOut("slow");
		  popupStatus = 0;
		}
	}

	function centerPopup(){
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupHeight = $("#popupContact").height();
		var popupWidth = $("popupContact").width();

		$(".contactname").css({
			"position":"absolute",
			"top":windowHeight/2 - popupHeight/2,
			"left":windowWidth/2 - popupWidth/2
			});

		$("#backgroundPopup").css({
			"height":windowHeight
		});
	}
	
})
