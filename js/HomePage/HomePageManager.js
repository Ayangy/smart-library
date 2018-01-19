/**
 * Created by zhang_jian on 2017/11/27.
 */
Date.prototype.Format = function(fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

function isNull(object) {
	if (object == null || typeof object == "undefined") {
		return true;
	}
	return false;
};

function getWeek(dateString) {
	var date;
	if (isNull(dateString)) {
		date = new Date();
	} else {
		var dateArray = dateString.split("-");
		date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
	}
	//var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
	//return "星期" + weeks[date.getDay()];
	return "星期" + "日一二三四五六".charAt(date.getDay());
};

//LOGO日期展示
var currentDate = new Date().Format('yyyy-MM-dd');
var currentWeek = getWeek(currentDate);
var currentTime = currentDate + ' ' + currentWeek;
$('.logo_left .center_url .zkduty').html(currentTime);

//底部子菜单
var footLink = '<div class="footerSubMenu"><dl><dt><a href="aboutUs.html?id=1">关于我们</a>&nbsp;&nbsp;|</dt><dt><a href="aboutUs.html?id=2">加入联盟</a>&nbsp;&nbsp;|</dt><dt><a href="aboutUs.html?id=3">法律顾问</a>&nbsp;&nbsp;|</dt><dt><a href="aboutUs.html?id=4">广告服务</a>&nbsp;&nbsp;|</dt><dt><a href="aboutUs.html?id=5">网站声明</a>&nbsp;&nbsp;|</dt><dt><a href="aboutUs.html?id=6">联系我们</a></dt></dl></div>'
$('.footer .container .logomap').after(footLink);

$('.footer .logo').attr('src', 'img/bottom-logo1.png')

//顶部首页
var homehtml = '<li class="top_back_home" style="position: absolute;left:115px;top:15px;"><a href="index.html"  style="color:#434343;">首页</a></li>';
$('.top_nav_center li').eq(1).after(homehtml);

//var backTopHtml = '<div id="right_back" class="right_back"><div id="to_top"><img src="img/backTop.png"/><p>返回顶部</p></div><div class="line"><img src="img/line.png"></div><div id="to_home"><img src="img/backHome.png"/><p>返回首页</p></div></div>';
//$('.top_nav').before(backTopHtml);

$('#to_home').click(function() {
	location.href = 'index.html';
})

$(function() {
	$("#backTop").hover(function() {
		$(this).attr('src', 'img/backTopHover.png');
	}, function() {
		$(this).attr('src', 'img/backTop1.png');
	})

	$("#backHome").hover(function() {
		$(this).attr('src', 'img/backHomeHover.png');
	}, function() {
		$(this).attr('src', 'img/backHome1.png');
	})
})

/*window.onload = function(){
    var oTop = document.getElementById("backTop");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    //oTop.style.left = screenw - oTop.offsetWidth +"px";
    //oTop.style.top = screenh - oTop.offsetHeight + "px";
    //$('#right_back').hide();
    /!*window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
        //$('#right_back').show();
    }*!/
    oTop.onclick = function(){
        //$('#right_back').hide();
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}*/

function backTopEvent() {
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}


document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

var kindContentArr = [];
var recommendContentArr = [];
var newestContentArr = [];
var videoNews = null;
var videoNews1 = null;
var articleArr = [];

// 2.1.6、获取优选资讯
function getArticle(textTypeId, callBack) {
	http.get(BaseUrl + "/frontEnd/article?textTypeId=" + textTypeId, function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case -1:
				{
					//alert(result.message);
				}
				break;
			case 0:
				{
					articleArr = result.result;
					if (articleArr.length > 0) {
						if (callBack != null) {
							callBack(articleArr);
						} else {
							var content = '<ul class="news-list-lg">';
							for (var i = 0; i < articleArr.length; i++) {
								var subObj = articleArr[i];
								content += '<li>';
								content += '<a href="zkyw-details.html?' + subObj.id + '" onclick="articleClickEvent(' + subObj.id + ')">';
								content += '<div><img src="' + subObj.imgUrl + '" alt=""></div>';
								content += '<h4>' + subObj.title + '</h4>';
								// content += '<p>' + subObj.content.length > 168 ? subObj.content.substring(0,168):subObj.content + '</p>';
								content += subObj.content.length > 80 ? subObj.content.substring(0, 80) : subObj.content;
								content += '</li>';
							}
							document.getElementById("articleList").innerHTML = content;
						}
					}
				}
				break;
			default:
				break;
		}
	});
}


// 2.1.6、获取智库视频
function findVideoNews(index, size, query, callBack) {
	var params = '';
	if (index != null) {
		params += '?index=' + index;
	}
	if (size != null) {
		if (params.length == 0) params += '?size=' + size;
		else params += '&size=' + size;
	}
	if (query != null) {
		params += '&query=' + query;
	}
	http.get(BaseUrl + "/frontEnd/findByString" + params, function(err, result) {

		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case -1:
				{
					//alert(result.message);
				}
				break;
			case 0:
				{
					var resultArr = result.result;
					if (resultArr.length > 0) {
						if (callBack != null) {
							callBack(resultArr,result);
						} else {
							videoNews = resultArr[0];
							videoNews1 = resultArr[1];
							var content = '<dl class="hidden videoList">';
							content += '<li>';
							// content += '<dt><img src="img/news.jpg" height="209" width="350"></dt>';
							content += '<dt><video src="' + videoNews.videoUrl + '" controls>';
							content += '<dd>';
							content += '<a href="listvideo-details.html?' + videoNews.id + '" onclick="videonewsClickEvent(' + videoNews.id + ')">';
							content += '<h4>' + videoNews.title + '</h4>';
							content += '<p>' + videoNews.content + '</p>';
							content += '</a></dd>';
							content += '</li>';
							content += '<li>';
							// content += '<dt><img src="img/news.jpg" height="209" width="350"></dt>';
							content += '<dt><video src="' + videoNews1.videoUrl + '" controls>';
							content += '<dd>';
							content += '<a href="listvideo-details.html?' + videoNews1.id + '" onclick="videonewsClickEvent(' + videoNews1.id + ')">';
							content += '<h4>' + videoNews1.title + '</h4>';
							content += '<p>' + videoNews1.content + '</p>';
							content += '</a></dd>';
							content += '</li>';
							content += '</dl>';
							document.getElementById("findVideoNews").innerHTML = content;
						}
					} else {
						 callBack(resultArr,result);
					}
				}
				break;
			default:
				break;
		}
	});
}

function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

//2.11 获取五个同类文章
function getKind(textTypeId) {

	http.get(BaseUrl + "/frontEnd/getKind?textTypeId=" + textTypeId, function(err, result) {

		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case -1:
				{
					//alert(result.message);
				}
				break;
			case 0:
				{
					kindContentArr = result.result;
					if (kindContentArr.length > 0) {
						var content = '<h3>同类文章</h3>';
						content += '<ul>';
						for (var i = 0; i < kindContentArr.length; i++) {
							var subObj = kindContentArr[i];
							content += '<li><a href="#' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ','+subObj.textTypeId+')">•&nbsp;&nbsp;' + subObj.title + '</a></li>';
						}
						document.getElementById("KindList").innerHTML = content;
					}
				}
				break;
			default:
				break;
		}
	});
}

// 2.1.5、获取轮播图展示的文章
//2.12 获取五个推荐文章
function getRecommendArticle(recommend) {

	http.get(BaseUrl + "/frontEnd/getRecommendArticle?recommend=" + recommend + (recommend == 0 ? '&size=3' : ''), function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case -1:
				{
					//alert(result.message);
				}
				break;
			case 0:
				{
					recommendContentArr = result.result;
					if (recommendContentArr.length > 0) {
						{
							var content = '<div class="pages" data-scro="list">';
							content += '<ul>';
							for (var i = 0; i < recommendContentArr.length; i++) {
								var subObj = recommendContentArr[i];
//								console.log('每一条智库动态',subObj);
								var title = subObj.title;
								title = title.length < 24 ? title : title.substring(0, 23) + '...';
								content += '<li class="item"' + (i == 0 ? ' style="left:0;">' : '>');
								content += '<a href="news-details.html?' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ','+subObj.textTypeId+')"><img style="width:455px" src=' + subObj.imgUrl + '></a>';
								content += '<h3><a href="news-details.html?' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ','+subObj.textTypeId+')">' + title + '</a></h3>';
								content += '<div></div>';
								content += '</li>';
							}
							content += '</ul>';
							content += '</div>';
							content += '<div class="controler" data-scro="controler">';
							content += '<b class="down">1</b>';
							content += '<b>2</b>';
							content += '<b>3</b>';
							content += '</div>';
							document.getElementById("section-focus-pic").innerHTML = content;
						}
					}
				}
				break;
			default:
				break;
		}
	});
}

//2.13 获取五个最新文章
function getNewestArticle() {
	http.get(BaseUrl + "/frontEnd/getNewestArticle", function(err, result) {

		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case -1:
				{
					//alert(result.message);
				}
				break;
			case 0:
				{
					newestContentArr = result.result;
					if (newestContentArr.length > 0) {
						var content = '<h3>最新发布</h3>';
						content += '<ul>';
						for (var i = 0; i < newestContentArr.length; i++) {
							var subObj = newestContentArr[i];
							content += '<li><a href="##' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ','+subObj.textTypeId+',1)">•&nbsp;&nbsp;' + subObj.title + '</a></li>';
						}
						document.getElementById("NewestList").innerHTML = content;
					}
				}
				break;
			default:
				break;
		}
	});
}

//获取联盟机构
function getOrganizationList(callBack) {
	http.get(BaseUrl + "/frontEnd/getOrganizationList", function(err, result) {

		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					//alert(result.message);
					callBack && callBack(null);
				}
				break;
		}
	});
}

//智库专家
function getNotShieldExpert(callBack) {
	http.get(BaseUrl + "/frontEnd/getNotShieldExpert", function(err, result) {

		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					//alert(result.message);
					callBack && callBack(null);
				}
				break;
		}
	});
}



//其它配置
function getOtherConfiguration(type, callBack) {
	http.get(BaseUrl + "/frontEnd/getOtherConfiguration?type=" + type, function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					//alert(result.message);
					callBack && callBack(null);
				}
				break;
		}
	});
}


//1.1.17获取7大智库文章

function getArticleSeven(textTypeId, callBack) {
	http.get(BaseUrl + "/frontEnd/articleSort?textTypeId=" + textTypeId + "&parentId=0&index=0&size=5", function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					//alert(result.message);
					callBack && callBack(null);
				}
				break;
		}
	});
}

//加入收藏 设为首页
function AddFavorite(title, url) {
	try {
		window.external.addFavorite(url, title);
	} catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
		} catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
		}
	}
}

function SetHome(obj, url) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(url);
	} catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
		} else {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
		}
	}
}

//获取参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//1.8.4智库机构
function getZkNew(organizationType, callBack) {
	http.get(BaseUrl + "/frontEnd/getProvinceOrganization?type=0&organizationType=" + organizationType, function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					callBack && callBack(null);
				}
				break;
		}
	});
}

//智库动态
function articleSortPage(textTypeId, index, callBack) {
	http.get(BaseUrl + "/frontEnd/articleSortPage?textTypeId=" + textTypeId + "&parentId=0&index=" + index + "&size=6", function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result;
					if (resultObj.result && resultObj.result.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					callBack && callBack(null);
				}
				break;
		}
	});
}


//1.17.2 获取评论列表
function getCommentList(id, callBack) {
	http.get(BaseUrl + '/frontEnd/getCommentList?index=1&size=10&index=0&articleId=' + id, function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					callBack && callBack(null);
				}
				break;
		}
	});
}
//1.17.1 发表评论
function makeComments(data, callBack) {
	$.post(BaseUrl + '/frontEnd/makeComments', data, function(err, result) {
		if (result == null) {
			return;
		}
		var status = result.status;
		switch (status) {
			case 0:
				{
					var resultObj = result.result;
					if (resultObj && resultObj.length == 0) {
						resultObj = null;
					}
					callBack && callBack(resultObj);
				}
				break;
			default:
				{
					callBack && callBack(null);
				}
				break;
		}
	});
}











