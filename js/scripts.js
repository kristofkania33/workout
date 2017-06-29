var addWorkout = document.getElementById('addWorkout'),
    workout_name = document.getElementById('workout_name'),
    workout_time = document.getElementById('workout_time'),
    excercise = document.getElementById('excercise');

var excercise_set = [{name: "brzuszki", time: "5"}];
  

addWorkout.addEventListener('click', function() {
	    excercise.innerHTML = "";
	    excercise_set.map(function(item) {
        var excercise1 = document.createElement('td');
        excercise1.innerText = 'Trening: ' + item.name + ' , czas trwania: ' + item.time;
        excercise.appendChild(excercise1);
        })
        excercise_set.push('New excercise');
    });

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60,  workout_time);
        seconds = parseInt(timer % 60,  workout_time);

        minutes = minutes < time ? "0" + minutes : minutes;
        seconds = seconds < time ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (timer < workout_time) {
            timer = duration;
            excercise.innerText = excercise_set[0];
        }
        else {
        	alert('Koniec!');
        	excercise_set[0] = "";
        }
        
    }, workout_time);
    var display = $('#show_time');
}


var create_workout_set = document.getElementById('create_workout_set'),
    set = document.getElementById('sort');

create_workout_set.addEventListener('click',function() {
	if (excercise.length == 0) {
		set.style.display = 'block';
	}
	else {
		set.style.display = 'none';
		startTimer();
	}
});