$(document).ready(function(){
	
	$('#addTrain').on('submit', function(e) {
		
		
		var train_title= $('#inputTitle').val();
		var train_description = $('#inputDescription').val();
		var train_domaine = $('#inputDomain').val();
		
		var trainingJSON = {
		        title: train_title,
		        description: train_description,
		        domaine: train_domaine
		    };
	
		$.ajax({  
		    type: "GET",  
		    url: "http://localhost:8888/addTraining", 
		    dataType : "json",
		    data: trainingJSON,
		    success: function(result){  
		    	
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) { 
		        console.log("error");
		    } 
		               
		  }); 
		
	});
	
	
	
	  
});

