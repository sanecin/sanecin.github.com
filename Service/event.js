//[¤[mdx][https://mdx.googlecode.com/git/Event.js]@[vers_1.0_¤]¤¤¤ ...

//======== EVENT ===========
// ... event functions ... кОстЫли ...

//<body onresize="...()">
//if (window.addEventListener) window.addEventListener("load",init, false); else window.onload=...();
//if (document.addEventListener) document.addEventListener('DOMContentLoaded', function () {window._= new mvc.controller(); });

var Event={

	// ... закеончить обработку события ...
	Cancel:function(e){
		e = e ? e : window.event;
		if(e.stopPropagation) e.stopPropagation();
		if(e.preventDefault) e.preventDefault();
		e.cancelBubble = true;
		e.cancel = true;
		e.returnValue = false;
		return false;
	},

	// ... прикрепить к element событие eventName ... вызвать обработчик callback ...
	On:function(element, eventName, callback){
	//	if(typeof(element) == "string") element = document.getElementById(element);	// ... string="id" || DomElement ... eventOn(window,"load",function { ...
		if(element == null) return;
		if(element.addEventListener){
			if(eventName == 'mousewheel') element.addEventListener('DOMMouseScroll', callback, false);  
			element.addEventListener(eventName, callback, false);
		} else if(element.attachEvent) element.attachEvent("on" + eventName, callback);
	},

	// ... открепить от element событие eventName ... вызвать обработчик callback ...
	Off:function(element, eventName, callback){
	//		if(typeof(element) == "string") element = document.getElementById(element);
		if(element == null) return;
		if(element.removeEventListener){
			if(eventName == 'mousewheel') element.removeEventListener('DOMMouseScroll', callback, false);  
			element.removeEventListener(eventName, callback, false);
		} else if(element.detachEvent) element.detachEvent("on" + eventName, callback);
	}

}

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
