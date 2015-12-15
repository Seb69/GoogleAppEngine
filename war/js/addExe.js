function addExe() {
	
    var title = document.getElementById("titleDescription").value;
    var description = document.getElementById("exerciceDescription").value;
    var time = document.getElementById("hourTime").value;

    
    var tr = document.createElement('tr');
    
    
    var td1 = document.createElement('td');
    var textNode = document.createTextNode("1");
    td1.appendChild(textNode);
    tr.appendChild(td1);
    
    var td2 = document.createElement('td');
    tr.appendChild(td2);
    var textNode = document.createTextNode(title);
    td2.appendChild(textNode);
    
    var td3 = document.createElement('td');
    tr.appendChild(td3);
    var textNode = document.createTextNode(description);
    td3.appendChild(textNode);
    
    var td4 = document.createElement('td');
    tr.appendChild(td4);
    var textNode = document.createTextNode(time);
    td4.appendChild(textNode);
    
    var td5 = document.createElement('td');
    td5.innerHTML ='<button type="submit" class="btn btn-danger btn-sm" > <span class="glyphicon glyphicon-remove"></span> </button>';
    td5.childNodes;
    tr.appendChild(td5);
   

    
    //<td> <button type="submit" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-remove"></span> </button></td>
    
    
    var addTable = document.getElementById("exeTable");
    addTable.appendChild(tr);
    
    
    
}