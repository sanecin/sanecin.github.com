//[¤[mdx][https://mdx.googlecode.com/git/id.js][https://github.sanecin.ru/code/js/id.js]@[vers_1.0_¤]¤¤¤ ...

//======== Id ===========
// ... element ID query ... speed ... element[ID="f"] => Id.f ... !q ...

(function(){

 	'use strict';

	var Id=window.Id={};

	var i,j;
// ... for next ... window.onload only ...
	var _=function (){for(i=(j=document.querySelectorAll('[id]')).length;i--;Id[j[i].id]=j[i]){}}

// ... toGO ... common
	if (window.addEventListener) window.addEventListener("load",_, false); else window.onload=_;

// ... in case ... event.js REQUIRED ...
//	if (typeof(Event.On)==="function") ... ???
//		Event.On(window,"load",Fit._);

})();

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
