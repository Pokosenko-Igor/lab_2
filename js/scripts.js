function conf() {
	confirm ("Are you ready?");
}

function prom() {
	let question = prompt ("What is your age?");
	
	if (question >= 18)
	{
		alert("U are allowed to continue but I'm take no responsibility");
		alert("Good Luck!");
		
	}
}

function sqr() {
	let input = document.getElementById("input_id").value;
	alert (Math.sqrt(input));
}




