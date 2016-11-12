$(function(){
function tcs(){
	var box=$("#box");
	for (var i = 0; i < 20; i++) {
		 for (var j = 0; j < 20; j++) {
		 	  var div=document.createElement("div");
		 	  div.id=i+"-"+j;
		 	  box.appendChild(div);
		 };
	};
	var se=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	for (var i = 0; i < se.length; i++) {
		var obj=$("#"+se[i].x+"-"+se[i].y)
		obj.className="se";
	}
	function getFood(){
		do{
			var x=Math.floor(Math.random()*20);
			var y=Math.floor(Math.random()*20);
		}while(panduan(x,y));
		var foodobj=$("#"+x+"-"+y)
		foodobj.className="food";
		return{x:x,y:y}
	}//随机给定食物出现的位置
	function panduan(a,b){
		for (var i = 0; i < se.length; i++) {
			 if (se[i].x==a&&se[i].y==b) {
			 	return true;
			 };
		};
		return false;
	}
	var food=getFood();
	var fx="you";
	var x;
	var y;
	var jshu=$(".jshu")[0];
	var img=$(".img")[0];
	function run(){
		var jiutou=se[se.length-1];
		if (fx=="you") {
			var newtou=$("#"+jiutou.x+"-"+(jiutou.y+1));
			if(newtou==null||panduan(jiutou.x,jiutou.y+1)){
				jshu.style.display="block";
				img.style.display="block";
				clearInterval(t);
				return;
			}//判断游戏运行界面			
			x=jiutou.x;
			y=jiutou.y+1;
			newtou.className="se";
			se.push({x:jiutou.x,y:jiutou.y+1})
			//蛇吃到食物
		} else if(fx=="zuo"){
				var newtou=$("#"+jiutou.x+"-"+(jiutou.y-1))
				if(newtou==null||panduan(jiutou.x,jiutou.y-1)){
					jshu.style.display="block";
					img.style.display="block";
					clearInterval(t)
					return ;
				}
				x=jiutou.x;
				y=jiutou.y-1
				newtou.className="se"
				se.push({x:jiutou.x,y:jiutou.y-1})			
		}else if(fx=="xia"){
				var newtou=$("#"+(jiutou.x+1)+"-"+(jiutou.y))
				if(newtou==null||panduan(jiutou.x+1,jiutou.y)){
					jshu.style.display="block";
					img.style.display="block";
					clearInterval(t)
					return ;
				}
				x=jiutou.x+1;
				y=jiutou.y
				newtou.className="se"
				se.push({x:jiutou.x+1,y:jiutou.y})
		}else if(fx=="shang"){
				var newtou=$("#"+(jiutou.x-1)+"-"+(jiutou.y))
				if(newtou==null||panduan(jiutou.x-1,jiutou.y)){
					jshu.style.display="block";
					img.style.display="block";
					clearInterval(t)
					return ;
				}
				x=jiutou.x-1;
				y=jiutou.y;
				newtou.className="se"
				se.push({x:jiutou.x-1,y:jiutou.y})			
		}
		if (food.x==x&&food.y==y) {
			food=getFood()
		}else{
			var shewei=$("#"+se[0].x+"-"+se[0].y)
			shewei.className=""
			se.shift();
		}
	}
	var btn2=$(".btn2")[0];
	var btn1=$(".btn1")[0];
	var t=setInterval(run,200)
	document.onkeydown=function(e){
			var e=e||window.event;
			var nub=e.keyCode;
			if(nub==37){
				if(fx=="you"){
					return;
				}
				fx="zuo"
			}else if(nub==38){
				if(fx=="xia"){
					return;
				}
				fx="shang"
			}else if(nub==39){
				if(fx=="zuo"){
					return;
				}
				fx="you"
			}else if(nub==40){
				if(fx=="shang"){
					return;
				}
				fx="xia"
			}		
	}
	btn2.onclick=function(){
		clearInterval(t);
	}
	btn1.onclick=function(){
		t=setInterval(run,200);
	}
	img.onclick=function(){
		jshu.style.display="none";
		img.style.display="none";
	}
}
         var btn3=$(".btn3")[0];
         btn3.onclick=function(){
         	tcs();
         }
})