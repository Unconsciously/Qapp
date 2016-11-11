var aAndsFn = (function($){
	
			
	function ajaxFn(url, successFn){
		$.ajax({
	    	type:'GET',
	    	url:'http://10.3.157.189:8888' + url,
	    	data:'',
	    	success:successFn,
	    	error:function(){
	    		console.log('fail~');
	    	}
	    });
	};
				
	//jQuery中发送get请求：传参 url, data, successFn
	
	//热门搜索中的展示数据函数
	//	wrapelem：	$contents.appendTo($('.CityWalk-centent-list-blocks'));
	//				$contents.appendTo($('.index-centent-list-blocks'));	
	
	function MenuFn(data, wrapelem){
		var data = JSON.parse(data).msg;
		data.forEach(function(MenuObj,indext){
				
			var $contents = $('<div class="list-block-content"></div>'),
				$contentWrap1 = $('<div class="block-content-wrap"></div>'),
				$contentWrap2,len,$blockPlaceUl,$blockPlace,$blockPlaceH2,$img,$blockp,$blockpic,$blockPlaceLi,$blockA;

			for(var p in MenuObj){

				if(p == 'title'){
					$('.index-centent-list-title').eq(indext).text(MenuObj[p]);
				}
				if(p == 'mainCity'){
					$('.index-centent-list-p').eq(indext).text(MenuObj[p]);
				}
				if(p == 'moreCity'){
					var num = 0;
					len=MenuObj[p].length;
					if(len >= 2){
						$contentWrap2 = $('<div class="block-content-wrap"></div>');
					}
					MenuObj[p].forEach(function(moreCityObj){
						num++;
						$blockPlace = $('<div class="blockplace"></div>');
						$blockPlaceUl = $('<ul class="placelistul"></ul>');
						for(var m in moreCityObj) {
							if (m == 'cityName') {
								$blockPlaceH2 = $('<h2 class="bigtitle"></h2>');
								$blockPlaceH2.text(moreCityObj[m]);
							}
							if (m == 'items') {
								moreCityObj[m].forEach(function (itemsArr) {
									$blockPlaceLi = $('<li class="placelistli"></li>');
									$blockA = $('<a class="placelistlia" href="#"></a>');
									if(indext == 5){
										$blockA.html('<img class="placelistliaimg" src='+itemsArr+'>');
									}else {
										$blockA.text(itemsArr);
									}
									$blockPlaceLi.append($blockA);
									$blockPlaceUl.append($blockPlaceLi);
								});
							}
							$blockPlace.append($blockPlaceH2, $blockPlaceUl);
							$blockPlace.appendTo($contentWrap1);
							if ((len == 2 && num == 2) || (len > 2 && num > 2)) {
								$blockPlace.appendTo($contentWrap2);
							}
						}
					});
				}

				if(p == 'moreCityImg'){
					$blockp = $('<p class="blockpic"><a href="#"></a></p>');
					$blockpic = $('<img />');
					$blockpic.attr('src', MenuObj[p]);
					$blockp.append($blockpic);
					$blockp.appendTo($contentWrap2);
				}
			}
			$contentWrap1.appendTo($contents);
			if($contentWrap2){
				$contentWrap2.appendTo($contents);
			}
			$contents.appendTo($(wrapelem));
		});
	};
	
	// CityWalk中排序后的今日新品的展示：
	
	function queryCityWalkFn(data){
		var data = JSON.parse(data).msg;
		data.forEach(function(CityWalkObj){
			
			var $item = $('<div class="pro-item"></div>'),
				$iteminfo = $('<div class="pro-iteminfo"></div>'),
				$iteminfoNum = $('<div class="pro-iteminfo-num"></div>'),
				$iteminfoUl = $('<ul class="pro-iteminfo-list"></ul>'),
				$iteminfoPrice = $('<div class="pro-iteminfo-price"></div>'),
				$iteminfoBtn = $('<div class="pro-iteminfo-order"><a class="pro-iteminfo-btn" href="#" target="_blank">立即订阅</a></div>'),
				$itemImg,$address,$browseCount,$soldCount,$title,$oldPrice,$newPrice;
				
			for(var p in CityWalkObj){
				
				if(p == 'imgurl'){
					$itemImg = $('<a href="#"><img class="pro-itemimg" src='+ CityWalkObj[p] +'></a>');    					    					}
					    			
				if(p == 'address'){
					$address = $('<span class="pro-iteminfo-place"></span>').text(CityWalkObj[p]);	    				
				}
				if(p == 'browseCount'){
					$browseCount = $('<span class="browse-num">'+CityWalkObj[p]+'</span><b>次浏览</b>');
					$browseCount.appendTo($iteminfoNum);
				}
				if(p == 'soldCount'){
					$soldCount = $('<span class="sold-num">'+CityWalkObj[p]+'</span><b>件已售</b>');
					$soldCount.appendTo($iteminfoNum);
				}
				if(p == 'title'){
					$title = $('<h2>'+CityWalkObj[p]+'</h2>');
				}
				if(p == 'introduce'){

					CityWalkObj[p].forEach(function(e){
						var $introduceli = $('<li><p></p><span>'+e+'</span></li>');
						$introduceli.appendTo($iteminfoUl);																		
					});					
				}
				if(p == 'oldPrice'){
					$oldPrice = $('<span class="lined">'+CityWalkObj[p]+'元</span>');
				}
				if(p == 'newPrice'){
					$newPrice = $('<b>'+CityWalkObj[p]+'</b><i>元起</i>');
				}
					    			
				$iteminfoNum.append($browseCount, $soldCount);
				$iteminfoPrice.append($oldPrice, $newPrice);	    			
			}
			
			$iteminfo.append($address, $iteminfoNum, $title, $iteminfoUl, $iteminfoPrice, $iteminfoBtn);
			$item.append($itemImg, $iteminfo);
			$('.productlist-wrap').append($item);
			
		});
		
	};
	
	//index中 请求并在页面上显示该轮播图--轮播效果
	function bannerFn(data){
		var data = JSON.parse(data).msg;
    	var imgUrlStr,hrefStr;
    	data.forEach(function(turnObj){
    			    		
    		imgUrlStr = turnObj.imgUrl;
    		hrefStr = turnObj.href;
    		
    		var $a = $('<a href='+ hrefStr +'></a>');
    		var $img = $('<img src='+ imgUrlStr +'>');
    			    			    		
    		var $dot = $('<li class="dot"></li>');
    		$dot.appendTo($('.index-centent-turn-dots'));	    		
    		$img.appendTo($a);
    		$a.appendTo($('.index-centent-turn-item'));
    		
    	});
    	
    	turnImgsFn('.index-centent-turn-item a img', '.dot', '.index-centent-turn', '.index-centent-turn-right', '.index-centent-turn-left');
   
    
		//轮播函数封装：
		
		//elem----img--$('img')
		//prveElem----$('#next')
		//lastElem----$('#last')
		//selectelem---$('#inpbtn input')
		//selectPelem--wrap--$('.wrap')
	
		function turnImgsFn(elem, selectelem, selectPelem, prveElem, lastElem) {
		    var indexNum = 0,
		    	len = $(elem).length-1,
		    	targetI,targetC,
		    	timer = setInterval(function (){
			        nextShowAndHideFn(elem);
			        selectelemFn(selectelem, indexNum);
			    },2000);
		
		    $(selectPelem).mouseover(function(){
		        clearInterval(timer);
		        selectelemFn(selectelem, indexNum);
		    });
		    $(selectPelem).mouseout(function(){
		        clearTimerFn();
		        selectelemFn(selectelem, indexNum);
		    });
		    $(lastElem).click(function(){//上一张
		        lastShowAndHideFn(elem);
		        clearTimerFn();
		        selectelemFn(selectelem, indexNum);
		    });
		    $(prveElem).click(function(){//上一张
		        nextShowAndHideFn(elem);
		        clearTimerFn();
		        selectelemFn(selectelem, indexNum);
		    });
	
		    $(selectelem).each(function() {		    	
		        $(this).on('click', function (e) {
		            targetI = $(e.target).index();
		            targetC = indexNum;					
		            $(elem + ':eq(' + indexNum + ')').css("display","none");
		            $(elem + ':eq(' + targetI + ')').css("display","block");
		
		            /*$(elem + ':eq(' + indexNum + ')').hide(10);
		            $(elem + ':eq(' + targetI + ')').show(1000);*/
		            indexNum = targetI;
		            clearTimerFn();
		            selectelemFn(selectelem, indexNum);
	
		        });
		    });
		
			function selectelemFn(selectelem, indexNum){
				$(selectelem).css("background-color","#000");
		        $(selectelem).eq(indexNum).css("background-color","#c00");
			}
		    function nextShowAndHideFn(elem) {
		        if (indexNum < len) {
		            // $(elem+':eq(' + indexNum + ')').hide(1000);
		            $(elem+':eq(' + indexNum + ')').css("display","none");
		
		            var aIndex = indexNum + 1;
		            // $(elem+':eq(' + aIndex + ')').show(1000);
		            $(elem+':eq(' + aIndex + ')').css("display","block");
		
		            indexNum++;
		        } else if (indexNum == len) {
		            // $(elem+':eq(' + indexNum + ')').hide(1000);
		            $(elem+':eq(' + indexNum + ')').css("display","none");
		
		            indexNum = 0;
		            // $(elem+':eq(' + indexNum + ')').show(1000);
		            $(elem+':eq(' + indexNum + ')').css("display","block");
		        }
		    }
		
		    function lastShowAndHideFn(elem) {
		        if(indexNum > 0){
		            // $(elem+':eq('+ indexNum +')').hide(1000);
		            $(elem+':eq('+ indexNum +')').css("display","none");
		            var dIndex = indexNum-1;
		            // $(elem+':eq('+ dIndex +')').show(1000);
		            $(elem+':eq('+ dIndex +')').css("display","block");
		
		            indexNum--;
		        }else if(indexNum == 0){
		            // $(elem+':eq('+ indexNum +')').hide(1000);
		            $(elem+':eq('+ indexNum +')').css("display","none");
		
		            indexNum=len;
		
		            // $(elem+':eq('+ indexNum +')').show(1000);
		            $(elem+':eq('+ indexNum +')').css("display","block");
		        }
		    }
		    function clearTimerFn() {
		        clearInterval(timer);
		        timer = setInterval(function (){
		            nextShowAndHideFn(elem);
		            selectelemFn(selectelem, indexNum);
		        },2000);
		    }
		
		};
	 }
	
	//机酒自由行--将数据动态加载到页面上
	
	function freeWalkFn(data){
		var data = JSON.parse(data).msg;
		var numUl = 0,$clearDiv;
		data.forEach(function(freeWalkObj){
			
			var $ul = $('<ul></ul>'), 
				$li, $lia, $headera, $picsp, $picspImg, $titlesDiv, $titleH, $timeP, 
				$priceDiv, $priceText, $priceMin, liStr, $lim,
				numLi, dataLen;
			
			if(numUl++ == 0){
				$ul.addClass('walkersale-list walkersale-list-one');				
			}else{
				$ul.addClass('walkersale-list');
			}
			
			
			for(var p in freeWalkObj){
				if(p == 'title'){
					//<a>今日热卖</a>
					$headera = $('<a href="#" class="pa">'+freeWalkObj[p]+'</a>');					
					$headera.appendTo($('.freewalker2 .saleheader-select'));
				}
				if(p == 'data'){
					numLi = 0;
					dataLen = freeWalkObj[p].length - 1;					
					freeWalkObj[p].forEach(function(dataObj){
						$li = $('<li></li>');
						$lia = $('<a href="#"></a>');
						
						if(numLi++ == 0){
							$li.addClass('walkersale-list-li-one');				
						}else{
							$li.addClass('walkersale-list-li');
						}
						
						for(var n in dataObj){
						
							$titlesDiv = $('<div class="titles"></div>');
							if(n == 'title'){
								$titleH = $('<h3 class="title">'+dataObj[n]+'</h3>');
							}
							if(n == 'time'){
								$timeP = $('<p class="time">'+dataObj[n]+'</p>');								
							}else{
								$timeP = '';
							}
							if(n == 'price'){
								$priceDiv = $('<div class="pricewalker"></div>');
								$priceText = $('<span class="priceused">机+酒</span>');
								$priceMin = $('<span class="minprice2"><b>'+dataObj[n]+'</b>元起</span>');
								$priceDiv.append($priceText, $priceMin);								
							}
							if(n == 'imgUrl'){
								$picsp = $('<p class="picswalker"></p>');
								$picspImg = $('<img src='+dataObj[n]+'>');
								$picsp.append($picspImg);								
							}
														
							$titlesDiv.append($titleH, $timeP);
						}
						
						
						$lia.append($picsp, $priceDiv, $titlesDiv);
						$li.append($lia);
						$ul.append($li);
											
					});
					
				}
			}
			
			liStr = '<li class="walkersale-list-li-more"><div class="more-title"><a href="#"><p class="moretitle">查看更多<br>机酒自由行产品</p><p class="morearrow"></p></a></div><p class="morelist"><a href="#">机票</a><a href="#">酒店</a><a href="#">机+酒</a><a href="#">邮轮</a></p></li>';
			$lim = $(liStr);
			$clearDiv = $('<div class="clear"></div>');
			$ul.append($lim, $clearDiv);			
			$ul.appendTo($('.freewalker2 .salecontent'));
						
		});
				
		$clearDiv = $('<div class="clear"></div>');
		$clearDiv.appendTo($('.freewalker2 .salecontent'));	
		
		var $elemUl = $('.freewalker2 .walkersale-list');
		var $elemA = $('.pa');
		overOroutFn($elemA, $elemUl);
				
	}
	
	//点击标题，转换内容：
	function overOroutFn($elemA, $elemUl){
    	var $tblock;
   	
    	$elemA.on('mouseover', function () {
	        $elemA.css({"border-bottom":"none","padding-bottom":"0"});
	        $elemUl.css({"display":"none"});
	        $(this).css({"border-bottom":"3px solid #00b081","padding-bottom":"5px"});
	        $tblock = $(this).index();	       
	        $elemUl.eq($tblock).css({"display":"block"});
	    });	    	
    }

	return {
		ajaxFn: ajaxFn,
		MenuFn: MenuFn,
		queryCityWalkFn: queryCityWalkFn,
		bannerFn: bannerFn,
		freeWalkFn: freeWalkFn,
		overOroutFn: overOroutFn
	};
	
	
})(jQuery);

