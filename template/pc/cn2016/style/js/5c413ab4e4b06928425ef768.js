
		$(".banner").slide({
			titCell: ".hdu  li",
			mainCell: ".bdu",
			autoPlay: true,
			titOnClassName: "on",
			effect: "fold",
			vis: 1,
			interTime: 3000
		});
	

				var key = document.getElementById("key");
			function searchInfo() {
				var base = $('head').data('zxinghao');
				if (key.value) {
					location.href =  "/search/" ;
				} else {
					alert('请输入您要搜索的关键词！');
				}
			}
		

		jQuery(".fasm").slide({titCell:".fanav ul li",mainCell:".ys_box",effect:"fold",titOnClassName:"cur"});
		jQuery(".qh").slide({mainCell:"ul",effect:"leftLoop",autoPlay:true,vis:3,prevCell:".jt .prev",nextCell:".jt .next"});
	

		jQuery(".newssm").slide({titCell:"span a",mainCell:".yn_box",effect:"fold",titOnClassName:"cur"});
	

		jQuery(".abt_sm").slide({titCell:".hd ul li",mainCell:".yb_box",effect:"fold",titOnClassName:"cur"});
	

	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};


        $(function() {
            var time;
            //var winHeight = top.window.document.body.clientHeight || $(window.parent).height();
            $('.client-2').css({
                'marginTop': -($('.client-2').height() / 2)
            });
            $('#client-2 li').on({
                'mouseenter': function() {
                    var scope = this;
                    time = setTimeout(function() {
                        var divDom = $(scope).children('div');
                        var maxWidth = divDom.width();
                        $(scope).stop().animate({
                            left: 77-maxWidth}, 'normal', function() {
                            var pic = $(scope).find('.my-kefu-weixin-pic');
                            if (pic.length > 0) {
                                pic.show();
                            }
                        });
                    }, 100)
                },
                'mouseleave': function() {
                    var pic = $(this).find('.my-kefu-weixin-pic');
                    var divDom = $(this).children('div');
                    var maxWidth = divDom.width();
                    if (pic.length > 0) {
                        pic.hide();
                    }
                    clearTimeout(time);
                    var divDom = $(this).children('div');
                    $(this).stop().animate({
                        left: 0
                    }, "normal", function() {});
                }
            });
            //返回顶部
            $(window).scroll(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                var eltop = $("#client-2").find(".my-kefu-ftop");
                if (scrollTop > 0) {
                    eltop.show();
                } else {
                    eltop.hide();
                }
            });
            $("#client-2").find(".my-kefu-ftop").click(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if (scrollTop > 0) {
                    $("html,body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            });
        });
    
