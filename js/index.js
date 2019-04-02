/* sidebar start*/

(function(){
	var $navList = $("#sidebar .s-nav li.list-hide .list-div");
	var $hide = $("#sidebar .s-nav .hide");
	var $fright = $("#sidebar .s-nav .fa-right");
	var $sidebar = $("#sidebar");
	var _height = $("#container").height();
	$sidebar.css("height",_height);
	// 垂直手风琴多级下拉菜单
	$navList.click(function(ev){
		var ev = ev || window.event;
		ev.stopPropagation();
		if ($(this).parent().find($hide).css('display') == 'none') {
			$(this).parent().find($hide).stop().slideDown();
			$(this).find($fright).css("transform","rotate(90deg)");
		} else{
			$(this).parent().find($hide).stop().slideUp();
			$(this).find($fright).css("transform","rotate(0deg)");
		}
	});
})()
/* end sidebar */

/* type start*/
$(function(){
	var $list_hide = $("#sidebar .hide li");
	var $text = $("#container .con-top h3");
	
	$list_hide.click(function(){
		var text = $(this).find("a").html();
		$text.html(text);
	})
})
/*end type*/
