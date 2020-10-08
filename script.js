let getS = selector => document.querySelector(selector);
setInterval(() => {
    let newDate = new Date()
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    let yy = newDate.getFullYear();
    let hh = newDate.getHours();
    let mimi = newDate.getMinutes();
    let ss = newDate.getSeconds();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (yy < 10) yy = "0" + yy;
    if (hh < 10) hh = "0" + hh;
    if (mimi < 10) mimi = "0" + mimi;
    if (ss < 10) ss = "0" + ss;

    getS('.date').textContent = `${dd}:${mm}:${yy}`
    getS('.time').textContent = `${hh}:${mimi}:${ss}`
})

let newDatee = 0;
let setIntervalId1;
let ourDate;
function startInterval() {
    ourDate = new Date().getTime();
    setIntervalId1 = setInterval(() => {
        newDate = newDatee + (new Date().getTime() - ourDate);
        let mil = Math.floor((newDate) % 999)
        let ss = Math.floor((newDate / 1000) % 60);
        let min = Math.floor((newDate / 60000) % 60);
        let hh = Math.floor((newDate / 3600000) % 24);
        if (ss < 10) ss = "0" + ss;
        if (min < 10) min = "0" + min;
        if (hh < 10) hh = "0" + hh;
        if (mil < 100) mil = "0" + mil;
        getS('.screen').textContent = `${hh}:${min}:${ss}:${mil}`;
    }
    )
    document.querySelector('.start').disabled = true;
    document.querySelector('.stop').disabled = false;
    document.querySelector('.reset').disabled = true;
}

function stopInterval() {
    clearInterval(setIntervalId1);
    newDatee = newDate;
    document.querySelector('.start').disabled = false;
    document.querySelector('.stop').disabled = true;
    document.querySelector('.reset').disabled = false;
}

function loopInterval() {
    getS('.display').textContent += getS('.screen').textContent + ' ';
}

function resetInterval() {
    getS('.display').textContent = "";
    getS('.screen').textContent = "00:00:00:000";
    newDatee = 0;
}

let d1 = 25;
function plus() {
    d1++;
    getS('.num').textContent++;
    if(d1>0) {
        getS('.minus').disabled = false
        
    }
}

function minus() {
    d1--;
    getS('.num').textContent--;
    if (d1 == 0) {
        getS('.minus').disabled = true
    } 
}

  

let newDates;
let ourDates;
let setIntervalId2;
let one = d1;
function startTimer() {
    ourDates = new Date().getTime();
    setIntervalId2 = setInterval(() => {
        newDates = ((d1 * 60000)) - (new Date().getTime() - ourDates);
        let ss = Math.floor((newDates / 1000) % 60);
        let min = Math.floor((newDates / 60000) % 60);
        if (ss < 10) ss = "0" + ss;
        if (min < 10) min = "0" + min;
        if (ss == 00 && min == 00) {
            clearInterval(setIntervalId2);
        }
        getS('.timerDisplay').textContent = `${min}:${ss}`;
    })
    document.querySelector('.startT').disabled = true;
    document.querySelector('.stopT').disabled = false;
    document.querySelector('.resetT').disabled = true;
    document.querySelector('.plus').disabled = true;
    document.querySelector('.minus').disabled = true;
}

function stopTimer() {
    clearInterval(setIntervalId2);
    d1 = newDates / 60000;
    document.querySelector('.startT').disabled = false;
    document.querySelector('.stopT').disabled = true;
    document.querySelector('.resetT').disabled = false;
}

function resetTimer() {
    getS('.timerDisplay').textContent = "00:00";
    getS('.num').textContent = '25';
    d1 = 25;
    document.querySelector('.plus').disabled = false;
    document.querySelector('.minus').disabled = false;
}