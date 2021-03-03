const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const fav = document.querySelector('.favorite');
const audio = document.querySelector('#song');
const play = document.querySelector('.play');
const progressBar = document.querySelector('.audio-progress');
const start = document.querySelector('.start');
const end = document.querySelector('.end');

const mp3 =
    'https://www.mboxdrive.com/Ariana%20Grande%20-%20No%20Tears%20Left%20To%20Cry.mp3';

audio.src = mp3;

const audio2 = 'https://voca.ro/asosRyFyiRh';

const togglePressed = (e) => {
    e.srcElement.closest('div').classList.toggle('pressed');
};

window.addEventListener('click', togglePressed, false);
window.addEventListener('mousedown', togglePressed, false);
window.addEventListener('mouseup', togglePressed, false);
window.addEventListener('touchdown', togglePressed, false);
window.addEventListener('touchup', togglePressed, false);

play.addEventListener('click', (e) => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    play.querySelector('.pause-btn').classList.toggle('hide');
    play.querySelector('.play-btn').classList.toggle('hide');
});

audio.addEventListener('timeupdate', (e) => {
    const percent = (audio.currentTime / audio.duration) * 100;
    let s = parseInt(audio.currentTime % 60);
    let m = parseInt((audio.currentTime / 60) % 60);
    if (s / 10 < 1) s = '0' + s;
    if (m / 10 < 1) m = '0' + m;
    let es = parseInt(audio.duration % 60);
    let em = parseInt((audio.duration / 60) % 60);
    if (es / 10 < 1) es = '0' + es;
    if (em / 10 < 1) em = '0' + em;
    progressBar.style.width = `${percent}%`;
    start.innerHTML = m + ':' + s;
    if (em) {
        end.innerHTML = em + ':' + es;
    }
});
