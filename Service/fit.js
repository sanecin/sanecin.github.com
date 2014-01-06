//[¤[mdx][https://mdx.googlecode.com/git/Fit.js]@[vers_1.0_¤][develop]¤¤¤ ...
// ... REQUIRED ... event.js tic.js ...
//======== Fit ===========
// ... fit adjust ...

/*

// ... A JavaScript equivalent of PHP’s create_function ... http://phpjs.org/functions/create_function/

function create_function (args, code) {
  // From: http://phpjs.org/functions
  // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
  // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: f = create_function('a, b', "return (a + b);");
  // *     example 1: f(1, 2);
  // *     returns 1: 3
  try {
    return Function.apply(null, args.split(',').concat(code));
  } catch (e) {
    return false;
  }
}

 ... another required ... transform "funcName" | "function(){...}" to "&function()" ... :/ ...
  
eval_=new Function('return eval(arguments[0]);');// ... dojo ...

*/

function eval_(i){
	var j;
	if(!i) return false;
	if(isF(i)) return i;
	try {if(isF(j=eval("(function(){return "+i+"}())")))	return j;} catch (e) {}
	return false;
}

// ... Fit(Object) ...
	Fit=function(k){

// ... for Tic ...
//		k.once=null;	// ... instance ...
		k.tl=Date.now();	// ... pointtime ...
		k.tx=Math.floor(1000/k.dataset.fps||k.dataset.tx||1000/24);	// ... default 40 mS rate ...
		k.tic=0;	// ... count ...
		k.ntic=0;	// ... Ncount ...

// ... for Fit ... instead DOM.dataset ... was difer?q ...
		k.fn=k.fn||eval_("Fit."+k.dataset.fit)||eval_(k.dataset.call)||Fit.all||null;	// ... data-call ... Fit ...
		k.scale=k.scale||k.scale||k.dataset.scale||1;// ... data-scale="..." ...
		k.zoom=k.zoom||k.dataset.zoom||1;// ... data-zoom="..." ...
		k.dvs=k.dvs||k.querySelector(".fil")||k.firstChild||null;// ... first? ... :/ ...
		k.dvr=k.dvr||k.parentNode||null;// ... first? ... :/ ...
		k.mon=k.mon||k.dataset.mon||null;// ... mon ...

// ... Fit(k) loop ... tic.js REQUIRED ...
		Tic(k);
	}

	Fit.all=function(k){

		if(!!k&&!!k.dvr&&!!k.dvs) {
		
			var s=Math.min(k.dvr.clientWidth/k.clientWidth,k.dvr.clientHeight/k.clientHeight);

			if (!!s&&(k.scale!=s)){

				k.scale=s;
				k.dvs.style.webkitTransform=k.dvs.style.MozTransform=k.dvs.style.OTransform="scale("+k.zoom*s+")";

//				f.top=(sc_*z-1)*j.clientHeight/2+"px";
//				f.left=(50-50/sc_)+"%";

			}
		}

	}

// ... global for REinitiateFitHandle ...
	Fit._=function (s){

		// ... Fit stack ...
		Fit.sp=document.querySelectorAll((typeof s==="string")?s:".fit");
		for(var i=Fit.sp.length;i--;Fit(Fit.sp[i])){}// ... ?i!f?q?c not DOM obj may be ...

		// ... debug ...  !w!c ...
		if(App.otl && Id.serv){
			Id.serv.style.visibility="visible";//log_("ОТЛАДКА");
			App.mont.innerHTML=1000/App.tx+" fps";
		}

	}

// ... toGO ... common
	if (window.addEventListener) window.addEventListener("load",Fit._, false); else window.onload=Fit._;

// ... in case ... event.js REQUIRED ...
//	if (typeof(Event.On)==="function") ... ???
//		Event.On(window,"load",Fit._);

//======== MON ===========

function mon() {
// ...
// ... main ...

/**/
//		App.monv.innerHTML=Fit.ntic;
		App.monV.innerHTML=Fit.tic;
//		App.monR.innerHTML=Fit.rate;
		App.monT.style.width=Fit.tx*1+"px";

		App.mont1.style.width=Fit.tx*1*0.7+"px";
		App.mont2.style.width=Fit.tx*1*0.3+"px";

		App.monr.style.width=Fit.tr*1+"px";
		App.monx.innerHTML=Fit.tr;
//		App.monT.innerHTML="Tx:"+App.tx;
//		App.monr.innerHTML=App.tr;

		App.monW.innerHTML=document.body.clientWidth;
		App.monH.innerHTML=document.body.clientHeight;

}


//	window.Fit=Fit;

//}());

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
