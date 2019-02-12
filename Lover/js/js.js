 
		//获取imgList
 var imglist = document.getElementById('imglist')


	 
		//获取页面中所有的img标签
		var imgArr = document.getElementsByName("imgs");
		
	
	/*获取元素的样式
		function getStyle(obj,str){
 return	parseInt(getComputedStyle(obj,null)[str]);
}
	*/

		//定义图片下标
		var index = 0;
	
	movePic();
	

function movePic(){
	

	
	  setInterval(function(){
	  	
	  	
	//判断下标是否到最后一个。
		if(index==imgArr.length-1){		
		
		 imglist.style.left=0;
	
		index = 0 ;
		
			}

  move(imglist,-250*(index+1),2,'left');

  index++;


	},3000
	  )
	  

}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
function move(obj,target,speed,dir){
//关闭上一个定时器
	 stop(this.timer);
	

	   this.timer =  setInterval(function(){ 
	 //读取旧的样式值
	    	var oldNum = parseInt(getComputedStyle(obj,null)[dir]);	
	
		//样式值加上移动的速度
		var newNum = oldNum - speed ;
		 
		 obj.style[dir] = newNum+'px';

   
   
		if(newNum == target ){  
				stop(this.timer);
			
			    }
	

		
		
			},3);
				 //移动结束语句
				 
			
}

//关闭计时器。参数：计时器对象
function stop(timer){
	clearInterval(timer);
}
