//未实现鼠标悬停改变“登录”和“注册知乎样式”
function change_bgcolor(val,bg){
	if (!document.getElementByClassName) return false;
	//判断类选择器名字
	if (document.getElementByClassName(val).type == "button") {
	document.getElementByClassName(val).style.color = bg;
	}
	else{
		document.getElementByClassName(val).style.backgroundColor = bg;
	}	
}
