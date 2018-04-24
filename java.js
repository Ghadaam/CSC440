function results(){
/* var button = document.getElementById('submit'); */

var name = document.getElementById('name').value;
localStorage.setItem("name", name);
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

localStorage.setItem("age", age); 
      
   var note= document.getElementById('note').value;
   localStorage.setItem("note", note);
    
if (document.getElementById('yes').checked) {
   var ticket = document.getElementById('yes').value;
}
 else {
      ticket = document.getElementById('no').value;
}
  localStorage.setItem("ticket", ticket);
    
    if (document.getElementById('male').selected) {
   var attendees = document.getElementById('male').value;
} else if (document.getElementById('female').selected) {
   attendees = document.getElementById('female').value; 
} else {
   attendees = document.getElementById('both').value;
}
localStorage.setItem("attendees", attendees);
}