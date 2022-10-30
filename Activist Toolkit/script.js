/* .js files add interaction to your website */

var clickCount = 0; 

var motivateButton = document.getElementById("generateButton");

motivateButton.addEventListener("click", sendMotivation);
var fact = document.getElementById("fact");

function sendMotivation() {
  clickCount += 1;
  if (clickCount == 1) {
    fact.innerHTML = "40% of all plastic is made for packaging which becomes throwaway packaging";
  }
  if (clickCount == 2) {
    fact.innerHTML = "some Local governments in the U.S., for example, spent almost $13 billion to manage waste in 2019";
  }
  if (clickCount == 3) {
    fact.innerHTML = "Chemicals like PFAS that is used to break down packaging can last forever in environments";
  }
	if (clickCount == 4) {
    fact.innerHTML = "PFAS Chemicals can have very harsh effects on the immune system and even cause cancer";
    resetClickCount();
  }
}

function resetClickCount() {
  clickCount = 0; 
}
