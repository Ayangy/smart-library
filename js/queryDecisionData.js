document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");


//调查问卷列表
function queryDecosopmData(callBack) {
	http.get(BaseUrl + '/frontEnd/articleSort?textTypeId=0&parentId=57&index=0&size=5', function(err, result) {
		console.log('错误', err);
		console.log('成功', result);
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



