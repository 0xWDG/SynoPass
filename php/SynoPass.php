<?php
/*
   _____                   _____              
  / ____|                 |  __ \             
 | (___  _   _ _ __   ___ | |__) |_ _ ___ ___ 
  \___ \| | | | '_ \ / _ \|  ___/ _` / __/ __|
  ____) | |_| | | | | (_) | |  | (_| \__ \__ \
 |_____/ \__, |_| |_|\___/|_|   \__,_|___/___/
          __/ |                               
         |___/                                
                                              
Description: 	PHP function to obtain the default Synology (terminal) Password for today!
Platform: 	 	PHP function
How to use:  	getSynoPass() [This returns the string]

Created by: 	Wesley de Groot
Website:      	http://www.wdgwv.com

Based on: 		https://gist.github.com/guiambros/4242127
*/

@date_default_timezone_set(@date_default_timezone_get());

function getSynoPass()
{
 return sprintf("%x%02d-%02x%02d",
 				date("n"), #Month of year. (c: tm_mon)
 				date("n"), #Month of year. (c: tm_mon) 
 				date("d"), # Day of month. (c: tm_mday)
 				gcd(date("n"), date("d")) #MAGIC!
 			 );
}

function gcd($a, $b)
{
	return ($b ? gcd($b, $a%$b) : $a);
}