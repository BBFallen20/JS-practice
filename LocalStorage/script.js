let obj = {}

function save() {
    let inputs = document.querySelectorAll('input')
    for(let i = 0;i<inputs.length;i++){
        obj[inputs[i].name] = inputs[i].value
    }
    localStorage.setItem('User', JSON.stringify(obj))
}

document.addEventListener('DOMContentLoaded', function () {
    if(window.location.pathname.includes('index.html')){
        document.querySelector('.name').textContent += JSON.parse(localStorage.getItem('User')).name
        document.querySelector('.surname').textContent += JSON.parse(localStorage.getItem('User')).surname
        document.querySelector('.age').textContent += JSON.parse(localStorage.getItem('User')).age
        document.querySelector('.color').textContent += JSON.parse(localStorage.getItem('User')).color
    }
})

