//[¤[mdx][https://mdx.googlecode.com/git/Tic.js]@[vers_1.0_¤]¤¤¤ ...

//======== Tic(k) ===========
// ... setTimeoutCalls for {k} ... default replacement setInterval ...
// Tic(k={
// k.fn= ... function to call ...
// k.tx= ... interval mS ...
// });

function Tic(k) {
 	'use strict';

//		clearTimeout(k.once);
		k.tn=Date.now();
		k.tr=Math.min(Math.max(7,k.tx+k.tl-k.tn),k.tx);

		k.once=setTimeout(Tic,k.tr,k);

		if (isF(k.fn)) k.fn(k);// ... ?q ... need? ... this ...
//		eval(k.fn+"(k)");

		k.tl=k.tn+k.tr;

//		if(k.ntic++<4) return;
//		k.ntic=0;

		k.tic++;// ... ?q ... need? ...

//		k.dvs.innerHTML=k.tr; // ... bad debug ...

		if (App.otl&&isF(k.mon)) k.mon(k);

}

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
