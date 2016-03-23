var canvas;
var stage;
var l2=false;
var clock_work=true;
var win_lv2_game=false;
var shu=0;
var co=7;
var imgMonsterARun = new Image();
var planeX=200;
var planeY=300;
var bulX=new Array();
var bulY=new Array();
var bulvX=0;
var bulvY=0;
var i=0;
var plane_h=5;
var catX=[200,260,320,380,440];
var catY=[110,110,110,110,110];
var stone_life=[2,1,2,3,2];
var stone_has=[1,1,1,1,1];
var cat_has=[1,1,1,1,1];
var times;
var keysDown = {};
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false);
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false);
addEventListener("click", function (e) { if(l2)shoot_bul(); }, false);
function looking2(){

$("#div3").hide(1000);
$("#div4").hide(1000);
$("#div5").hide();
$("#div11").hide();
$("#div13").hide();
	$("#div14").hide();
	$("#div17").hide();
$("#div18").hide();
$("#div19").hide();
	shu++;
	if(shu==6){
		l2=true;
		foren=true;
		ren=true;
ben=true;
	}
	$("#counter_c").text("You only have "+co+"s"+" and plane's health:"+plane_h);
	if(l2&&clock_work){
		$("#div16").show();
		co--;
		if(co>0)
		$("#counter_c").text("You only have "+co+"s"+" and plane's health:"+plane_h);
		else{
			clearInterval(times);
			stage.removeChild(bmpAnimation);
			cxt.clearRect(0,0,700,400);
    b_vieo.pause();
	lose_vieo.play();
    
    createjs.Ticker.removeListener(window);
			$("#div17").show();
			}
		$("#div5").hide();
$("#div11").hide();
$("#div13").hide();
	$("#div14").hide();
		}
	if(plane_h<=0){
	win_lv2_game=true;
		clearInterval(times);
		stage.removeChild(bmpAnimation);
			cxt.clearRect(0,0,700,400);
			$("#div19").show();
	b_vieo.pause();
	win_vieo.play();
	}
	if(cat_has[0]==0&&cat_has[1]==0&&cat_has[2]==0&&cat_has[3]==0&&cat_has[4]==0&&win_lv2_game==false){
	clearInterval(times);
			stage.removeChild(bmpAnimation);
			cxt.clearRect(0,0,700,400);
    b_vieo.pause();
	lose_vieo.play();
    
    createjs.Ticker.removeListener(window);
			$("#div18").show();
			}
		$("#div5").hide();
$("#div11").hide();
$("#div13").hide();
	$("#div14").hide();
	
	}


function shoot_bul(){
	bulvX=planeX+34;
	bulvY=planeY;
	bulX.push(bulvX);
	bulY.push(bulvY);

}


function init() {
foren=false;
ben=false;
ren=false;
b_vieo.play();
clock_work=true;
win_lv2_game=false;
 catX=[200,260,320,380,440];
 catY=[100,100,100,100,100];
 stone_life=[2,1,2,3,2];
 stone_has=[1,1,1,1,1];
  cat_has=[1,1,1,1,1];
  bulY.splice(0,100);
			bulX.splice(0,100);
  plane_h=5;
  co=7;
  shu=0;
  l2=false;
  $("#counter_c").empty();
    canvas = document.getElementById("myCanvas");

    imgMonsterARun.onload = handleImageLoad;
    imgMonsterARun.onerror = handleImageError;
    imgMonsterARun.src = "images/clock.png";
	times=setInterval(looking2,1000);
}
function handleImageLoad(e) {
    startGame();
}
function startGame() {
	
	stage = new createjs.Stage(canvas);
	
	var spriteSheet = new createjs.SpriteSheet({
	    
	    images: [imgMonsterARun], 
	    
	    frames: {width: 63, height: 64, regX: 32, regY: 32}, 
	    animations: {	
		    walk: [0, 7, "walk"]
	    }
    });
	
    
	bmpAnimation = new createjs.BitmapAnimation(spriteSheet);

    
    bmpAnimation.gotoAndPlay("walk"); 	
	
   
    bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);

    bmpAnimation.name = "monster1";
    bmpAnimation.direction = 90;
    bmpAnimation.vX = 4;
    bmpAnimation.x = 64;
    bmpAnimation.y = 64;
		
    
    bmpAnimation.currentFrame = 0;
    stage.addChild(bmpAnimation);
		
    
    
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(20);
}


function handleImageError(e) {
	console.log("Error Loading Image : " + e.target.src);
}
function hittest(){
for(i=0;i<bulX.length;i++){
		if(bulY[i]<170&&bulX[i]<250&&bulX[i]>199 &&stone_has[0]==1){
			stone_life[0]--;
			if(stone_life[0]<=0){
				stone_has[0]=0;
				}
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]<170&&bulX[i]<310&&bulX[i]>260 &&stone_has[1]==1){
			stone_life[1]--;
			if(stone_life[1]<=0){
				stone_has[1]=0;
				}
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]<170&&bulX[i]<370&&bulX[i]>320 &&stone_has[2]==1){
			stone_life[2]--;
			if(stone_life[2]<=0){
				stone_has[2]=0;
				}
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]<170&&bulX[i]<430&&bulX[i]>380 &&stone_has[3]==1){
			stone_life[3]--;
			if(stone_life[3]<=0){
				stone_has[3]=0;
				}
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]<170&&bulX[i]<490&&bulX[i]>440 &&stone_has[4]==1){
			stone_life[4]--;
			if(stone_life[4]<=0){
				stone_has[4]=0;
				}
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		} //cat
		else if(bulY[i]>catY[0]&&bulY[i]<(catY[0]+40)&&bulX[i]<250&&bulX[i]>199 &&cat_has[0]==1){
			
			
				cat_has[0]=0;
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]>catY[1]&&bulY[i]<(catY[1]+40)&&bulX[i]<310&&bulX[i]>260 &&cat_has[1]==1){
			
			
				cat_has[1]=0;
				
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]>catY[2]&&bulY[i]<(catY[2]+40)&&bulX[i]<370&&bulX[i]>320 &&cat_has[2]==1){
			
			
				cat_has[2]=0;
				
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]>catY[3]&&bulY[i]<(catY[3]+40)&&bulX[i]<430&&bulX[i]>380 &&cat_has[3]==1){
			
			
				cat_has[3]=0;
				
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		else if(bulY[i]>catY[4]&&bulY[i]<(catY[4]+40)&&bulX[i]<490&&bulX[i]>440 &&cat_has[4]==1){
			
				cat_has[4]=0;
				
			bulY.splice(i,1);
			bulX.splice(i,1);
			
		}
		//catdrop
		

}
		for(i=0;i<5;i++){
			if(stone_has[i]==0){
				catY[i]=catY[i]+3;
			}
		
		}
		for(i=0;i<5;i++){
			if(catY[i]<370&&catY[i]>300 && (catX[i]+10)<(planeX+68) &&(catX[i]+10)>planeX &&cat_has[i]==1){
				cat_has[i]=0;
				plane_h=plane_h-1;
			}
		
		}
}
function tick() {
    
    if (65 in keysDown) { 
		if(planeX>2){
			planeX=planeX-4;
		
		}
	}
	if (68 in keysDown) { 
		if(planeX<700){
			planeX=planeX+4;
		
		}
	}
	
    
	for(i=0;i<bulX.length;i++){
		if(bulY[i]<74&&bulX[i]<74){
			clock_work=false;
			bulY.splice(i,1);
			bulX.splice(i,1);
		}
		
	
	}
	hittest();
    stage.update();
	for(i=0;i<bulX.length;i++){
		bulY[i]=bulY[i]-4;
		cxt.drawImage(igb,bulX[i],bulY[i]); 
	
	}
	if(cat_has[0]==1)
	cxt.drawImage(img,catX[0],catY[0]);
	if(cat_has[1]==1)	
	cxt.drawImage(img,catX[1],catY[1]); 
	if(cat_has[2]==1)
	cxt.drawImage(img,catX[2],catY[2]); 
	if(cat_has[3]==1)
	cxt.drawImage(img,catX[3],catY[3]); 
	if(cat_has[4]==1)
	cxt.drawImage(img,catX[4],catY[4]); 
	if(stone_has[0]==1)
	cxt.drawImage(ig,200,170);  
	if(stone_has[1]==1)
	cxt.drawImage(ig,260,170); 
	if(stone_has[2]==1)
	cxt.drawImage(ig,320,170); 
	if(stone_has[3]==1)
	cxt.drawImage(ig,380,170); 
	if(stone_has[4]==1)
	cxt.drawImage(ig,440,170); 
	cxt.drawImage(igf,planeX,planeY); 
}
