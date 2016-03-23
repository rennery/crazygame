
var k=true;
var foren=true;
var ben=true;
var ren=true;
var for_cou=0;
var b_cou=0;





function load_1st(event){

if(lv_counter==1 || lv_win==0){
foren=false;
ben=false;
ren=false;
for_cou=0;
b_vieo.play();
lv_ow=1;
var c=document.getElementById("myCanvas");  
var cxt=c.getContext("2d");
$("#div5").hide();
$("#div17").hide();
$("#div18").hide();
$("#div19").hide();
$("#div10").show();
$("#div10").delay(5000).hide(1000);
$("#div5").delay(5000).slideDown();
$("#div11").delay(5000).slideDown();
$("#div3").hide(1000);
$("#div4").hide(1000);
cxt.clearRect(0,0,700,400);
var imgk=new Image()  
imgk.src="images/pass.png";  
imgk.onload = function () 
{  
    cxt.drawImage(imgk,0,0);  
	
}  
$(function(){

function looking(){
for_cou++;
if(for_cou==70){
foren=true;
ben=true;
ren=true;
}
if($("#password_input").text()=='df' ){
	if(k){

	k=false;
	$("#div12").delay(1000).show(1000);
	b_vieo.pause();
	lose_vieo.play();}
}else if($("#password_input").text()=='password'){
	lv_counter=2;
	lv_win=1;
	b_vieo.pause();
	win_vieo.play();
	if(storage.getItem("lv_win")!=1){
	storage.lv_win = parseInt(storage.getItem("lv_win")) + 1;}
	$("#div5").hide();
	$("#div11").hide();
	$("#div13").slideDown();
	$("#div14").show();
	cxt.clearRect(0,0,700,400);
}
}
setInterval(looking,100)});

}
else if(lv_counter==2 && lv_win==1){
lv_ow=2;
 $("#password_input").empty();
 clearInterval(times);
 lv2_start();
 
}


}
function reload(){
if(ren){
if(lv_ow==2){
clearInterval(times);
			stage.removeChild(bmpAnimation);
			cxt.clearRect(0,0,700,400);
$("#counter_c").empty();
    
    createjs.Ticker.removeListener(window);
	lv2_start();
}else{
$("#password_input").empty();
$("#div5").hide();
$("#div11").hide();
load_1st();

}
}
}



function load_back(){
if(foren){
if(lv_ow==1){
alert('This is the first level, you can not go back!');

}else{
lv_counter=1;
clearInterval(times);
			stage.removeChild(bmpAnimation);
			cxt.clearRect(0,0,700,400);
$("#counter_c").empty();
    
    createjs.Ticker.removeListener(window);

			

load_1st();
}
}
}

function restart(){

if(lv_ow==2){
clearInterval(times);
lv2_start();
}else{
$("#password_input").empty();
$("#div5").hide();
$("#div11").hide();
$("#div12").hide();
load_1st();

}
	

}

function lv2_start(){
lv_counter=2;
lv_ow=2;
$("#div3").hide(1000);
$("#div4").hide(1000);
$("#div5").hide();
$("#div11").hide();
$("#div13").hide();
	$("#div14").hide();
	$("#div17").hide();
$("#div18").hide();
	$("#div15").slideDown();
$("#div15").delay(5000).hide(1000);
cxt.clearRect(0,0,700,400);
img.src="images/cat.png"; 
ig.onload = function () 
{  
    cxt.drawImage(ig,100,0);  
}   
igf.onload = function () 
{  
    cxt.drawImage(ig,100,0);  
} 
igb.onload = function () 
{  
    cxt.drawImage(ig,100,0);  
} 
img.onload = function () 
{  init();
    
	
}
}
function load_next(){
if(foren){
if(storage.getItem("lv_win")==0){
alert('You must pass lv1 first!');
}
if(lv_ow==2){
alert('More levels wll be coming soon!');

}else{
lv2_start();
}
}
}
function a(){

$("#password_input").text($("#password_input").text()+"a");

}
function b(){

$("#password_input").text($("#password_input").text()+"b");

}
function d(){

$("#password_input").text($("#password_input").text()+"d");

}
function f(){

$("#password_input").text($("#password_input").text()+"f");

}
function g(){

$("#password_input").text($("#password_input").text()+"g");

}
function k(){

$("#password_input").text($("#password_input").text()+"k");

}
function m(){

$("#password_input").text($("#password_input").text()+"m");

}
function o(){

$("#password_input").text($("#password_input").text()+"o");

}
function p(){

$("#password_input").text($("#password_input").text()+"p");

}
function r(){

$("#password_input").text($("#password_input").text()+"r");

}
function s(){

$("#password_input").text($("#password_input").text()+"s");

}
function w(){

$("#password_input").text($("#password_input").text()+"w");

}







