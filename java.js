
     
   

    
    
    function fpsw(){
        var x=document.getElementById("psw");
        if(x.value.length!=8){alert("the length of pass mus be 8 char");}
        else{
            if(!x.value.charAt(0).match(/[A-Z]/g)){alert("pass must start with great char ");}
       else if(!x.value.match(/[a-z]/g)){alert("pass must have one small char");}
       else if(!x.value.match(/[0-9]/g)){alert("pass must have at least one digit");}
       else if(!x.value.match(/[!@#$%^&*_-~`.,:'"><]/g)){alert("pass must have at least one special char");}
        }}
    
    
function fmail(){  
var x=document.getElementById("mail").value;  
var atpos=x.indexOf("@");  
var dotpos=x.lastIndexOf(".");  
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){  
  alert("Please enter a valid e-mail address \n filed1  @  field2  .  field3");  
  return false;  
  }}  
    
 function fphon(){
     var x=document.getElementById("phon").value;  
  if(!x.match(/^[0-9]+$/)){alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)");}  
  if(x.length!=11){alert("Please only enter 11 numbers");}}  

    
  
    
    
   setInterval(function(){
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
        
    if(hr > 12){
    day = 'PM';
    hr = hr - 12;}
        
    if(hr == 0){
    hr = 12;}
        
    if(sec < 10){
    sec = '0' + sec;}
        
    if(min < 10){
    min = '0' + min;}
        
    if(hr < 10){
    hr = '0' + hr;}
        
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;});  
    
    document.getElementById('t1').style.display="none";
  document.getElementById('t2').style.display="none";
  document.getElementById('t3').style.display="none";
    
    function o(t1,t2,t3) {
  document.getElementById(t1).style.display="block";
  document.getElementById(t2).style.display="none";
  document.getElementById(t3).style.display="none";
  }
 
    function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("all").style.marginLeft = "250px";}
function closeNav() {
      document.getElementById('t1').style.display="none";
  document.getElementById('t2').style.display="none";
  document.getElementById('t3').style.display="none";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("all").style.marginLeft= "0";}
    
    
    
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


 
