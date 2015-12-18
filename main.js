// This is the javascript for my modal. Line 2 and 3 are setting the source of the images and the amount of time it takes for them to fade in. I've set it to 3 seconds.
$(".lightBoxLink").on("click",function(){
	$("#image1").attr("src", $(this).attr("src"));
	$(".outerLightBox").fadeIn(3000);
	
// Line 8 changes the default text under the image, of the Eiffel Tower. The original text, on Line 15 of the index.html page, was blank.
if ($(this).attr("src") == "eiffeltower.jpg"){
	$("#text1").text("This is the Eiffel Tower in Paris at night.");
	$("img").show();
		}
// Line 14 also changes the default text under the second image, of the Hotel Beaubourg.
else if ($(this).attr("src") == "hotel_beaubourg.jpg"){
	$("img").show();
	$("#text1").text("This is the Hotel Beaubourg at night.");
			} 	
// Line 19 is the text that will show up if one or both of the images do not show up for any reason.
else{
	$("img").hide();
	$("#text1").text("Welcome!");
	$("#text1").css({"margin":"300px"});
	}
});

// This is the code to let the user close the image by clicking anywhere within the window of the website, including on the pictures themselves. 
$(".outerLightBox").on("click",function(e){
	e.preventDefault();
	$(".outerLightBox").hide();
	$("#text1").css("margin", "0px");
});