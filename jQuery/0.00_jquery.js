$(document).ready(function(){

// alert("jQuery is on!")

	$("#hide").click(function(){
		$("#image").hide();
	});


	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(10000);

	});

	$("#explode").click(function(){
		$("#image").hide("explode",{pieces: 80}, 2000);
	});


	$("#minimize").click(function() {
  $( "#image" ).toggle( "blind" );
});


		$("#maximize").click(function() {
  $( "#image" ).toggle( "blind" );
});

$("#pulse").click(function() {
  $( "#image" ).toggle("pulsate", 3000);
});


$("#puff").click(function() {
  $( "#image" ).toggle( "puff", 4000);
});












});


