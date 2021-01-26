let options = document.querySelectorAll('option')

options[0].selected = true

const area = document.querySelector('#paint-area')

let color = 'black'

for (let i = 0;i<options.length;i++){
    options[i].addEventListener('click', function (event) {
        color = event.target.value;
    })
}

function clearPaintArea() {
    let nodes = area.childNodes
    for(let i = 0;i<nodes.length;i++){
        nodes[i].style.backgroundColor = 'white'
    }
}

function createPaintArea() {
    area.innerHTML = ''
    let size = Number(document.querySelector('#size-menu').value);
    if(size!==undefined){
        for(let i=0;i<size*size;i++){
            let box = document.createElement('div')
            box.className = 'box'
            box.style.width = `${98/size}%`
            box.style.height = `${1500/size}px`
            area.appendChild(box)
        }
    }
    area.addEventListener('click', function (event) {
        event.stopPropagation()
        console.log(color)
        if(event.target.classList.contains('box')){
            event.target.style.backgroundColor = color
        }
    })
}