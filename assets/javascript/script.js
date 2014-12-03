$(document).ready(function() {

	$(".clicky").hover(function() {
		$(".clicky").addClass("jTransform");
	}, function() {
     	$(".clicky").removeClass("jTransform");
	});

	$(".clicky").click(function() {
		$(".secret").text("Secret Deal");
	});

	$(".secret3").hover(function() {
		$(".secret3").css("color", "red")
	}, function() {
     	$(".secret3").css("color", "black");
	});

	$(".secret2").hover(function() {
		$(".secret2").css("color", "green")
	}, function() {
     	$(".secret2").css("color", "black");
	});

	$(".secret2").click(function() {
		$(".happy").show();
		$(".sad").hide();
	});

	$(".secret3").click(function() {
		$(".sad").show();
		$(".happy").hide();
	});

});