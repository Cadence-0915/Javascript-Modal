$(".lightBoxLink").on("click",function(){
	$("#image1").attr("src", $(this).attr("src"));
	$(".outerLightBox").fadeIn(2500);
	if ($(this).attr("src") == "eiffeltower.jpg"){
	$("#text1").text("This is the Eiffel Tower in Paris at night.");
	$("img").show();
		}
else if ($(this).attr("src") == "hotel_beaubourg.jpg"){
	$("img").show();
	$("#text1").text("This is the Hotel Beaubourg at night.");
			} 	
else{
	$("img").hide();
	$("#text1").text("Welcome!");
	$("#text1").css({"margin":"300px"});
	}
});

$(".outerLightBox").on("click",function(x){
	x.preventDefault();
	$(".outerLightBox").hide();
	$("#text1").css("margin", "0px");
});