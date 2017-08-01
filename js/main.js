var searchAux;
$(document).ready(function(){
    $("#search").click(function(){
        document.getElementById("searchButton").style.display = "block";
    	document.getElementById("unique-navbar").style.display = "none";
    });

});

$(document).ready(function(){
    $("#noSearch").click(function(){
        document.getElementById("searchButton").style.display = "none";
    	document.getElementById("unique-navbar").style.display = "block";
    });

});
$(document).keyup(function(e) {
	searchAux = document.getElementById("searchButton").style.display = "none";
	if (e.keyCode == 27) { // escape key maps to keycode `27`
    	if (searchAux) {
    		document.getElementById("searchButton").style.display = "none";
    		document.getElementById("unique-navbar").style.display = "block";
    	}   
    }
});

