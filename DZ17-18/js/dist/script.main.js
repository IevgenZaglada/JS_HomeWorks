/*!
 * cuSel -- stylized replacement for standard select
 * 
 * https://github.com/fetis/cusel
 *   
 * @version 3.0 alpha
 *
 * @requires jQuery 1.7+     
 * @requires jScrollPane.js
 * @requires jquery.mousewheel.js
 * 
 * Originally based on cuSel 2.5 by Evgeniy Ryzhkov, Alexey Choporov & Roman Omelkovitch
 *  
 */   



/***
 * Replace selects
 * 
 * @param {Object} params Replacement params:
 *  {String} changedEl  Selector which specify replaced selects
 *  {Number} visRows Amount of visible rows 
 *  {Boolean} scrollArrows  Flag for arrows in scroll box 
 *  {String} refreshEl Comma-separated list of refreshed selects. Useby by cuSelRefresh only 
 */ 
function cuSel(params) {
  var initTimeout = 250,  // timeout per init attempt
    initMaxAttempts = 20; // max attempts count
    
	$(params.changedEl).each(function(num) {
    var chEl = $(this);
    
    // check on initialized element
    if (!chEl.is("select") || chEl.prop("multiple"))
     return;
     
    _init(chEl, num, 1)
  });
  
  /***
   * Init select function
   * @param {jQuery} chEl Initialized select element
   * @param {Integer} num Index in array of elements, used for ID generation   
   * @param {Integer} attempt Attempt counts      
   */
   function _init(chEl, num, attempt) {
     var chElWid = chEl.outerWidth(); // ширина селекта
     
     if (chElWid <= 0) {
      if (attempt <= initMaxAttempts) {
        // delay init, until width  will be calculated
        window.setTimeout(function(){ _init(chEl, num, attempt+1); }, initTimeout);
        return;
      } else {
        // we don't have more attempts, set default width and continue
        chElWid = 200;
      }
     }
      
     var chElClass = chEl.prop("class"), // класс селекта
      chElId = chEl[0].id ? chEl[0].id : 'cuSel-' + Date.now() + '-'+num, // id
      chElName = chEl.prop("name"), // имя
      defaultVal = chEl.val(), // начальное значение
      activeOpt = chEl.find("option[value='"+defaultVal+"']").eq(0),    	
    	defaultAddTags = activeOpt.attr("addTags") ? activeOpt.attr("addTags") : '', // добавляем тег для стандартного значения
    	defaultSetClass = activeOpt.data('setclass') ? activeOpt.data('setclass') : '', // добавляем класс от активного опциона по дефаулта, для кастомного оформления
    	defaultText = activeOpt.text(), // начальный текст
      disabledSel = chEl.prop("disabled"), // заблокирован ли селект
      scrollArrows = params.scrollArrows,
      chElOnChange = chEl.prop("onchange"),
      chElTab = chEl.prop("tabindex");
      
      if(!disabledSel)
      {
        classDisCuselText = "", // для отслеживания клика по задизайбленному селекту
        classDisCusel=""; // для оформления задизейбленного селекта
      }
      else
      {
        classDisCuselText = "classDisCuselLabel";
        classDisCusel="classDisCusel";
      }
      
      if(scrollArrows)
      {
        classDisCusel+=" cuselScrollArrows";
      }
       
  	chEl.find('option').addClass('cuselItem'); // добавляем каждому опциону класс item, чтобы далее обращаться к этому классу, а не к span
      activeOpt.addClass("cuselActive");  // активному оптиону сразу добавляем класс для подсветки
    
    var optionStr = chEl.html(), // список оптионов
  
      
    /* 
      делаем замену тегов option на span, полностью сохраняя начальную конструкцию.
      value меняем на val, т.к. jquery отказывается воспринимать value у span
    */
    itemStr = optionStr.replace(/option/ig,"span").replace(/value=/ig,"val=");
    
    /* 
      для IE проставляем кавычки для значений, т.к. html() возращает код без кавычек
      что произошла корректная обработка value должно быть последний атрибутом option,
      например <option class="country" id="ukraine" value="/ukrane/">Украина</option>
    */
   /* if($.browser.msie && parseInt($.browser.version) < 9)
    {
      var pattern = /(val=)(.*?)(>)/g;
      itemStr = itemStr.replace(pattern, "$1'$2'$3");
    }*/
    
    /* каркас стильного селекта */
    var cuselFrame = '<div class="cusel '+chElClass+' '+classDisCusel+'"'+
            ' id=cuselFrame-'+chElId+
            ' style="width:'+chElWid+'px"'+
            ' tabindex="'+chElTab+'"'+
            '>'+
            '<div class="cuselFrameRight"></div>'+
            '<div data-class="'+defaultSetClass+'" class="cuselText '+defaultSetClass+'">'+defaultAddTags + '<label>'+activeOpt.text()+'</label></div>'+
            '<div class="cusel-scroll-wrap"><div class="cusel-scroll-pane" id="cusel-scroll-'+chElId+'">'+ 
            itemStr+
            '</div></div>'+
            '<input type="hidden" id="'+chElId+'" name="'+chElName+'" value="'+defaultVal+'" />'+
            '</div>';
            
            
    /* удаляем обычный селект, на его место вставляем стильный */
    chEl.replaceWith(cuselFrame);
    
    /* если был поцеплен onchange - цепляем его полю */
    if(chElOnChange) $("#"+chElId).bind('change',chElOnChange);
    
    
    var newSel = $("#cuselFrame-"+chElId),
      arrItems = newSel.find("span.cuselItem"),
      defaultHeight;
  	
  	/* оборачиваем текст оптионов в label, чтобы отделить от addTags */
  	arrItems.wrapInner('<label/>');
  	
    /*
      устаналиваем высоту выпадающих списков основываясь на числе видимых позиций и высоты одной позиции
      при чем только тем, у которых число оптионов больше числа заданного числа видимых
    */  
      
      if(!arrItems.eq(0).find('label').text())
      {
        defaultHeight = arrItems.eq(1).innerHeight();
        arrItems.eq(0).css("height", arrItems.eq(1).height());
      } 
      else
      {
        defaultHeight = arrItems.eq(0).innerHeight();
      }
      
    
    if(arrItems.length>params.visRows)
    {
      newSel.find(".cusel-scroll-wrap").eq(0)
        .css({height: defaultHeight*params.visRows+"px", display : "none", visibility: "visible" })
        .children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");
    }
    else
    {
      newSel.find(".cusel-scroll-wrap").eq(0)
        .css({display : "none", visibility: "visible" });
    }
    
    /* вставляем в оптионы дополнительные теги */
    
    var arrAddTags = $("#cusel-scroll-"+chElId).find("span[addTags]"),
      lenAddTags = arrAddTags.length;
      
      for(i=0;i<lenAddTags;i++) arrAddTags.eq(i)					
                      .prepend(arrAddTags.eq(i).attr("addTags"))
                      .removeAttr("addTags");
                      
    cuselEvents();
   
   }     

/* ---------------------------------------
  привязка событий селектам
------------------------------------------
*/
function cuselEvents() {
  var cb = cuselGetBox();

  $("html").off("click.cusel");
  
  $("html").on("click.cusel", function(e) {		
  
      var clicked = $(e.target),
        clickedId = clicked.attr("id"),
        clickedClass = clicked.prop("class");
		
		
        
      /* если кликнули по самому селекту (текст) */
      if( (clicked.hasClass("cuselText") || clicked.hasClass("cuselFrameRight") || clicked.parents(".cuselText:first").length ) && 
          !clicked.parents('.cusel:first').hasClass("classDisCusel") ) {
        var cuselWrap = clicked.parents('.cusel:first').find(".cusel-scroll-wrap").eq(0);
        
        /* если выпадающее меню скрыто - показываем */
        cuselShowList(cuselWrap);
      }
      /* если кликнули по самому селекту (контейнер) */
      else if(clicked.hasClass("cusel") && !clicked.hasClass("classDisCusel") && clicked.is("div"))
      {
    
        var cuselWrap = clicked.find(".cusel-scroll-wrap").eq(0);
        
        /* если выпадающее меню скрыто - показываем */
        cuselShowList(cuselWrap);
    
      }
      
      /* если выбрали позицию в списке */
      else if( ( clicked.parents('.cuselItem:first').length && !clicked.parents('.cuselItem:first').hasClass("cuselActive") ) || ( clicked.is('.cuselItem') && !clicked.hasClass("cuselActive") ) ) {
	  
		var setItem = clicked.is('.cuselItem') ? clicked : clicked.parents('.cuselItem:first'),			
			select = clicked.parents('.cusel:first').length ? clicked.parents('.cusel:first') : $(cb.data("cusel-select")),
			i = setItem.index();       

        if (!select.length)
          return;
		  
		  
        
        select
          .removeClass("cuselOpen")
          .find(".cuselActive").removeClass("cuselActive").end()
          .find(".cuselItem").eq(i).addClass("cuselActive");		  
		  
		cuselChange(select,setItem);
          
        cb.hide();
        // return focus to control
        select.focus();
      }
      
      else if(clicked.parents(".cusel-scroll-wrap").is("div")) {
        return;
      }
      
      /*
        скрываем раскрытые списки, если кликнули вне списка
      */
      else {
        if (cb.is(":visible")) {
          cb.hide();
          $(".cuselOpen").removeClass("cuselOpen");
        }
      }
  }); 
    
  $(".cusel").off("keydown.cusel"); /* чтобы не было двойного срабатывания события */
  $(".cusel").on("keydown.cusel", function(event) {
	var select = $(this),
		open = select.is('.cuselOpen') ? true : false,
		cb = $('#cuselBox');
    /*
      если селект задизайблин, с него работает только таб
    */
    var key, keyChar;
      
    if(window.event) key=window.event.keyCode;
    else if (event) key=event.which;
    
    if(key==null || key==0 || key==9) return true;
    
    if(select.prop("class").indexOf("classDisCusel")!=-1) return false;
	
	switch (key) {
		case 32: { // если нажали пробел
			if (!open)
				select.trigger('click');
			return false;
			break;
		}
		case 40: // если нажали стрелку вправо или вниз
		case 39: {
			if (open) {
				var cuselActive = cb.find(".cuselOptHover").eq(0).length ? cb.find(".cuselOptHover").eq(0) : cb.find(".cuselActive").eq(0),
					cuselActiveNext = cuselActive.next();
				
				if(cuselActiveNext.is(".cuselItem")) {				  
					cuselActive.removeClass("cuselOptHover");
					cuselActiveNext.addClass("cuselOptHover");
					
					/* прокручиваем к текущему оптиону */
					cuselScrollToCurent(cb.find(".cusel-scroll-wrap").eq(0));
				}
			} else {
				var cuselActive = select.find(".cuselOptHover").eq(0).length ? select.find(".cuselOptHover").eq(0) : select.find(".cuselActive").eq(0),
					cuselActiveNext = cuselActive.next();				
				
				if(cuselActiveNext.is(".cuselItem"))				
					cuselActiveNext.trigger('click');				
			}
			return false;
			break;
		}
		case 37: // если нажали стрелку влево или вверх
		case 38: {
			if (open) {
				var cuselActive = cb.find(".cuselOptHover").eq(0).length ? cb.find(".cuselOptHover").eq(0) : cb.find(".cuselActive").eq(0),
					cuselActivePrev = cuselActive.prev();
				
				if(cuselActivePrev.is(".cuselItem")) {				  
					cuselActive.removeClass("cuselOptHover");
					cuselActivePrev.addClass("cuselOptHover");
				
					/* прокручиваем к текущему оптиону */
					cuselScrollToCurent(cb.find(".cusel-scroll-wrap").eq(0));				
				}
			} else {
				var cuselActive = select.find(".cuselOptHover").eq(0).length ? select.find(".cuselOptHover").eq(0) : select.find(".cuselActive").eq(0),
					cuselActivePrev = cuselActive.prev();
				
				if(cuselActivePrev.is(".cuselItem"))
					cuselActivePrev.trigger('click');				
			}
			return false;
			break;
		}
		case 27: { // если нажали esc
			if (open) {
				select
				.removeClass("cuselOpen");
				cb.hide();
			} else
				select.blur();			
			break;
		}
		case 13: { // если нажали enter
			if (open) 
				cb.find(".cuselOptHover").eq(0).trigger('click').removeClass("cuselOptHover");
      return false;
			break;
		}
	}

  });
  
  /*
    функция отбора по нажатым символам (от Alexey Choporov)
    отбор идет пока пауза между нажатиями сиволов не будет больше 0.5 сек
    keypress нужен для отлова символа нажатой клавиш
  */
	var arr = [];
	$(".cusel").keypress(function(event) {
		var select = $(this),
			open = select.is('.cuselOpen') ? true : false;
			
		if (open) {
			var key,
				keyChar,
				cb = $('#cuselBox')
			if (window.event)
				key=window.event.keyCode;
			else if (event)
				key=event.which;
			
			if (key==null || key==0 || key==9)
				return true;
			
			if ($(this).prop("class").indexOf("classDisCusel")!=-1)
				return false;
	 
			arr.push(event);
			clearTimeout($.data(this, 'timer'));
			var wait = setTimeout(function() { handlingEvent() }, 500);
			select.data('timer', wait);
			function handlingEvent() {
				var charKey = [];
				for (var iK in arr) {
					if (window.event)
						charKey[iK]=arr[iK].keyCode;
					else if (arr[iK])
						charKey[iK]=arr[iK].which;
					charKey[iK]=String.fromCharCode(charKey[iK]).toUpperCase();
				}
				var arrOption=cb.find(".cuselItem label"),
					colArrOption=arrOption.length,
					i,
					letter;
				for (i=0;i<colArrOption;i++) {
					var match = true;
					for (var iter in arr) {
						letter=arrOption.eq(i).text().charAt(iter).toUpperCase();
						if (letter!=charKey[iter])
							match=false;
				  
					}
					if (match) {
						cb.find(".cuselOptHover").removeClass("cuselOptHover").end().find(".cuselItem").eq(i).addClass("cuselOptHover");
				
						/* прокручиваем к текущему оптиону */
						cuselScrollToCurent(cb.find(".cusel-scroll-wrap").eq(0));
						arr = arr.splice;
						arr = [];
						break;
						return true;
					}	
				}
				arr = arr.splice;
				arr = [];
			}
			if ($.browser.opera && window.event.keyCode!=9)
				return false;
		}
	});
  
}

/***
* Event change
*/ 

function cuselChange(select,setItem) {
	var addClass = setItem.data('setclass') ? setItem.data('setclass') : '',
		prevClass = select.find('.cuselText').data('class') ? select.find('.cuselText').data('class') : '',
		setItemVal = setItem.attr("val");
		
	 // preserve empty value here, otherwise return text itself according standard behavior
    if (typeof setItemVal == "undefined")
        setItemVal = setItem.find('label').text();
		
	select
		.find(".cuselText").removeClass(prevClass).data('class',addClass).addClass(addClass).html( setItem.html() ).end()
		.find("input").val(setItemVal).change();
}
  
  /***
   * Toggle dropdown list visibility
   */ 
  function cuselShowList(cuselWrap) {
    var cuselMain = cuselWrap.parent(".cusel"),
      cb = cuselGetBox();

    // remove from all selects  
    $(".cuselOpen").removeClass("cuselOpen");
    
    /* если выпадающее меню скрыто - показываем */
    if(cb.is(":hidden")) {
      cb.empty();
      cuselWrap.clone(true)
        .appendTo(cb)
        .show();
        
      cb.show()
        // store node on data for future usage
        .data("cusel-select", cuselMain[0]);
      
      if ($.ui) {
        // using more intelligent position method from $.ui here
        cb.position({
          my: "left top",
          at: "left bottom",
          of: cuselMain,
        });
      } else {
        var pos = cuselMain.offset();
        cb.offset({
          left: pos.left,
          top: pos.top + cuselMain.outerHeight()
        });
      }
      cb.css("min-width", cuselMain.outerWidth() + "px");

      cuselMain.addClass("cuselOpen");
  
      var cuselArrows = cuselMain.hasClass("cuselScrollArrows");
      cb.find(".cusel-scroll-pane")
        .jScrollPaneCusel({showArrows: cuselArrows});
          
      /* прокручиваем к текущему оптиону */
      cuselScrollToCurent(cb.find(".cusel-scroll-wrap"));
    } else {
      // otherwise hide menu
      cb.hide()
        .removeData("cusel-select");
    }
  }
  
/***
* Scroll down list to the current element
*/
	function cuselScrollToCurent(cuselWrap) {
		var cuselScrollEl = cuselWrap.find(".cuselOptHover:first").length ? cuselWrap.find(".cuselOptHover:first") : cuselWrap.find(".cuselActive:first");
  
		if(cuselWrap.find(".jScrollPaneTrack:first").length && cuselScrollEl.length) {
			var posCurrentOpt = cuselScrollEl.position(),
			idScrollWrap = cuselWrap.find(".cusel-scroll-pane:first")[0].id;  
			cuselWrap.find(".cusel-scroll-pane")[0].scrollTo(posCurrentOpt.top);  
		} 
	}
  
  /***
   * Return or create box for dropdown list
   */ 
  function cuselGetBox() {
    var b = $("#cuselBox");
    if (!b.length) {
      b = $('<div id="cuselBox">').hide().appendTo("body");
    }
    return b;
  }
  
}


/***
 * Refresh stylized selects
 *  
 * @param {Object} params Refresh params, see cuSel function for details 
 * @description If you changed number of elements in list or show hidden select, you need to call this function to refresh
 */  
function cuSelRefresh(params) {
  /*
    устаналиваем высоту выпадающих списков основываясь на числе видимых позиций и высоты одной позиции
    при чем только тем, у которых число опций больше числа заданного числа видимых
  */

  var arrRefreshEl = params.refreshEl.split(","),
    lenArr = arrRefreshEl.length,
    i;
  
  for(i=0;i<lenArr;i++)
  {
    var refreshScroll = $(arrRefreshEl[i]).parents(".cusel").find(".cusel-scroll-wrap").eq(0);
    refreshScroll.find(".cusel-scroll-pane").jScrollPaneRemoveCusel();
    refreshScroll.css({visibility: "hidden", display : "block"});
  
    var arrItems = refreshScroll.find(".cuselItem"),
      defaultHeight = arrItems.eq(0).outerHeight();
    
  
    if(arrItems.length>params.visRows)
    {
      refreshScroll
        .css({height: defaultHeight*params.visRows+"px", display : "none", visibility: "visible" })
        .children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");
    }
    else
    {
      refreshScroll
        .css({display : "none", visibility: "visible" });
    }
  }
}

/***
 * Set select value
 * @param {Selector} select
 * @param value New value  
 */
function cuselSetValue(select, value) {
  var $elem = $(select).closest(".cusel"),
    $item = $elem.find(".cuselItem[val="+value+"]").first();
  
  if (!$item.length)
    return false;

  // invoke value change  
  $item.click();    
}  

;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
;(function($) {

$.jScrollPaneCusel = {
	active : []
};
$.fn.jScrollPaneCusel = function(settings)
{
	settings = $.extend({}, $.fn.jScrollPaneCusel.defaults, settings);

	var rf = function() { return false; };
	
	return this.each(
		function()
		{
			var $this = $(this);
			var cuselWid = this.parentNode.offsetWidth;
			
						
			// Switch the element's overflow to hidden to ensure we get the size of the element without the scrollbars [http://plugins.jquery.com/node/1208]
			$this.css('overflow', 'hidden');
			var paneEle = this;
			if ($(this).parent().is('.jScrollPaneContainer')) {
				var currentScrollPosition = settings.maintainPosition ? $this.position().top : 0;
				var $c = $(this).parent();
				var paneWidth = cuselWid;
				var paneHeight = $c.outerHeight();
				var trackHeight = paneHeight;
				$('>.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown', $c).remove();
				$this.css({'top':0});
			} else {
				var currentScrollPosition = 0;
				this.originalPadding = $this.css('paddingTop') + ' ' + $this.css('paddingRight') + ' ' + $this.css('paddingBottom') + ' ' + $this.css('paddingLeft');
				this.originalSidePaddingTotal = (parseInt($this.css('paddingLeft')) || 0) + (parseInt($this.css('paddingRight')) || 0);
				
				
				var paneWidth = cuselWid;
				var paneHeight = $this.innerHeight();
				var trackHeight = paneHeight;
				$this
					.wrap("<div class='jScrollPaneContainer'></div>")
					.parent().css({'height':paneHeight+'px', 'width':paneWidth+'px'});
				if(!window.navigator.userProfile) /* for ie6 ne umenshaem width block na tolshinu bordera */
				{
					var borderWid = parseInt($(this).parent().css("border-left-width"))+parseInt($(this).parent().css("border-right-width"));
					paneWidth-=borderWid;
					$(this)
						.css("width",paneWidth+"px")
						.parent().css("width",paneWidth+"px");
				
				}
				// deal with text size changes (if the jquery.em plugin is included)
				// and re-initialise the scrollPane so the track maintains the
				// correct size
				$(document).bind(
					'emchange', 
					function(e, cur, prev)
					{
						$this.jScrollPaneCusel(settings);
					}
				);
				
			}
			
			
			if (settings.reinitialiseOnImageLoad) {
				// code inspired by jquery.onImagesLoad: http://plugins.jquery.com/project/onImagesLoad
				// except we re-initialise the scroll pane when each image loads so that the scroll pane is always up to size...
				// TODO: Do I even need to store it in $.data? Is a local variable here the same since I don't pass the reinitialiseOnImageLoad when I re-initialise?
				var $imagesToLoad = $.data(paneEle, 'jScrollPaneImagesToLoad') || $('img', $this);
				var loadedImages = [];
				
				if ($imagesToLoad.length) {
					$imagesToLoad.each(function(i, val)	{
						$(this).bind('load', function() {
							if($.inArray(i, loadedImages) == -1){ //don't double count images
								loadedImages.push(val); //keep a record of images we've seen
								$imagesToLoad = $.grep($imagesToLoad, function(n, i) {
									return n != val;
								});
								$.data(paneEle, 'jScrollPaneImagesToLoad', $imagesToLoad);
								settings.reinitialiseOnImageLoad = false;
								$this.jScrollPaneCusel(settings); // re-initialise
							}
						}).each(function(i, val) {
							if(this.complete || this.complete===undefined) { 
								//needed for potential cached images
								this.src = this.src; 
							} 
						});
					});
				};
			}

			var p = this.originalSidePaddingTotal;
			
			var cssToApply = {
				'height':'auto',
				'width':paneWidth - settings.scrollbarWidth - settings.scrollbarMargin - p + 'px'
			}

			if(settings.scrollbarOnLeft) {
				cssToApply.paddingLeft = settings.scrollbarMargin + settings.scrollbarWidth + 'px';
			} else {
				cssToApply.paddingRight = settings.scrollbarMargin + 'px';
			}

			$this.css(cssToApply);

			var contentHeight = $this.outerHeight();
			var percentInView = paneHeight / contentHeight;

			if (percentInView < .99) {
				var $container = $this.parent();
				
				$container.append(
					$('<div class="jScrollPaneTrack"></div>').css({'width':settings.scrollbarWidth+'px'}).append(
						$('<div class="jScrollPaneDrag"></div>').css({'width':settings.scrollbarWidth+'px'}).append(
							$('<div class="jScrollPaneDragTop"></div>').css({'width':settings.scrollbarWidth+'px'}),
							$('<div class="jScrollPaneDragBottom"></div>').css({'width':settings.scrollbarWidth+'px'})
						)
					)
				);
				
				var $track = $('>.jScrollPaneTrack', $container);
				var $drag = $('>.jScrollPaneTrack .jScrollPaneDrag', $container);
								
				
				if (settings.showArrows) {
					
					var currentArrowButton;
					var currentArrowDirection;
					var currentArrowInterval;
					var currentArrowInc;
					var whileArrowButtonDown = function()
					{
						if (currentArrowInc > 4 || currentArrowInc%4==0) {
							positionDrag(dragPosition + currentArrowDirection * mouseWheelMultiplier);
						}
						currentArrowInc ++;
					};
					var onArrowMouseUp = function(event)
					{
						$('html').unbind('mouseup', onArrowMouseUp);
						currentArrowButton.removeClass('jScrollActiveArrowButton');
						clearInterval(currentArrowInterval);
					};
					var onArrowMouseDown = function() {
						$('html').bind('mouseup', onArrowMouseUp);
						currentArrowButton.addClass('jScrollActiveArrowButton');
						currentArrowInc = 0;
						whileArrowButtonDown();
						currentArrowInterval = setInterval(whileArrowButtonDown, 100);
					};
					$container
						.append(
							$('<div></div>')
								.attr({'class':'jScrollArrowUp'})
								.css({'width':settings.scrollbarWidth+'px'})
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = -1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf),
							$('<div></div>')
								.attr({'class':'jScrollArrowDown'})
								.css({'width':settings.scrollbarWidth+'px'})
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = 1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf)
						);
					var $upArrow = $('>.jScrollArrowUp', $container);
					var $downArrow = $('>.jScrollArrowDown', $container);
					if (settings.arrowSize) {
						trackHeight = paneHeight - settings.arrowSize - settings.arrowSize;
						$track
							.css({'height': trackHeight+'px', top:settings.arrowSize+'px'})
					} else {
						var topArrowHeight = $upArrow.height();
						settings.arrowSize = topArrowHeight;
						trackHeight = paneHeight - topArrowHeight - $downArrow.height();
						$track
							.css({'height': trackHeight+'px', top:topArrowHeight+'px'})
					}
				}
				
				var $pane = $(this).css({'position':'absolute', 'overflow':'visible'});
				
				var currentOffset;
				var maxY;
				var mouseWheelMultiplier;
				// store this in a seperate variable so we can keep track more accurately than just updating the css property..
				var dragPosition = 0;
				var dragMiddle = percentInView*paneHeight/2;
				
				// pos function borrowed from tooltip plugin and adapted...
				var getPos = function (event, c) {
					var p = c == 'X' ? 'Left' : 'Top';
					return event['page' + c] || (event['client' + c] + (document.documentElement['scroll' + p] || document.body['scroll' + p])) || 0;
				};
				
				var ignoreNativeDrag = function() {	return false; };
				
				var initDrag = function()
				{
					ceaseAnimation();
					currentOffset = $drag.offset();
					currentOffset.top -= dragPosition;
					maxY = trackHeight - $drag[0].offsetHeight;
					mouseWheelMultiplier = 2 * settings.wheelSpeed * maxY / contentHeight;
				};
				
				var onStartDrag = function(event)
				{
					initDrag();
					dragMiddle = getPos(event, 'Y') - dragPosition - currentOffset.top;
					$('html').bind('mouseup', onStopDrag).bind('mousemove', updateScroll);
					/*if ($.browser.msie) {
						$('html').bind('dragstart', ignoreNativeDrag).bind('selectstart', ignoreNativeDrag);
					}*/
					return false;
				};
				var onStopDrag = function()
				{
					$('html').unbind('mouseup', onStopDrag).unbind('mousemove', updateScroll);
					dragMiddle = percentInView*paneHeight/2;
					/*if ($.browser.msie) {
						$('html').unbind('dragstart', ignoreNativeDrag).unbind('selectstart', ignoreNativeDrag);
					}*/
				};
				var positionDrag = function(destY)
				{
					destY = destY < 0 ? 0 : (destY > maxY ? maxY : destY);
					dragPosition = destY;
					$drag.css({'top':destY+'px'});
					var p = destY / maxY;
					$pane.css({'top':((paneHeight-contentHeight)*p) + 'px'});
					$this.trigger('scroll');
					if (settings.showArrows) {
						$upArrow[destY == 0 ? 'addClass' : 'removeClass']('disabled');
						$downArrow[destY == maxY ? 'addClass' : 'removeClass']('disabled');
					}
				};
				var updateScroll = function(e)
				{
					positionDrag(getPos(e, 'Y') - currentOffset.top - dragMiddle);
				};
				
				var dragH = Math.max(Math.min(percentInView*(paneHeight-settings.arrowSize*2), settings.dragMaxHeight), settings.dragMinHeight);
				
				$drag.css(
					{'height':dragH+'px'}
				).bind('mousedown', onStartDrag);
				
				var trackScrollInterval;
				var trackScrollInc;
				var trackScrollMousePos;
				var doTrackScroll = function()
				{
					if (trackScrollInc > 8 || trackScrollInc%4==0) {
						positionDrag((dragPosition - ((dragPosition - trackScrollMousePos) / 2)));
					}
					trackScrollInc ++;
				};
				var onStopTrackClick = function()
				{
					clearInterval(trackScrollInterval);
					$('html').unbind('mouseup', onStopTrackClick).unbind('mousemove', onTrackMouseMove);
				};
				var onTrackMouseMove = function(event)
				{
					trackScrollMousePos = getPos(event, 'Y') - currentOffset.top - dragMiddle;
				};
				var onTrackClick = function(event)
				{
					initDrag();
					onTrackMouseMove(event);
					trackScrollInc = 0;
					$('html').bind('mouseup', onStopTrackClick).bind('mousemove', onTrackMouseMove);
					trackScrollInterval = setInterval(doTrackScroll, 100);
					doTrackScroll();
				};
				
				$track.bind('mousedown', onTrackClick);
				
				$container.bind(
					'mousewheel',
					function (event, delta) {
						initDrag();
						ceaseAnimation();
						var d = dragPosition;
						positionDrag(dragPosition - delta * mouseWheelMultiplier);
						var dragOccured = d != dragPosition;
						return false;
					}
				);

				var _animateToPosition;
				var _animateToInterval;
				function animateToPosition()
				{
					var diff = (_animateToPosition - dragPosition) / settings.animateStep;
					if (diff > 1 || diff < -1) {
						positionDrag(dragPosition + diff);
					} else {
						positionDrag(_animateToPosition);
						ceaseAnimation();
					}
				}
				var ceaseAnimation = function()
				{
					if (_animateToInterval) {
						clearInterval(_animateToInterval);
						delete _animateToPosition;
					}
				};
				var scrollTo = function(pos, preventAni)
				{
					if (typeof pos == "string") {
						$e = $(pos, $this);
						if (!$e.length) return;
						pos = $e.offset().top - $this.offset().top;
					}
					$container.scrollTop(0);
					ceaseAnimation();
					var destDragPosition = -pos/(paneHeight-contentHeight) * maxY;
					if (preventAni || !settings.animateTo) {
						positionDrag(destDragPosition);
					} else {
						_animateToPosition = destDragPosition;
						_animateToInterval = setInterval(animateToPosition, settings.animateInterval);
					}
				};
				$this[0].scrollTo = scrollTo;
				
				$this[0].scrollBy = function(delta)
				{
					var currentPos = -parseInt($pane.css('top')) || 0;
					scrollTo(currentPos + delta);
				};
				
				initDrag();
				
				scrollTo(-currentScrollPosition, true);
			
				// Deal with it when the user tabs to a link or form element within this scrollpane
				$('*', this).bind(
					'focus',
					function(event)
					{
						var $e = $(this);
						
						// loop through parents adding the offset top of any elements that are relatively positioned between
						// the focused element and the jScrollPaneContainer so we can get the true distance from the top
						// of the focused element to the top of the scrollpane...
						var eleTop = 0;
						
						while ($e[0] != $this[0]) {
							eleTop += $e.position().top;
							$e = $e.offsetParent();
						}
						
						var viewportTop = -parseInt($pane.css('top')) || 0;
						var maxVisibleEleTop = viewportTop + paneHeight;
						var eleInView = eleTop > viewportTop && eleTop < maxVisibleEleTop;
						if (!eleInView) {
							var destPos = eleTop - settings.scrollbarMargin;
							if (eleTop > viewportTop) { // element is below viewport - scroll so it is at bottom.
								destPos += $(this).height() + 15 + settings.scrollbarMargin - paneHeight;
							}
							scrollTo(destPos);
						}
					}
				)
				
				
				if (location.hash) {
					scrollTo(location.hash);
				}
				
				// use event delegation to listen for all clicks on links and hijack them if they are links to
				// anchors within our content...
				$(document).bind(
					'click',
					function(e)
					{
						$target = $(e.target);
						if ($target.is('a')) {
							var h = $target.attr('href');
							if (h.substr(0, 1) == '#') {
								scrollTo(h);
							}
						}
					}
				);
				
				$.jScrollPaneCusel.active.push($this[0]);
				
			} else {
				$this.css(
					{
						'height':paneHeight+'px',
						'width':paneWidth-this.originalSidePaddingTotal+'px',
						'padding':this.originalPadding
					}
				);
				// remove from active list?
				$this.parent().unbind('mousewheel');
			}
			
		}
	)
};
$.fn.jScrollPaneRemoveCusel = function()
{
	$(this).each(function()
	{
		$this = $(this);
		var $c = $this.parent();
		if ($c.is('.jScrollPaneContainer')) {
			$this.css(
				{
					'top':'',
					'height':'',
					'width':'',
					'padding':'',
					'overflow':'',
					'position':''
				}
			);
			$this.attr('style', $this.data('originalStyleTag'));
			$c.after($this).remove();
		}
	});
}

$.fn.jScrollPaneCusel.defaults = {
	scrollbarWidth : 10,
	scrollbarMargin : 5,
	wheelSpeed : 18,
	showArrows : false,
	arrowSize : 0,
	animateTo : false,
	dragMinHeight : 1,
	dragMaxHeight : 99999,
	animateInterval : 100,
	animateStep: 3,
	maintainPosition: true,
	scrollbarOnLeft: false,
	reinitialiseOnImageLoad: false
};

// clean up the scrollTo expandos
$(window)
	.bind('unload', function() {
		var els = $.jScrollPaneCusel.active; 
		for (var i=0; i<els.length; i++) {
			els[i].scrollTo = els[i].scrollBy = null;
		}
	}
);

})(jQuery);
;$(function() {
    $(function() {
        $('[data-jcarousel]').each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $('[data-jcarousel-control]').each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });
    });

    var params = {
        changedEl: '.teams',
        visRows: 5,
        scrollArrows: true
    };
    cuSel(params);

    $('input').styler();

});