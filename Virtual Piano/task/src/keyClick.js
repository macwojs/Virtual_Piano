
document.addEventListener("keydown", function(event) {
    let sound;
    switch (event.code) {
        case 'KeyA':
            //console.log("The 'a' key is pressed");
            sound = new Audio("white_sounds/A.mp3");
            sound.play();
            break;
        case 'KeyS':
            sound = new Audio("white_sounds/S.mp3");
            sound.play();
            break;
        case 'KeyD':
            sound = new Audio("white_sounds/D.mp3");
            sound.play();
            break;
        case 'KeyF':
            sound = new Audio("white_sounds/F.mp3");
            sound.play();
            break;
        case 'KeyG':
            sound = new Audio("white_sounds/G.mp3");
            sound.play();
            break;
        case 'KeyH':
            sound = new Audio("white_sounds/H.mp3");
            sound.play();
            break;
        case 'KeyJ':
            sound = new Audio("white_sounds/J.mp3");
            sound.play();
            break;
        case 'KeyW':
            sound = new Audio("black_sounds/W.mp3");
            sound.play();
            break;
        case 'KeyE':
            sound = new Audio("black_sounds/E.mp3");
            sound.play();
            break;
        case 'KeyT':
            sound = new Audio("black_sounds/T.mp3");
            sound.play();
            break;
        case 'KeyY':
            sound = new Audio("black_sounds/Y.mp3");
            sound.play();
            break;
        case 'KeyU':
            sound = new Audio("black_sounds/U.mp3");
            sound.play();
            break;
        default:
            console.log("Another key");
    }
});
