var add = document.getElementById('addElement'),
    train = document.getElementById('train'),
    time = document.getElementById('time'),
    excercise = document.getElementById('excercise');
  

add.addEventListener('click', function() {
        var excercise1 = document.createElement('tr');
        excercise1.innerHTML = 'Trening: ' + train + ' , czas trwania: ' + time + '(minut)';
        excercise.appendChild(excercise1);
    });

function startTimer(duration, display) {
    var timer = duration, minutes;
    setInterval(function () {
        minutes = parseInt(timer / 60, time);
        seconds = parseInt(timer % 60, time);

        minutes = minutes < time ? "0" + minutes : minutes;
        seconds = seconds < time ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, time);
    var display = $('#time');
}


var create = document.getElementById('create'),
    set = document.getElementById('sort');

create.addEventListener('click',function(){
	if (excercise1.length = 0) {
		set.style.display = 'block';
	}
	else {
		set.style.display = 'none';
		startTimer();
	}
});