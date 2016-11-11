
(function($){
	$(function(){
		
		//热门搜索数据展示函数
		//	-----请求block数据
		// aAndsFn.ajaxFn('../data/index/menu.json', function(data){
		aAndsFn.ajaxFn('/getMenu', function(data){
			// var data = JSON.parse(data);
			aAndsFn.MenuFn(data, '.index-centent-list-blocks');
		});
		
		//请求并在页面上显示该轮播图--轮播效果
		aAndsFn.ajaxFn('/getBanner', aAndsFn.bannerFn);
		
		//机酒自由行
		aAndsFn.ajaxFn('/getFreeWalk', aAndsFn.freeWalkFn);
		
		//显示相对于的主题内容
		var $elemA3 = $('.flashsale3 .saleheader-select a'),
			$elemUl3 = $('.flashsale3 .citysale-list'),
			$elemA4 = $('.freewalker4 .saleheader-select a'),
			$elemUl4 = $('.freewalker4 .walkersale-list');
				
		aAndsFn.overOroutFn($elemA3, $elemUl3);
		aAndsFn.overOroutFn($elemA4, $elemUl4);
		
		 /*  
	    $('.header-search-submit').on('click', function () {
	        //提交搜索数据，并把数据显示在.search-hblock中的.hot-searchetext中----index
	    })
	
	     $('.search-inner-submit').on('click', function () {
	     //提交搜索数据，并把数据显示在.search-hblock中的.hot-searchetext中----citywalk
	     })
		    
	    */

			// 轮播热门block-nav效果index
		(function () {
			var $iblock;
			$('.index-centent-list .index-centent-list-item,.index-centent-list-blocks').on('mouseover', function (e) {
				$iblock = $(this).index();
				$('.index-centent-list-item').eq($iblock).css({"background":"#fff","color":"#000"});
				$('.index-centent-list-blocks .list-block-content').eq($iblock).css('display','block');

				$('.index-centent-list .index-centent-list-item,.index-centent-list-blocks').on('mouseout', function (e) {
					$('.index-centent-list-item').eq($iblock).css({"background":"rgba(0,0,0,.7)","color":"#fff"});
					$('.index-centent-list-blocks .list-block-content').eq($iblock).css('display','none');
				});
			});


		})();
	    	
		//	   	主题图片背景变透明白色  
	    $('.salecontent').on('mouseover', 'li img', function (e) {
	          e.target.style.opacity = '0.5';
	    });
	    $('.salecontent').on('mouseout', 'li img', function (e) {
	        e.target.style.opacity = '1';
	    });
	    
			
	});
})(jQuery);

	
	 
	   
		
	


