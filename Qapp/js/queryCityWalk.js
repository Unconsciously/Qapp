	
	
(function($){
	$(function(){
		
		//	-----请求block数据并添加到页面上
	    aAndsFn.ajaxFn('/getMenu', function(data){
			// var data = JSON.parse(data);
	    	aAndsFn.MenuFn(data, '.CityWalk-centent-list-blocks');
	    });
	    
	    //请求CityWalk中排序后的今日新品的数据并展示
	    aAndsFn.ajaxFn('/getCityWalkList', aAndsFn.queryCityWalkFn);
		
		
		//	-----为block数据添加事件
		$('.CityWalk-nav-item-one, .CityWalk-centent-list .index-centent-list-item, .CityWalk-centent-list-blocks').on('mouseover', function () {
        	$('.CityWalk-centent-list').css('display','block');       	
    	});

    	$('.CityWalk-nav-item-one, .CityWalk-centent-list .index-centent-list-item, .CityWalk-centent-list-blocks').on('mouseout', function () {
        	$('.CityWalk-centent-list').css('display','none');
    	});

    	var $cwblock;
    	$('.CityWalk-centent-list .index-centent-list-item, .CityWalk-centent-list-blocks').on('mouseover', function (e) {

	        $cwblock = $(this).index();
	        $('.index-centent-list-item').eq($cwblock).css({"background":"#f5f5f5"});
	        $('.list-block-content').eq($cwblock).css('display','block');
	
	    });

	    $('.CityWalk-centent-list .index-centent-list-item, .CityWalk-centent-list-blocks').on('mouseout', function (e) {
	    	
	        $('.index-centent-list-item').eq($cwblock).css({"background":"#fff"});
	        $('.list-block-content').eq($cwblock).css('display','none');
	    });
	    
	    
	});
})(jQuery);
	    
	    	
	

	


