function myfunction(event){
	
var bill=document.getElementById('bill').value;
var service=document.getElementById('service').value;
var split=document.getElementById('split').value;

var tip =(bill*(service/100))/split;
document.getElementById('result').value=tip+"for each" ;


}