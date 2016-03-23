var c=document.getElementById("myCanvas");  
var cxt=c.getContext("2d");  
var imgc=new Image();
var img=new Image();   
var lv_win=0;
var lv_ow=0;
var win_vieo=document.getElementById("win_game");
var b_vieo=document.getElementById("back");
var lose_vieo=document.getElementById("lose_game");
var storage = window.localStorage;
if (!storage.getItem("lv_win")) storage.setItem("lv_win",0);
lv_win=storage.getItem("lv_win");

var lv_counter=1;
var ig=new Image();
ig.src="images/stone.png";
var igf=new Image();
igf.src="images/fly.png";
var igb=new Image();
igb.src="images/bullet.png";
imgc.src="images/welcome.png";  
imgc.onload = function () 
{  
    cxt.drawImage(imgc,100,0);  
}  



$(document).ready(function(){
$("#div5").hide();
$("#div11").hide();
$("#div10").hide();
$("#div12").hide();
$("#div13").hide();
$("#div14").hide();
$("#div15").hide();
$("#div16").hide();
$("#div17").hide();
$("#div18").hide();
$("#div19").hide();


});