const leo = document.querySelector('.leo');
const pipe = document.querySelector('.pipe');

const jump = () => {
    leo.classList.add('jump');

    setTimeout(() => {
        leo.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const leoPosition = +window.getComputedStyle(leo).bottom.replace('px', '');

    console.log(leoPosition);
    
    if(pipePosition <= 120 && leoPosition < 80 && pipePosition > 0){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        leo.style.animation = 'none';
        leo.style.bottom = `${leoPosition}px`;

        leo.src = './images/game-over.png'
        leo.style.width = '75px'
        leo.style.marginLeft = '50px'

        clearInterval(loop);

    }
}, 10)


document.addEventListener('keydown', jump);