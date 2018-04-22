function results(){
/* var button = document.getElementById('submit'); */

var name = document.getElementById('name').value;
 
// button.onclick = function() {//
if (document.getElementById('kid').checked) {
   var  age = [document.getElementById('kid').value , '' ,'']; 
}
if (document.getElementById('teen'.checked)) {
    age = ['', document.getElementById('teen').value ,'']; 
}
 
if (document.getElementById('adult').checked) {
    age = [ '', '' , document.getElementById('adult').value]; 
}

if (document.getElementById('teen').checked && (document.getElementById('kid').checked)) {
    age = [document.getElementById('kid').value , document.getElementById('teen').value ,''];  
  } 
    
if (document.getElementById('teen').checked && (document.getElementById('adult').checked)) {
    age = ['', document.getElementById('teen').value , document.getElementById('adult').value]; 
  }
   
if (document.getElementById('adult').checked && (document.getElementById('kid').checked)) {
    age = [document.getElementById('kid').value ,'', document.getElementById('adult').value];
  }
if (document.getElementById('adult').checked && (document.getElementById('kid').checked) && (document.getElementById('teen').checked)) {
    age = [document.getElementById('kid').value , document.getElementById('teen').value , document.getElementById('adult').value];
  }
    
      
   var note= document.getElementById('note').value;

if (document.getElementById('yes').checked) {
   var ticket = document.getElementById('yes').value;
}
 else {
      ticket = document.getElementById('no').value;
}
    
    if (document.getElementById('male').selected) {
   var attendees = document.getElementById('male').value;
} else if (document.getElementById('female').selected) {
   attendees = document.getElementById('female').value; 
} else {
   attendees = document.getElementById('both').value;
}
 document.writeln("<h3>Thank you!</h3>");
 document.writeln("<h4>Here is your information:</h4>");
 document.write("Name of publisher: "+name+"<br></p>");
 document.write("Event Information: "+note+"<br>");
 document.write("<p>must have ticket: "+ticket); 
 document.write("<p>Type of attendees: "+attendees+" "+"<br>");
 document.write("Allowed age(s): "+age);
}