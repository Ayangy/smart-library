// !function(a){a.fn.scrollForever=function(b){var c={placeholder:0,dir:"left",container:"ul",inner:"li",speed:1e3,delayTime:0,continuous:!0,num:1},d=a.extend({},c,b),e=d.placeholder,f=d.dir,g=d.speed;d.Time;var i=d.num,j=d.delayTime;return this.each(function(){function s(){q=h.outerWidth(),r=h.outerHeight(),d.continuous?"left"==f?(l=q*k,c.css("width",2*l),p&&(h.clone().appendTo(c),p=!1)):"top"==f&&(l=r*k,c.css("height",2*l),p&&(h.clone().appendTo(c),p=!1)):"left"==f?(e=0!=e?e:q*i,l=q*(k+1),c.css("width",l)):"top"==f&&(e=0!=e?e:r*i,l=r*(k+1),c.css("height",l))}function t(){d.continuous?"left"==f?(m=b.scrollLeft(),m>=l?b.scrollLeft(0):b.scrollLeft(m+1)):"top"==f&&(m=b.scrollTop(),m>=l?b.scrollTop(0):b.scrollTop(m+1)):"left"==f?c.animate({marginLeft:"-"+e},g,function(){c.css({marginLeft:0}).find(d.inner+":lt("+i+")").appendTo(c)}):"top"==f&&c.animate({marginTop:"-"+e},g,function(){c.css({marginTop:0}).find(d.inner+":lt("+i+")").appendTo(c)})}var l,m,n,o,q,r,b=a(this),c=b.find(d.container),h=c.find(d.inner),k=h.length,p=!0;a(window).on("resize",function(){clearTimeout(o),o=setTimeout(s,250)}),s();var u=1==d.continuous?20:2e3;j=0==j?u:j,n=setInterval(t,j),b.hover(function(){clearInterval(n)},function(){n=setInterval(t,j)})})}}(jQuery);

(function($) {
    //plugin name: scrollForever
    //plugin author: caibaojian
    //plugin url: http://caibaojian.com/scrollForever
    //plugin demo: http://caibaojian.com/demo/scrollForever/
    //license: MIT
    $.fn.scrollForever = function(options) {
        var defaults = {
            placeholder: 0,//非连续滚动时每次的滑动距离，可以自定义，如果没有自定义则根
            dir: 'left',//滚动方向，left & top
            container: 'ul',//外层对象
            inner: 'li',//内部元素
            speed: 1000,//非连续滚动速度
            delayTime: 0,//滚动间隔
            continuous: true,//是否连续
            num: 1//非连续一次滚动的数量
        };
        var opts = $.extend({}, defaults, options);
        var placeHolder = opts.placeholder;
        var dir = opts.dir;
        var speed = opts.speed;
        var Time = opts.Time;
        var num = opts.num;
        var delayTime = opts.delayTime;
        return this.each(function() {
            var obj = $(this);
            var container = obj.find(opts.container);
            var inner = container.find(opts.inner);
            var len = inner.length;
            var distance, scrollDistance, scrollTime;
            //滚动前的准备工作
            function setScroll() {
                if (opts.continuous) {
                    if (dir == 'left') {
                        distance = inner.outerWidth() * len;
                        container.css('width', 2 * distance);
                        inner.clone().appendTo(container);
                    } else if (dir == 'top') {
                        distance = inner.outerHeight() * len;
                        container.css('height', 2 * distance);
                        inner.clone().appendTo(container);
                    }
                } else {
                    if (dir == 'left') {
                        placeHolder = placeHolder != 0 ? placeHolder : inner.outerWidth() * num;
                        distance = inner.outerWidth() * (len + 1);
                        container.css('width', distance);
                    } else if (dir == 'top') {
                        placeHolder = placeHolder != 0 ? placeHolder : inner.outerHeight() * num;
                        distance = inner.outerHeight() * (len + 1);
                        container.css('height', distance);
                    }
                }
            }
            setScroll();
            function autoScroll() {

                if (opts.continuous) {
                    //无缝不间歇滚动
                    if (dir == 'left') {
                        scrollDistance = obj.scrollLeft();
                        if (scrollDistance >= distance) {
                            obj.scrollLeft(0);
                        } else {
                            obj.scrollLeft(scrollDistance + 1);
                        }
                    } else if (dir == 'top') {
                        scrollDistance = obj.scrollTop();
                        if (scrollDistance >= distance) {
                            obj.scrollTop(0);
                        } else {
                            obj.scrollTop(scrollDistance + 1);
                        }
                    }
                } else {
                    //非连续滚动，间断无缝滚动
                    if (dir == 'left') {
                        container.animate({
                            marginLeft: '-' + placeHolder
                        }, speed, function() {
                            container.css({
                                marginLeft: 0
                            }).find(opts.inner + ":lt(" + num + ")").appendTo(container);
                        });
                    } else if (dir == 'top') {
                        container.animate({
                            marginTop: "-" + placeHolder
                        }, speed, function() {
                            container.css({
                                marginTop: 0
                            }).find(opts.inner + ":lt(" + num + ")").appendTo(container);
                        });
                    }
                }

            }

            //滚动函数
            var aTime = opts.continuous == true ? 20 : 2000;
            delayTime = delayTime == 0 ? aTime : delayTime;
            scrollTime = setInterval(autoScroll, delayTime);
            obj.hover(function() {
                clearInterval(scrollTime);
            }, function() {
                scrollTime = setInterval(autoScroll, delayTime);
            });
        })
    }
})(jQuery);