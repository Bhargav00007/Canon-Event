const audio = new Audio();
audio.src="canon.mp3";
let canon = Math.floor(Math.random() * 11);

function fn1() {
    var user = document.getElementById("name").value;
    var outputContainer = document.getElementById("outputContainer");
    var canonEvent = "";

    outputContainer.innerText = "Hello, " + user + "! Your Canon Event is... ";
    if (user === "bhargav") {
        canonEvent = "Oh Bhargav!... You're literally me!";
    }
    else if (canon === 1) {
        canonEvent = "You'll Get punishment today!";
    } else if (canon === 2) {
        canonEvent = "You have to stand in the class!";
    } else if (canon === 3) {
        canonEvent = "You'll Lose your phone today!";
    } else if (canon === 4) {
        canonEvent = "You'll lose something precious!";
    } else if (canon === 5) {
        canonEvent = "You'll get destroyed by your closed one!";
    } else if (canon === 6) {
        canonEvent = "You'll get betrayed today!";
    } else if (canon === 7) {
        canonEvent = "Your day would be boring as usual!";
    } else if (canon === 8) {
        canonEvent = "You won't get over her!";
    } else if (canon === 9) {
        canonEvent = "Your enemy will get a chance to destroy you!";
    } else if (canon === 10) {
        canonEvent = "You're dead...like fr!";
    }
    
    outputContainer.innerText += canonEvent;
}
