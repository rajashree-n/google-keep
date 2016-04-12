//Change from grid view to list view
function myFunction()
{        
    document.getElementById("Menuitems").style.display="block";
    document.getElementById("holder").style.display="none";
    document.getElementById("icn").style.display="block";
    document.getElementById("change").style.display="none";
    document.getElementById("myButton1").style.display="none";
    document.getElementById("myButton").style.display="block";
    
}

function myFunction1()
{        
    document.getElementById("Menuitems").style.display="none";
    document.getElementById("holder").style.display="block";
    document.getElementById("icn").style.display="none";
    document.getElementById("change").style.display="block";
    document.getElementById("myButton1").style.display="block";
    document.getElementById("myButton").style.display="none";
    
}

// Adding Quick Notes
function myFunctionAddnote()
{        
    document.getElementById("show").style.display="none";
    document.getElementById("hidden").style.display="block";
    
}
// Get the modal
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var del = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on (X), close the modal
function myFunctionclose(){
    document.getElementById("myModal").style.display="none";
    document.getElementById("myModal1").style.display="none";
    document.getElementById("myModal2").style.display="none";
}



// Change background color of div for list
function blue()
{
document.getElementById('header1').style.backgroundColor='#20b2aa'
}
function orange()
{
document.getElementById('header1').style.backgroundColor="#ff8c00"
}

function green()
{
document.getElementById('header1').style.backgroundColor="green"
}

function pink()
{
document.getElementById('header1').style.backgroundColor="pink"
}


