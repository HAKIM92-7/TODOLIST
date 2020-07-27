
let addbutton=document.getElementById("addbutton");
let input=document.getElementById('myInput');
let ul=document.getElementById('myUL');
addbutton.addEventListener('click',function(){

var li=document.createElement("li");



var buttondelete=document.createElement("button");
buttondelete.innerHTML='x';
var newContent = document.createTextNode(input.value);

li.appendChild(newContent);
li.appendChild(buttondelete);
ul.appendChild(li);

input.value='';
li.addEventListener('mouseenter',function(){


this.style.backgroundColor='blue';




});

li.addEventListener('mouseleave',function(){


    this.style.backgroundColor='lightgray';
    
    
    
    
    });
    

buttondelete.setAttribute('class','removeBtn');

buttondelete.addEventListener('click',function(){


ul.removeChild(li);




});


});

