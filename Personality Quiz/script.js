var olafScore = 0;
var svenScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var showResult = document.getElementById("showResult");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", olaf());
q1a2.addEventListener("click", sven());

q2a1.addEventListener("click", olaf());
q2a2.addEventListener("click", sven());

q3a1.addEventListener("click", olaf());
q3a2.addEventListener("click", sven());

restart.addEventListener("click", reset);

function olaf() {
  olafScore ++; 
  questionCount ++;
  console.log("questionCount = " + questionCount + "\t" + "olafScore = " + olafScore);
  if (questionCount == 3) {
    console.log("The quiz is done!")
		showResult.addEventListener("click", updateResult);
    // updateResult();
  }
}

function sven() {
  svenScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "\t" + "svenScore = " + svenScore);
  if (questionCount == 3) {
    console.log("The quiz is done!");
		showResult.addEventListener("click", updateResult);
    // updateResult();
  }
}

function updateResult() {
		if (olafScore >= 2) {
    result.innerHTML = "You're more like Olaf!";
    console.log("You're more like Olaf!");
  }
	else if (svenScore >= 2) {
    result.innerHTML = "You're more like Sven!";
    console.log("You're more like Sven!");
  }
}

function reset() {
	olafScore = 0;
	svenScore = 0;
	questionCount = 0;
  result.innerHTML = "";
	window.scrollTo({ top: 0, behavior: 'smooth' });

	document.getElementById("q1a1").disabled = false;
	document.getElementById("q1a2").disabled = false;

	document.getElementById("q2a1").disabled = false;
	document.getElementById("q2a2").disabled = false;

	document.getElementById("q3a1").disabled = false;
	document.getElementById("q3a2").disabled = false;
}

function disQ1() {
	document.getElementById("q1a1").disabled = true;
	document.getElementById("q1a2").disabled = true;
}

function disQ2() {
	document.getElementById("q2a1").disabled = true;
	document.getElementById("q2a2").disabled = true;
}

function disQ3() {
	document.getElementById("q3a1").disabled = true;
	document.getElementById("q3a2").disabled = true;
}