const scriptArea = document.querySelector('.wrapper')

const randomColors = ['red', 'blue', 'yellow', 'black', 'purple', 'pink']

scriptArea.addEventListener('click', function (event) {
    if(event.target.classList.contains('box')){
        event.target.style.backgroundColor = randomColors[Math.floor(Math.random()*randomColors.length)];
    }
})