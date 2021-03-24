const piano = document.querySelector('.piano')
const pianoКeys = document.querySelectorAll('.piano-key')
let mousedownStatus = false;

// MOUSE EVENTS ---------------------------------------------------
piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        const noteAudio = document.getElementById(event.target.dataset.note);
        noteAudio.currentTime = 0;
        noteAudio.play();
        event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
        mousedownStatus = true;
    }
});

piano.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('piano-key') && mousedownStatus === true) {
        const noteAudio = document.getElementById(event.target.dataset.note);
        noteAudio.currentTime = 0;
        noteAudio.play();
        event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    }
})

piano.addEventListener('mouseout', () => {
    pianoКeys.forEach((key) => {
        key.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    })
})

window.addEventListener('mouseup', () => {
    pianoКeys.forEach((el) => {
        el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    })
    if (mousedownStatus === true) {
        mousedownStatus = false;
    }
})

// KEYBOARD EVENTS---------------------------------------------------
function keyboardSound(event) {
    if (event.code.length < 5) {
        const audio = document.querySelector(`audio[data-key="${event.code[3]}"]`);
        const pianoKey = document.querySelector(`.piano-key[data-letter="${event.code[3]}"]`)
        playAudio(audio, pianoKey);
    }
}

function playAudio(audio, pianoKey) {
    audio.currentTime = 0;
    audio.play();
    pianoKey.classList.add('piano-key-active');
}

window.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    keyboardSound(event);
})
window.addEventListener('keyup', () => {
    pianoКeys.forEach((el) => {
        el.classList.remove('piano-key-active');
    })
})

// SWITCH BUTTONS ---------------------------------------------------
const btnContainer = document.querySelector('.btn-container')
const btns = document.querySelectorAll('.btn')

btnContainer.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('btn-active')) {

    } else if (!event.target.classList.contains('btn-active')) {
        btns.forEach((btn) => {
            btn.classList.toggle('btn-active');
        })
        pianoКeys.forEach((key) => {
            key.classList.toggle('piano-key-letter');
        })
    }
})

// FULLSCREEN MODE ---------------------------------------------------
const btnFullscreen = document.querySelector('.fullscreen')

btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
})