function myfunction(){
var tip=0;
var bill=0;
var service=0;
var split=0;	
bill=document.getElementById('bill').value;
service=document.getElementById('service').value;
split=document.getElementById('split').value;

tip =(bill*(service/100))/split;
document.getElementById('result').innerHTML = tip;
}