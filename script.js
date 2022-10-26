const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const stopBtn = document.querySelector('.stop');

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

//stopwatch logic
let interval = null;//setting the reference for the setInterval callback function

let [sec, min, hrs]=[0,0,0]

//starting the countdown 
startBtn.addEventListener('click', ()=>{
    interval = setInterval(stopwatch, 1000);
});
//reset button
resetBtn.addEventListener('click', ()=>{ 
    clearInterval(interval);
    [sec, min, hrs]=[0,0,0] //resetting all of them to 0s again.
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    
});
//stop button
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
});


function stopwatch(){
    sec += 1;
    let s = sec<10?"0"+sec: sec;
    let m = min<10?"0"+min: min;
    let h = hrs<10?"0"+hrs: hrs;

    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min==0;
            hrs++;
        }
    } 

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

