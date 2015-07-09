/*
   _____                   _____              
  / ____|                 |  __ \             
 | (___  _   _ _ __   ___ | |__) |_ _ ___ ___ 
  \___ \| | | | '_ \ / _ \|  ___/ _` / __/ __|
  ____) | |_| | | | | (_) | |  | (_| \__ \__ \
 |_____/ \__, |_| |_|\___/|_|   \__,_|___/___/
          __/ |                               
         |___/                                
                                              
Description: 	Javascript function to obtain the default Synology (terminal) Password for today!
Platform: 	 	Javascript function
How to use:  	getSynoPass() [This returns the string]

Created by: 	Wesley de Groot
Website:      http://www.wdgwv.com

Based on: 		https://gist.github.com/guiambros/4242127
*/

function sprintf(){var e=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,r=arguments,t=0,n=r[t++],a=function(e,r,t,n){t||(t=" ");var a=e.length>=r?"":new Array(1+r-e.length>>>0).join(t);return n?e+a:a+e},c=function(e,r,t,n,c,i){var s=n-e.length;return s>0&&(e=t||!c?a(e,n,i,t):e.slice(0,r.length)+a("",s,"0",!0)+e.slice(r.length)),e},i=function(e,r,t,n,i,s,u){var o=e>>>0;return t=t&&o&&{2:"0b",8:"0",16:"0x"}[r]||"",e=t+a(o.toString(r),s||0,"0",!1),c(e,t,n,i,u)},s=function(e,r,t,n,a,i){return null!=n&&(e=e.slice(0,n)),c(e,"",r,t,a,i)},u=function(e,n,u,o,f,h,d){var g,l,b,p,x;if("%%"===e)return"%";for(var v=!1,w="",m=!1,E=!1,F=" ",k=u.length,A=0;u&&k>A;A++)switch(u.charAt(A)){case" ":w=" ";break;case"+":w="+";break;case"-":v=!0;break;case"'":F=u.charAt(A+1);break;case"0":m=!0,F="0";break;case"#":E=!0}if(o=o?"*"===o?+r[t++]:"*"==o.charAt(0)?+r[o.slice(1,-1)]:+o:0,0>o&&(o=-o,v=!0),!isFinite(o))throw new Error("sprintf: (minimum-)width must be finite");switch(h=h?"*"===h?+r[t++]:"*"==h.charAt(0)?+r[h.slice(1,-1)]:+h:"fFeE".indexOf(d)>-1?6:"d"===d?0:void 0,x=n?r[n.slice(0,-1)]:r[t++],d){case"s":return s(String(x),v,o,h,m,F);case"c":return s(String.fromCharCode(+x),v,o,h,m);case"b":return i(x,2,E,v,o,h,m);case"o":return i(x,8,E,v,o,h,m);case"x":return i(x,16,E,v,o,h,m);case"X":return i(x,16,E,v,o,h,m).toUpperCase();case"u":return i(x,10,E,v,o,h,m);case"i":case"d":return g=+x||0,g=Math.round(g-g%1),l=0>g?"-":w,x=l+a(String(Math.abs(g)),h,"0",!1),c(x,l,v,o,m);case"e":case"E":case"f":case"F":case"g":case"G":return g=+x,l=0>g?"-":w,b=["toExponential","toFixed","toPrecision"]["efg".indexOf(d.toLowerCase())],p=["toString","toUpperCase"]["eEfFgG".indexOf(d)%2],x=l+Math.abs(g)[b](h),c(x,l,v,o,m)[p]();default:return e}};return n.replace(e,u)}

function getSynoPass()
{
	var da=new Date(),
		   n=da.getMonth()+1,
		   d=da.getDate();

	return sprintf("%x%02d-%02x%02d", 
                                 n, // #Month of year. (c: tm_mon)
                                 n, // #Month of year. (c: tm_mon)
                                 d, // # Day of month. (c: tm_mday)
                           gcd(n,d) // #MAGIC
                );
}

function gcd(a, b)
{
 	return (b ? gcd(b, a%b) : a);
}