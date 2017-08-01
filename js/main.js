var searchAux;
$(document).ready(function(){
    searchAux = document.getElementById("searchButton").style.display = "none";
})
//navbar search button
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
	
	if (e.keyCode == 27) { // escape key maps to keycode `27`
    	if (searchAux) {
    		document.getElementById("searchButton").style.display = "none";
    		document.getElementById("unique-navbar").style.display = "block";
    	}   
    }
});


function showAllCountries(){
        $("#all-countries").fadeIn("slow")
        document.getElementById("eeuu-countries").style.display = "none";
        document.getElementById("america-countries").style.display = "none";
        document.getElementById("europe-countries").style.display = "none";
        document.getElementById("asia-countries").style.display = "none";    

}
function allCountries(){
  aux = setTimeout(showAllCountries, 100);
}

function americaCountries(){
  aux = setTimeout(showAmericaCountries, 100);
}
function europeCountries(){
  aux = setTimeout(showEuropeCountries, 100);
}
function usaCountries(){
  aux = setTimeout(showUsaCountries, 100);
}
function asiaCountries(){
  aux = setTimeout(showAsiaCountries, 100);
}





function showAmericaCountries(){
    $("#america-countries").fadeIn("slow")
    document.getElementById("all-countries").style.display = "none";
    document.getElementById("eeuu-countries").style.display = "none";
    document.getElementById("europe-countries").style.display = "none";
    document.getElementById("asia-countries").style.display = "none";
}



function showEuropeCountries(){
    $("#europe-countries").fadeIn("slow")
    document.getElementById("all-countries").style.display = "none";
    document.getElementById("eeuu-countries").style.display = "none";
    document.getElementById("america-countries").style.display = "none";
    document.getElementById("asia-countries").style.display = "none";
}



function showUsaCountries(){
    $("#eeuu-countries").fadeIn("slow")
    document.getElementById("all-countries").style.display = "none";
    document.getElementById("europe-countries").style.display = "none";
    document.getElementById("america-countries").style.display = "none";
    document.getElementById("asia-countries").style.display = "none";
}



function showAsiaCountries(){
    $("#asia-countries").fadeIn("slow")
    document.getElementById("all-countries").style.display = "none";
    document.getElementById("eeuu-countries").style.display = "none";
    document.getElementById("america-countries").style.display = "none";
    document.getElementById("europe-countries").style.display = "none";
}



