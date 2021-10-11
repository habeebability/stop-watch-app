const btnStart = document.querySelector('.start-btn');
const btnPause = document.querySelector('.pause-btn');
const btnReset = document.querySelector('.reset-btn');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');


let intervalId;

btnStart.addEventListener('click', function(){
    this.setAttribute('disabled', '');
    clearInterval(intervalId);

    let min_count = parseInt(minute.textContent);
    let hour_count = 0;
    let secs_count = parseInt(seconds.textContent);
   
    intervalId = setInterval(function(){
        secs_count+= 1;
        seconds.innerHTML = secs_count.toString().padStart(2, 0);

        if(secs_count === 60) {
            secs_count = 00;
            seconds.innerHTML = secs_count.toString().padStart(2, 0);
            min_count +=1;
            minute.innerHTML = min_count.toString().padStart(2, 0);
            
        }
        if(min_count === 60) {
            min_count = 0;
            minute.innerHTML = min_count.toString().padStart(2, 0);
            hour_count +=1;
            hour.innerHTML = hour_count.toString().padStart(2, 0);
        }

    }, 1000)

   

});

btnPause.addEventListener('click', function(){
    btnStart.removeAttribute('disabled');
    clearInterval(intervalId);

})

btnReset.addEventListener('click', function(){
    btnStart.removeAttribute('disabled');
    clearInterval(intervalId);
    // count = 0;
    seconds.innerHTML = '00';
    
})