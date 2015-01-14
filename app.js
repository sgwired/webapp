//$ in front of var name means its a jquery object 
var main = function () {
	var cars = ["Tesla S",
	"Nissan Leaf",
	"BMW i3",
	"BMW i8",
	"Chevy Volt",
	"Kia Sol Electric"];
	$(".tabs a span").toArray().forEach(function (element) {
		var $element = $(element);
		// create a click handler for this element
		$element.on("click", function () {
			var $content,
			$input,
			$button,
			i;
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if ($element.parent().is(":nth-child(1)")) {
				// newest first, so we have to go through the array backwards
				$content = $("<ul>");
				for (i = cars.length-1; i >= 0; i--) {
					$content.append($("<li>").text(cars[i]));
				}
			} else if ($element.parent().is(":nth-child(2)")) {
				// oldest first, so we go through the array forwards
				$content = $("<ul>");
				cars.forEach(function (car) {
					$content.append($("<li>").text(car));
				});
			} else if ($element.parent().is(":nth-child(3)")) {
				// input a new to-do
				$input = $("<input>"),
				$button = $("<button>").text("+");
				$button.on("click", function () {
					if ($input.val() !== "") {
						cars.push($input.val());
						$input.val("");
					}
				});
				$content = $("<div>").append($input).append($button);
			}
			$("main .content").append($content);
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);