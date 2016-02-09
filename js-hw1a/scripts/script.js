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
}

function game(){
	trial_num++;
	document.getElementById('trial_num').value = trial_num;
	guess = document.getElementById('guess').value;
	
	console.log(guess);
	console.log(answer);
	
	if(guess > answer){
		document.getElementById('hint').value = '<'+guess;
		document.getElementById('guess').setAttribute('max',guess);
	}
	else if(guess < answer){
		document.getElementById('hint').value = '>'+guess;
		document.getElementById('guess').setAttribute('min',guess);
	}
	else{
		alert("You win! It took " + trial_num + " tries.");
		location.reload();
		//found = true;
	}
}