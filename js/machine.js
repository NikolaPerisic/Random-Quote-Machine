function newGradient() {
  var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  var randomGradient = 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')';
  return $("body").css("background", randomGradient);
}

// thanks to Juan Martinez for providing json gist

function getQuote() {
	$.getJSON("https://gist.githubusercontent.com/jbmartinez/6982650ade1ee5e9527f/raw/e7099c184abec96b9d3c63ecb1fa44170eaf5299/quotes.json", function(json){
  		var ranNum = Math.floor(Math.random() * json.length);
  		var randomQuote = json[ranNum];
  		$(".qouteText").text('"'+ randomQuote.text + '"');
    	$(".author").text("— " + randomQuote.author);
  	});
}

function tweetQuote() {
  var quote = $(".qouteText").text();
  var author = $(".author").text();
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(quote) +
    " " +
    encodeURIComponent(author);
  window.open(tweetUrl);
}


$(document).ready(function() {
	$(".hidden").fadeIn(2000).removeClass("hidden");
	$("#quoteBtn").on("click", function(){
		$("#quoteBox").fadeOut(1000, function(){
			getQuote();
			newGradient();
		});
		$("#quoteBox").delay(1000).fadeIn(2000);
    });

    $("#twitterBtn").on("click", tweetQuote);
});