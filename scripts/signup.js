
var download = document.querySelector("#download"),
	downloadImg = document.querySelector("#download-img");

//切换到登录注册界面切换


//下载知乎App与关闭二维码
download.onclick = function() {
	if (downloadImg.style.zIndex == 2) {
		downloadImg.style.transform = "translate(0,50px)";
		downloadImg.style.opacity = 0;
		downloadImg.style.zIndex = -1;
		download.querySelector("p").innerHTML = "下载知乎App";
	}
	else{
		downloadImg.style.transform = "none";
		downloadImg.style.opacity = 1;
		downloadImg.style.zIndex = 2;	
		download.querySelector("p").innerHTML = "关闭二维码";
	}
}