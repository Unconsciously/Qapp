
(function($){
	
	$(function () {

	    /*public*/
	    $('.a-list:first,.a-divCom').hover(function () {
	        if($('.a-divCom').css('display') == 'none'){
	            $('.a-divCom').show('1000');
	
	        }else{
	            $('.a-divCom').hide('1000');
	        }
	    });
	
	
	    $('.a-list:last, .a-divOrder').hover(function () {
	        if($('.a-divOrder').css('display') == 'none'){
	            $('.a-divOrder').show('1000');
	        }else{
	            $('.a-divOrder').hide('1000');
	        }
	    });
	
	/*
	
	  $('.header-search-submit').on('click', function () {
	        //提交搜索数据，并把数据显示在.search-hblock中的.hot-searchetext中----index
	    })
	
	     $('.search-inner-submit').on('click', function () {
	     //提交搜索数据，并把数据显示在.search-hblock中的.hot-searchetext中----citywalk
	     })
	
	*/
	
	    $('.header-search-text').focus(function (e) {
	        $('.search-hblock').css('display','block');
	    });
	    $('.header-search-text').blur(function (e) {
	        $('.search-hblock').css('display','none');
	    });
	    
	    
	 
	//  ----------右侧固定栏+下侧固定广告关闭按钮
	$('.sidefloat-right-cell1').mousemove(function () {
	
	    $('.fixr-myorder').css({"display":"none"});
	    $('.fontorder').css({"display":"block"});
	});
	    $('.sidefloat-right-cell1').mouseout(function () {
	        $('.fixr-myorder').css({"display":"block"});
	        $('.fontorder').css({"display":"none"});
	    });
	
	    $('.sidefloat-right-cell2').mousemove(function () {
	        $('.fixr-mycoll').css({"display":"none"});
	        $('.fontcoll').css({"display":"block"});
	    });
	    $('.sidefloat-right-cell2').mouseout(function () {
	        $('.fixr-mycoll').css({"display":"block"});
	        $('.fontcoll').css({"display":"none"});
	    });
	
	    $('#go-top').click(function () {
	        $('body').scrollTop(0);
	    });
	
	    $(window).scroll(function () {
	        var $qyerScroll = $('body').scrollTop();
	        if($qyerScroll >= 350){
	            $('#sidefloat-right').css({"display":"block"});
	        }else{
	        	$('#sidefloat-right').css({"display":"none"});
	        }
	        	        
	        if($qyerScroll >= 500){
	            $('#go-top').css({"display":"block"});
	        }else{
	        	$('#go-top').css({"display":"none"});
	        }
	    });
	    
	 	/*下部广告关闭按钮*/
	
	    $('.rightad-closebtn').hover(function () {
	        $('.rightad-closebtn').css({"background-color":"#c00"});
	    },function () {
	        $('.rightad-closebtn').css({"background-color":"#000"});
	    });
	
	   
	    $('.rightad-closebtn').click(function () {
	        $('.fix-bottomad').css({"display":"none"});
	    });
	
	    /*顶部广告关闭按钮*/
	    $('#ad-close').click(function () {
	        $('#ad-bgT').css({"display":"none"});
	    });
	
	

	
	});
})(jQuery);
