let count = 0; //Initialize coint to 0
const countDisplay = document.getElementById('countDisplay');

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue()// Check count value and display messages
}
function checkCountValue(){
    if(count === 10){
        alert("Your Instragram post gained 10 followers! Congratulations!");
    } else if(count === 20){
        alert("Your Instragram post gained 20 followers! Keep it up!");
    }
}
function displayCount(){
    countDisplay.innerHTML = count; //Display the count in the HTML
}
function resetCount(){
    countDisplay.innerHTML = 0; //Display the count in the HTML as reset
    alert('the Followers count has been reset')
}