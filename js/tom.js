function adjust_to_screen() {
	var breite = $(window).innerWidth()*0.95;
	var hoehe =  $(window).innerHeight()*0.95;
    $("#thevideo").css("width", breite);
    $("#thevideo").css("height", hoehe);
    $("#thevideo").css("margin-left", -(breite/2));
    $("#thevideo").css("margin-top", -(hoehe/2));	
}

$(function(){  	
    adjust_to_screen();
    
    window.addEventListener("orientationchange", function() {
    	adjust_to_screen();
    })   
    window.addEventListener("resize", function() {
    	adjust_to_screen();
    }) 
})           
