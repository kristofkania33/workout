var addWorkout = document.getElementById('addWorkout'),
    workout_name = document.getElementById('workout_name'),
    workout_time = document.getElementById('workout_time'),
    excercise = document.getElementById('excercise');
// excercise_set = [{name: "brzuszki", time: "5"}];
var excercise_set = []; //Na starcie nasza lista ćwiczeń powinna być pusta
//dwie poniższe deklaracje ustawiam wyżej, żeby było czytelniej
var create_workout_set = document.getElementById('create_workout_set'),
    set = document.getElementById('sort');
  
//bez sensu mieszać generowanie zestawy w htmlu z funkcją dodającą element do naszej listy. Wyciągnijmy to na zewnatrz do funckji
function generateSet() {
	excercise.innerHTML = ""; 
	excercise_set.map(function(item) {
        	var excercise1 = document.createElement('td');
        	excercise1.innerText = 'Trening: ' + item.name + ' , czas trwania: ' + item.time;
       		excercise.appendChild(excercise1); //przy okazji warto by zmienić zmienną exercise na exercises (bo to w końcu liczba mnoga)
        });
}

addWorkout.addEventListener('click', function() {
        //excercise_set.push('New excercise'); New exersise? My chcemy miec liste obietków ( { name: "", time: "" }), a w taki sposób stworzysz sobie listę stringów ['New excercise', 'New exercise'...]
    	exercise_set.push({ "name": workout_name.value, "time": workout_time.value});
	generateSet(); //odpalamy naszą funckją do generowania listy w htmlu
	//warto byłoby też wyczyścić teraz te dwa pola :) Zostawiam to dla Ciebie :)
});

function startTimer(duration, display) {
	
      //spróbuj tę funkcję przemyśleć :)

      
}


create_workout_set.addEventListener('click',function() {
	if (excercise.length == 0) {
		set.style.display = 'block';
	}
	else {
		set.style.display = 'none';
		startTimer();
	}
});
