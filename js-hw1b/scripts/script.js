var answer = 0;
var max = 0;
//var trial = [];
//var found = false;
var guess = 0;
var trial_num = 0;

function p1_submit(){
	$('#p1').hide();
	$('#p2').show();
	max = document.getElementById('max').value;
	document.getElementById('guess').setAttribute('max',max);
	answer = Math.floor(Math.random()*(max-2)+2);
	
	/*
	for(var i = 1; i <= max; i++)
		trial[i] = i;
	*/
	simulate();
}

function game(){
	//trial_num++;
	document.getElementById('trial_num').value = trial_num;
	guess = document.getElementById('guess').value;
	
	//console.log("Trial " + trial_num);
	//console.log('Answer: ' + answer);
	
	if(guess > answer){
		document.getElementById('hint').value = '<'+guess;
		document.getElementById('guess').setAttribute('max',guess);
		//document.getElementById('guesser').click();
		simulate();
	}
	else if(guess < answer){
		document.getElementById('hint').value = '>'+guess;
		document.getElementById('guess').setAttribute('min',guess);
		//document.getElementById('guesser').click();
		simulate();
	}
	else{
		alert("You win! It took " + trial_num + " tries.");
		location.reload();
		//found = true;
	}
	
	//document.getElementById('guesser').click();
	//console.log('click me');
};

function simulate(){
	trial_num++;
	console.log("Trial " + trial_num);
	console.log('Answer: ' + answer);	
	
	var guess_id = document.getElementById('guess');
	
	var temp_max = parseInt(guess_id.getAttribute('max'));
	var temp_min = parseInt(guess_id.getAttribute('min'));
	var temp_guess = Math.floor((1/2)*(temp_max+temp_min));//Math.floor(Math.random()*(temp_max-temp_min)) + parseInt(temp_min);
	
	//Avoid Zeno's paradox
	if(temp_min==temp_guess && temp_guess!=answer)
		temp_guess++;	
	
	console.log("max :" + temp_max);
	console.log("min: " + temp_min);
	console.log('guess: ' + temp_guess);
	console.log(" ");
	
	guess_id.setAttribute('value',temp_guess);
	//guess_id.setAttribute('value',Math.floor(0.5*(temp_max-temp_min)));
	
	setTimeout(game,1500);
	//game();
};