$(document).ready(function(){
	$("#container").append("<button class='generate'>Generate Property</button>");
	
	var propNum;

	var sqFt;

	var cost;
	
	$("#container").on('click', '.generate', function(){

		// for (var i=0; i<10; i++){
			propNum = randomNumber(100, 9999);
			sqFt = randomNumber(1000, 9999);
			cost = randomNumber(15, 100);

		// var el = "<div class='newProperty'>" +
		// 			"<div>Property ID : " + propNum + "</div>" +
		// 			"<div>" + sqFt+ " Sq. Ft.</div>" +
		// 			"<div>$" + cost + " / sq.ft.</div>" +
		// 			"<div><button class='removeButton'>Remove</button></div>"
		// 			"</div>";
		
		// $("#container").append(el);
		
		$("#container").append('<div class="property"></div>');
		var $el = $("#container").children().last();
		
		$el.append("<div class='propertyID'>Property ID: " + propNum + "</div>");
		$el.append("<div class='sqFt'>" + sqFt + " Sq. Ft.</div>");
		$el.append("<div class='costSqFt'>$" + cost + " / Sq. Ft.</div>");
		$el.append("<div class='removeButton'><button class='remove'>Remove</button></div>");
		
		$el.hide()
			//.delay(500)
			.slideDown(300);
		// }
	});

	$("#container").on('click', '.remove', function(){
		$(this).parent().parent().slideUp(300, function(){
			$(this).remove();
		});
		
	}); 
});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}