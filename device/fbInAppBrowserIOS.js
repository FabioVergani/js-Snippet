var checkStandalone=window.navigator.standalone,ua=window.navigator.userAgent.toLowerCase(),ac="";
if(/iphone|ipod|ipad/.test(ua)){
	if(!checkStandalone && !/safari|chrome/.test(ua) && !/os 7_/.test(ua)){ // facebook in app browser
		$(document).ready(function(){
			ac="fbInAppBrowserIOS";
			$('body').addClass('fbInAppBrowserIOS');
		});
	}
}
