"use strict";

let time = localStorage.getItem('time');

if(!time){
    let firstHours = (new Date()).getHours();
    let firstMinutes = (new Date()).getMinutes();

    firstTime = firstHours + ':' + firstMinutes;

    localStorage.setItem('time', firstTime);

} else {
    let nowHours = (new Date()).getHours();
    let nowMinutes = (new Date()).getMinutes();
    
    let firstTimeArr = localStorage.getItem('time').split(':');

    let diffHours = 0;
    let diffMinutes = nowMinutes - firstTimeArr[1];

    if (diffMinutes > 60){
         diffHours = Math.ceil(diffMinutes / 60);
         diffMinutes = diffMinutes % 60;  
    }

    console.log(`С момента вашего первого посещения прошло ${diffHours}:${diffMinutes}`);
}