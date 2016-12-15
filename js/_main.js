$(document).ready(function(){


	// hover effect on project




});

$(".project-wrapper").hover(function(event){
		console.log("event",event);
		var currentId = event.currentTarget.id;
		$("#"+currentId +" .overlay").show();

		// $(".overlay").show();
		console.log("project-wrapper mouseover","mousover");
	},function(){

		$(".overlay").hide();


	});
