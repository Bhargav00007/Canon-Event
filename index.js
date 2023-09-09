const audio = new Audio();
audio.src="canon.mp3";
let canon = Math.floor(Math.random() * 23);

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
    } else if (canon === 11) {
        canonEvent = "Your greatest nightmare will come true!";
    } else if (canon === 12) {
        canonEvent = "Wait....NEVERMIND!";
    } else if (canon === 13) {
        canonEvent = "Imposter beside you!";
    } else if (canon === 14) {
        canonEvent = "Betrayed by close friends!";
    } else if (canon === 15) {
        canonEvent = "Good Luck!";
    } else if (canon === 16) {
        canonEvent = "You would probably feel lonely";
    } else if (canon === 17) {
        canonEvent = "You will feel ignored and forgotten";
    } else if (canon === 18) {
        canonEvent = "I am Sorry!";
    } else if (canon === 19) {
        canonEvent = "You Wont able to complete the work...again!";
    } else if (canon === 20) {
        canonEvent = "Guaranteed Downfall";
    } else if (canon === 21) {
        canaonEvent = "Anything could happen";
    } else if (canon === 22) {
        canonEvent = "you will not recive what you want";

    }


    
    outputContainer.innerText += canonEvent;
}
