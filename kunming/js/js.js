(function(){
  $('.back').on('click',function(){
         history.go(-1);
    })
	 var loca=window.location.href,
      arr=loca.split('?');
    var  Pid=arr[1].split('=');
        var choise=Pid[0];
      console.log(Pid[0])
    $.get("data/hot.json",function(e){
        console.log(e);
        $.each(e[choise],function(i,ele){
           if(ele.id==Pid[1]){
             $('.adress>.sp').text(ele.bj2);
             $('.tel>.sp').text(ele.bj);
             $('#more_banner').attr('src','img/'+ele.pic)
             $('.more_tit').text(ele.word);
              $('.P_add').text(ele.bj2);
              $('.P_tel').text(ele.bj);
           }
        })
    })
    
    var Garr=[];
    $('#great').on('click',function(){
        if(Garr.indexOf(Pid)==-1){
            Garr.push(Pid);
        }else{
          alert('已经收藏过了')
        }
        console.log(Garr)
    })
})($)