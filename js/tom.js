$(function(){  	
	var breite = $(window).innerWidth()*0.95;
	var hoehe =  $(window).innerHeight()*0.95;
    $("#thevideo").css("width", breite);
    $("#thevideo").css("height", hoehe);
    $("#thevideo").css("margin-left", -(breite/2));
    $("#thevideo").css("margin-top", -(hoehe/2));
})           
