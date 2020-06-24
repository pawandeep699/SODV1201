


let maxVal = document.getElementById('printValue');
 

let timeNow = setInterval(function(){
    let today = new Date();
    
    let timeH = (12 - (today.getHours())); 
    let timeM = today.getMinutes();
    
    let timeS = today.getSeconds();
    
    let am_pmX = (today.getHours()) < 12 ? 'am' : 'pm';



    // Converting the Time to standard Value

    if (timeH < 0) {
        timeH = timeH * -1;
    } else if (timeH == 00) {
        timeH = 12;
    } else {
        timeH = timeH;
    }

    maxVal.textContent = notOp(timeH) + ":" + notOp(timeM) + ":" + notOp(timeS) + "" + am_pmX;
    
},1000);





function notOp(val) {                
                                   
        return (val < 10) ? "0" + val : val;   
}

function hoursVal(){

    let hourTime = document.getElementById('clockHour');
    let timeHs = 12



    for (i=0; i <= timeHs; i++) {
        hourTime.options[hourTime.options.length] = new Option( i < 10 ? "0" + i : i, i);  // using loops for hours.
        }



}
hoursVal();

function minuteVal(){

    let minuteTime = document.getElementById('clockMinute');
    let timeMs = 59;

    for (i=0; i <= timeMs; i++) {
        minuteTime.options[minuteTime.options.length] = new Option(i < 10 ? "0" + i : i, i);        // Using loops for minutes.
    }
}
minuteVal();

function secondVal(){

    let secondTime = document.getElementById('clockSecond');
    let timeSs = 59;

    for (i=0; i <= timeSs; i++) {
        secondTime.options[secondTime.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secondVal();


// This function(below) is used to set the Alarm.

function setAlarm() {

    let hourSet = document.getElementById('clockHour');
    
    let minuteSet = document.getElementById('clockMinute');
    
    let secondSet = document.getElementById('clockSecond');
    
    let am_pmSet = document.getElementById('dayNight');
    

    let hourMax = hourSet.options[hourSet.selectedIndex].value;

    let minuteMax = minuteSet.options[minuteSet.selectedIndex].value;

    let secondMax = secondSet.options[secondSet.selectedIndex].value;

    let am_pmMax = am_pmSet.options[am_pmSet.selectedIndex].value;

    let timeSetMax = notOp(hourMax) + ":" + notOp(minuteMax) + ":" + notOp(secondMax) + am_pmMax;
     console.log('Your alarm Time:' + timeSetMax);

    document.getElementById('clockHour').disabled = true;

    document.getElementById('clockMinute').disabled = true;

    document.getElementById('clockSecond').disabled = true;

    document.getElementById('dayNight').disabled = true;


    let maxVal = document.getElementById('printValue');   


let lalaAlarm = new Audio("https://www.ghosthack.de/samples/pro/freebundle/Lalala.mp3");  // audio Link for Alarm


 setInterval(function(){

    let today = new Date();
    
    let timeH = (12 - (today.getHours()));
   
    
    let timeM = today.getMinutes();
    
    let timeS = today.getSeconds();
    
    let am_pmX = (today.getHours()) < 12 ? 'am' : 'pm';

    

    if (timeH < 0) {   // Sets time to Standard Value.
        timeH = timeH * -1;
    } else if (timeH == 00) {
        timeH = 12;
    } else {
        timeH = timeH;
    }
    
    let timeNow = maxVal.textContent = notOp(timeH) + ":" + notOp(timeM) + ":" + notOp(timeS) + "" + am_pmX;
    

    if (timeSetMax == timeNow) {   //when the  "timeSetMax" gets  equal to "timeNow", the sound will be played.
        lalaAlarm.play();
        }

},1000);


}

// This Function is used in clearing the alarm and also pauses the sound of the alarm.

function clearAlarm() {

    document.getElementById('clockHour').disabled = false;

    document.getElementById('clockMinute').disabled = false;

    document.getElementById('clockSecond').disabled = false;

    document.getElementById('dayNight').disabled = false;

    lalaAlarm.pause();  
}
class watchCan {
    constructor(showRun, outCome) { 
        this.watchRun = false;
        this.showRun = showRun;
        this.outCome = outCome;
        this.laps = [];
        this.watchReset();
        this.displayRex(this.stopFast);  
    }
    
    watchReset() {                                       // Rest Function to restart the StopWatch
        this.stopFast = [ 0, 0, 0 ];
    }
    
    startPeriod() {                                //Function to start the stop watch
        if (!this.watchXam) this.watchXam = performance.now();
        if (!this.watchRun) {
            this.watchRun = true;
            requestAnimationFrame(this.thePoint.bind(this));
        }
    }
    
    frezzePeriod() {                    //Function to stop the stopWatch
        this.watchRun = false; 
        this.watchXam = null;
    }

    prevPeriod() {                      // Restart Function for StopWatch
        if (!this.watchXam) this.watchXam = performance.now();
        if (!this.watchRun) {
            this.watchRun = true;
            requestAnimationFrame(this.thePoint.bind(this));
        }
        this.watchReset();                // function to reset the stop Watch
    }
    
    
    thePoint(controlX) {
        if (!this.watchRun) return;
        this.theValue(controlX);
        this.watchXam = controlX;
        this.displayRex();
        requestAnimationFrame(this.thePoint.bind(this));
    }
    
           theValue(digitalNum) {
        let subVal = digitalNum - this.watchXam;
        

        this.stopFast[2] += subVal / 10;  
        if (this.stopFast[2] >= 100) { 
            this.stopFast[1] += 1;
            this.stopFast[2] -= 100;
        }
        if (this.stopFast[1] >= 60) {
            this.stopFast[0] += 1;
            this.stopFast[1] -= 60;
        }
    }
    

    displayRex() {
        this.showRun.innerText = this.theMap(this.stopFast);
    }
    
    theMap(stopFast) {
        return `\
${pad0(stopFast[0], 2)}:\

${pad0(stopFast[1], 2)}:\

${pad0(Math.floor(stopFast[2]), 2)}`;
    }
}

 //////////////////////////////////////////////////////// The CountDown Watch//////////////////////////////////////////////////////////////////////////////////////////////



 function pad0(val, num) {
    let desc = val.toString();
    for (; desc.length < num; --num)
        desc = '0' + desc;
    return desc;
}

let stopwatch = new watchCan(   
    document.querySelector('.partTwo'),
    document.querySelector('.outCome'));

var setDate = new Date("august 3, 2020 1:14:9").getTime();


let ballon = setInterval(function() {

  let countP = new Date().getTime();

  let meaVal = setDate - countP;

  let days   =  Math.floor(meaVal / (1000 * 60 * 60 * 24));

  let timeH  = Math.floor((meaVal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let timeM  = Math.floor((meaVal % (1000 * 60 * 60)) / (1000 * 60));

  let timeS  = Math.floor((meaVal % (1000 * 60)) / 1000);
    
  document.getElementById("dateWatch").innerHTML = days + "d " + timeH + "h "
  + timeM + "m " + timeS + "s ";
  
  if (meaVal < 0) {
    clearInterval(ballon);
    document.getElementById("dateWatch").innerHTML = "Over!!!!";
  }
}, 1000);
