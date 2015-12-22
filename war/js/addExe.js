var exercicesArray =[];
$(document).ready(function(){

	var exerciceIterator = 1;
	
	
	$("#addExe").click(function(){
		var exercice =[];
		
		
		var title= $('#titleDescription').val();
		var description = $('#exerciceDescription').val();
		var time = $('#hourTime').val();
	

		 exercice = {
				exeNumber: exerciceIterator,
			    exeTitle: title,
			    exeDescription: description,
				exeTime: time
			};
		
        exercicesArray.push(exercice);
        
        $("#exeTable").append('<tr><td>'+exerciceIterator+
        		'</td><td>'+title+
        		'</td><td>'+description+
        		'</td><td>'+time+
        		'</td><td><button type="submit" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-remove"></span> </button></td></tr>');
        
        exerciceIterator++;
        
        
       
        });
        
        
      
        
    });
