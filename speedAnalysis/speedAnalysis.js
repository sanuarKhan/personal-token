let testText =
  "Embrace the struggle and let it make you stronger. It won’t last forever.";
let startTime, endTime;

function startTest() {
  // set the test text
  document.getElementById("inputText").value = testText;

  //Reset the results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  //Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  //Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeElapsed = (endTime - startTime) / 1000;
  var userTypedText = document.getElementById("userInput").value;

  //split the text using regex to count corrently
  var typeWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0;
  if (timeElapsed !== 0 && !isNaN(typeWords)) {
    wpm = Math.round((typeWords / timeElapsed) * 60);
  }

  //Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Typing text Results:</h2>" +
    "<p>Words Typed: " +
    typeWords +
    "</p>" +
    "<p> Time Elapsed: " +
    timeElapsed.toFixed(2) +
    "</p>" +
    "<p> Words per Minutes (WPM): " +
    wpm +
    "</p>";

  //reset the button
  var button = document.getElementById(btn);
  button.innerHTML = " Start Test";
  button.onclick = startTest;
}
