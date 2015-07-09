/*
   _____                   _____              
  / ____|                 |  __ \             
 | (___  _   _ _ __   ___ | |__) |_ _ ___ ___ 
  \___ \| | | | '_ \ / _ \|  ___/ _` / __/ __|
  ____) | |_| | | | | (_) | |  | (_| \__ \__ \
 |_____/ \__, |_| |_|\___/|_|   \__,_|___/___/
          __/ |                               
         |___/                                
                                              
Description: 	C program to obtain the default Synology (terminal) Password for today!

Created by: 	Wesley de Groot
Website:      	http://www.wdgwv.com

Based on: 		https://gist.github.com/guiambros/4242127

HOW TO BUILD:
	Build: gcc SynoPass.c -o SynoPass
	Run:   ./SynoPass
*/

#include <stdlib.h> 
#include <time.h> 
#include <stdio.h> 
#include <sys/time.h>  

int gcd(int a, int b)
{
    return (b?gcd(b,a%b):a);
}

int main()
{
    struct timeval tvTime;
    struct tm tmOutput;

    gettimeofday(&tvTime, 0);
    localtime_r(&(tvTime.tv_sec), &tmOutput);

    tmOutput.tm_mon += 1;
    printf("%x%02d-%02x%02d",
        		 tmOutput.tm_mon,  //#Month of year. (c: tm_mon)
        		 tmOutput.tm_mon,  //#Month of year. (c: tm_mon)
        		 tmOutput.tm_mday, //# Day of month. (c: tm_mday)
    			 gcd(tmOutput.tm_mon, tmOutput.tm_mday)
    	  );
}