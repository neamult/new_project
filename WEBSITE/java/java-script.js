
function fn(){
var xa=document.myform.uname1.value;
if(xa==""){
document.getElementById("name1").innerHTML="Value Required";
}
else{
document.getElementById("name1").innerHTML=xa;
}
var xb=document.myform.uname2.value;
if(xb==""){
document.getElementById("name2").innerHTML="Value Required";
}
else{
document.getElementById("name2").innerHTML=xb;
}
var y=document.myform.dob.value;
if(y==""){
document.getElementById("dob1").innerHTML="Value Required";
}
else{
document.getElementById("dob1").innerHTML=y;
}
var xc=document.myform.fname.value;
if(xc==""){
document.getElementById("fname1").innerHTML="Value Required";
}
else{
document.getElementById("fname1").innerHTML=xc;
}
var xd=document.myform.mname.value;
if(xd==""){
document.getElementById("mname1").innerHTML="Value Required";
}
else{
document.getElementById("mname1").innerHTML=xd;
}

var xe=document.myform.address.value;
if(xe==""){
document.getElementById("address1").innerHTML="Value Required";
}
else{
document.getElementById("address1").innerHTML=xe;
}
var xf=document.myform.cname.value;
if(xf==""){
document.getElementById("cname1").innerHTML="Value Required";
}
else{
document.getElementById("cname1").innerHTML=xf;
}
var z=document.myform.email.value;
var u=/^[a-zA-Z0-9%_.]+@[a-zA-Z]+.[a-z]{2,3}$/;
if(z.match(u)){
document.getElementById("email1").innerHTML=z;
}
else{
document.getElementById("email1").innerHTML="Not Valid";
}
if(xa && xb && xc && xd && xe && z.match(u) && xf &&y !=""){
document.getElementById("status").innerHTML="Successfully Submitted";
}

}
