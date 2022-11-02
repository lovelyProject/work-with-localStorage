"use strict";

let time = localStorage.getItem('time');

if(!time){
    let firstHours = (new Date()).getHours();
    let firstMinutes = (new Date()).getMinutes();

    firstTime = firstHours + ':' + firstMinutes;

    localStorage.setItem('time', firstTime);

} else {
    let nowMinutes = (new Date()).getMinutes();
    
    let diffHours = 0;
    let diffMinutes = Math.abs(nowMinutes - firstTimeArr[1]);

    if (diffMinutes > 60){
         diffHours = Math.ceil(diffMinutes / 60);
         diffMinutes = diffMinutes % 60;  
    }

    console.log(`С момента вашего первого посещения прошло ${diffHours}:${diffMinutes}`);
}
