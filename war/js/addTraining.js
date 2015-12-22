$(document).ready(function(){
	
	$('#addTrain').on('submit', function(e) {
		
		
		
		var train_title= $('#inputTitle').val();
		var train_description = $('#inputDescription').val();
		var train_domaine = $('#inputDomain').val();	
		
		
		
			var trainDetails = {
			        title: train_title,
			        description: train_description,
			        domaine: train_domaine,
			        exercices: JSON.stringify(exercicesArray)
				    };
			console.log(trainDetails);
			console.log(trainDetails.exercices[0]);
			
	
		$.ajax({  
		    type: "GET",  
		    url: "http://localhost:8888/addTraining", 
		    dataType : "json",
		    data: trainDetails,
		    success: function(result){  
		    	
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) { 
		        console.log("error");
		    } 
		               
		  }); 
		
	});
	
	
	
	  
});

