/**
 * Created by zhang_jian on 2017/11/27.
 */


//document.write("<script language=\"javascript\" src=\"js/jquery.min.js\"><\/script>");
//var BaseUrl = 'http://192.168.100.190:8080';
//var BaseUrl = 'http://47.104.8.66:8080';
/*var BaseUrl = 'http://localhost:8080';*/
var BaseUrl = 'http://192.168.100.52:8080'

//登录
var code;
var storage = window.localStorage;
newcode();
$('#newimg,#newloginImg').on('click', function() {
	newcode();
});
$('#loginbtn').on('click', function() {
	var username = $('#username').val();
	var pds = $('#password').val();
	var logincode = $('#codeinpts').val();
	console.log(code);
	if (!username) {
		$('#username').attr('placeholder', '请输入用户名');
	} else if (!pds) {
		$('#password').attr('placeholder', '请输入密码');
	} else if (!logincode) {
		$('#codeinpts').attr('placeholder', '请输入验证码');
	} else if (logincode != code) {
		$('#codeinpts').attr('placeholder', '验证码错误');
		$('#codeinpts').val('')
	} else {
		var data = JSON.stringify({
			username: username,
			password: pds
		})
		$.ajax({
			type: "post",
			url: BaseUrl + "/login",
			async: true,
			data: data,
			dataType: "JSON",
			contentType: 'application/json;charset=UTF-8',
			success: function(data) {
				if (data.status == -1) {
					$('.login-tips').html(data.message);
					$('.login-tips').css('display', 'block');
					$('#username').val('');
					$('#password').val('');
					$('#codeinpts').val('');
					newcode();
					setTimeout(function() {
						$('.login-tips').css('display', 'none');
					}, 2000)
				} else if (data.status == 0) {
					console.log('登录信息',data);
					$('.login-tips').html(data.message);
					$('.login-tips').css('display', 'block');
					$('.login-tips').css('background-color', 'green');
					setTimeout(function() {
						$('.login-tips,.login-bg').css('display', 'none');
					}, 1000);
					storage.loginflag = true;
					storage.username = data.result.name;
					storage.userid=data.result.id;
					window.location.reload();
				}
			},
			error: function() {
				console.log('异常');
			}
		});
	}
})

if (storage.loginflag) {
	$('.login_icon>a').html('欢迎您!' + storage.username);
	$('.register_icon>a').html('退出');
	$('.login_icon').unbind("click");
	$('.register_icon>a').attr('href','');
	$('.register_icon').on('click',function(){
		storage.clear();
	})
}
	
$('.login_icon').click(function() {
	$('.login-bg').css('display', 'block');
//	$('body').append(loginBox);
})
$('#cancelbtn,.close-icon').click(function() {
	$('.login-bg').css('display', 'none');
	$('#username').val('');
	$('#password').val('');
})

function getByClass(classnames) {
	var classElements = [],
		allElements = document.getElementsByTagName('*');
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].className == classnames) {
			classElements[classElements.length] = allElements[i];
		}
	}
	return classElements;
}

function getById(idname) {
	var classElements = [],
		allElements = document.getElementsByTagName('*');
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].id == idname) {
			classElements[classElements.length] = allElements[i];
		}
	}
	return classElements;
}

var http = {};

http.quest = function(option, callback) {
	var url = option.url;
	var method = option.method;
	var data = option.data;
	var timeout = option.timeout || 1000 * 30;

	var xhr = new XMLHttpRequest();
	//(timeout > 0) && (xhr.timeout = timeout);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 400) {
				var result = xhr.responseText;
				try {
					result = JSON.parse(xhr.responseText);
				} catch (e) {}
				callback && callback(null, result);
			} else {
				callback && callback('status: ' + xhr.status);
			}
		}
	}.bind(this);
	xhr.open(method, url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	if (typeof data === 'object') {
		try {
			data = JSON.stringify(data);
		} catch (e) {}
	}
	xhr.send(data);
	xhr.ontimeout = function() {
		callback && callback('timeout');
		//console.log('%c连%c接%c超%c时', 'color:red', 'color:orange', 'color:purple', 'color:green');
	};

};

http.get = function(url, callback) {
	var option = url.url ? url : {
		url: url
	};
	option.method = 'get';
	option.timeout = 1000 * 30;
	this.quest(option, callback);
};

http.post = function(option, callback) {
	option.method = 'post';
	option.timeout = 1000 * 30;
	this.quest(option, callback);
};



//友情链接   合作媒体

function Link(type, callBack) {
	//type=3改2
	if (type == 3) type = 2;
	http.get(BaseUrl + "/frontEnd/getBlogroll?type=" + type, function(err, result) {
		if (result.status == '0') {
			//callBack(result)
			var html = '';
			var data = result.result;
			for (var i = 0; i < data.length; i++) {
				html += '<li><a target="_blank" href="' + data[i].linkurl + '"><img src="' + data[i].imgUrl + '" alt=""></a></li>'
			}
			$('.linkContent ul').html(html)
		}
	})
}

$('.item').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
	var index = $(this).index() + 1;
	Link(index)
})

Link(1);
function newcode() {
	$.post(BaseUrl + "/frontEnd/getCaptcha", function(res) {
		code = res.result.captcha;
		$('#codeimg').attr('src', res.result.img);
		$('#loginImg').attr('src', res.result.img);
	})
}

//1.1.1获取首页banner图
function findByState(advertisingPlace, callBack) {
	http.get(BaseUrl + "/titleImg/findByState?advertisingPlace=" + advertisingPlace, function(err, result) {
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
findByState(0, function(result) {
	$('.banner_right img').attr('src', result[0].imgUrl);
});
