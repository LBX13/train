$(function(){
	
$('.one').hide();
	//$('.tit li').gt(1).hide();
   		 var txt=$(".tit>li").first().text();
function showAll(){
	 $.ajax({
    	url:"data/end_sear.json",
    	type:"post",
    	success:function(e){
    		var ohtml=$('#moban').html();
    		moban=Handlebars.compile(ohtml);
    		$("#all").html(moban(e));
	 			first(e);
			$('#new').on("click",function(){
				//first(e);
			var T=$(this).data('id');
			console.log(T);
			//$(this).data('id','');
			var arr=e.all[T-1].con;
			var str="";
			console.log(e.all[T-1].con)
				for(var i=0;i<arr.length;i++){
					console.log(arr[i].split('|'))
					array=arr[i].split('|');
					str+=" <li class='show_list'>"+array[0]+"<p><input type='radio' name='aa'id='"+arr[i][1]+"'><label for='"+arr[i][1]+"' class='che_bg'></label></p></li>"
				}
				$('#all').show()
				$('.bg').show()
						.css('opacity','0.5');
				$('#all').html(str);
					all();
			})
    	}
    })
}
	function first(e){
			$("#all>li").on('tap',function(){
				var Atxt=$(this).text();
				var ind=$(this).index();
    			$('#new').text(e.all[ind].aaa);
    			$('#new').data("id",e.all[ind].z);
    			if(e.all[ind].aaa==""){
    				$('#all').hide();
					$('.bg').hide();
					$('.xia').hide();
					$('.three').hide();
					$('.two').hide();
    			}else{
    				setTimeout(function(){
					$('#all').hide();
					$('.bg').hide();
				},500)
				$('.xia').show();
				$('.three').hide();
				$('.two').show();
				$('.tit>li').first().text(Atxt);
    			}
				
			})
	}
    $(".all").on("click",function(){
		$('.bg').show()
				.css('opacity','0.5');
			showAll();
		$('#all').show();
    })
    function all(){
    	$(".show_list").on('click',function(){
		    	var Ltxt=$(this).text();
		    	console.log(Ltxt);
		    	$('.bg').hide()
				$('#all').hide();
				$('.two').hide();
				$('.three').show();
				$('#lis').text(Ltxt);
  			  })
    }
})