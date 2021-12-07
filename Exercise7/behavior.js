document.getElementById("UL").style.color = "blue";         //Change UL color to blue
document.getElementById("UL").style.backgroundColor="Azure";

document.getElementById("Fact").style.textDecoration = "underline overline";
document.getElementById("Fact").style.fontFamily = "Charcoal,sans-serif";





function Underline(obj){
    obj.style.textDecoration='underline';
}
function RUnderline(obj){               //ReverseUnderline
    obj.style.textDecoration='none';
}

function grow(obj){
    obj.style.fontSize="x-large";

}
function Rgrow(obj){
    obj.style.fontSize="initial";
}
function greet() {
    var username = prompt("Πώς σε λένε; ", "");
    if (username!=null){
        confirm("Γεια σου  " + username +" !") ;
    }else{
        confirm( "Γεια σου επισκέπτη !")
    }
           
}
function resize(){
    document.getElementById("gl").height="350"; 
	document.getElementById("gl").width="600";
}
function Rresize(){
    document.getElementById("gl").height="250"; 
	document.getElementById("gl").width="400";
}
function checkDay(){
    
    var today = new Date();
    var day = today.getDay();
    if (day==0){

        document.getElementById("day").src="../Images/Sunday.jpg";

    }else if(day==1){

        document.getElementById("day").src="../Images/Monday.jpg";
    }
    else if(day==2){

        document.getElementById("day").src="../Images/Tuesday.jpg";
    }
    else if(day==3){

        document.getElementById("day").src="../Images/Wednesday.jpg";

    }else if(day==4){

        document.getElementById("day").src="../Images/Thursday.jpg";

    }else if (day==5){

        document.getElementById("day").src="../Images/Friday.jpg";

    }else if (day==6){

        document.getElementById("day").src="../Images/Saturday.jpg";

    }
    document.getElementById("calendar").style.visibility="hidden";          //Hide text
    
    

}


function currentDate(){
    var today = new Date();
    var date = today.getDate() +'/' + (today.getMonth()+1) + '/' + today.getFullYear() ;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById("date").innerHTML = "Σήμερα είναι " + dateTime;
}

function RcurrentDate(){
    document.getElementById("date").innerHTML="Κάντε scroll για να δείτε ημερομηνία και ώρα" ;
}