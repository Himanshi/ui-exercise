$(document).ready(function () {
    $(".trigger").click(function () {
        $(".sidebar").toggle("slow");
        $(".sidebar").toggleClass("hidden");
        $(".content").toggleClass("full-width");
        return false;
    });
	  		
});