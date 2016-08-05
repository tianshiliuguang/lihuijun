;(function($){
	//局部滚动
	var shouyeScr=new IScroll("#shouye");
	//var tongxunScr=new IScroll("#tongxun");

  //中间模块的切换
  $("#footer").on("click","a",function(e){
     e.preventDefault();
     var id=$(this).attr("href");
     if(id=="#tongxun"){
     	$("#english").show()
     }else{
      $("#english").hide()
     }
     $(id).css({
     	"-webkit-transform":"translateX(0)",
     	"-webkit-transition":"all 1.5s"
     }).siblings().css({
     	"-webkit-transform":"translateX(100%)",
     	"-webkit-transition":"all 1.5s"
     })
  })

  var ps=$("#center p");
  var arr=[];
  $(ps).each(function(){
  	arr.push($(this).offset().top-50);
  })
  console.log(arr)
  $("#addresslist").scroll(function(){
  	var top=$(this).scrollTop();
  	document.title=top
  	for(var i=0;i<arr.length;i++){
  		if(top>=arr[i]){
  			$("#center p").eq(i).addClass("pstyle");
  		}else{
  			$("#center p").eq(i).removeClass("pstyle");
  		}
  	}
  	
  })

})(Zepto)