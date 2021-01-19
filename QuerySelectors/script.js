let box_list = document.querySelectorAll(".box")


function chess() {
    for(let i=0;i<box_list.length;i++){
        i%2===0? box_list[i].classList.add('black'): box_list[i].classList.remove('black')
    }
}
function reverse() {
    for(let i=0;i<box_list.length;i++){
        i%2!==0? box_list[i].classList.add('black'): box_list[i].classList.remove('black')
    }
}
function dynamic() {
    for(let i=0;i<box_list.length;i++){
        box_list[i].classList.remove('black')
    }
    let ch = setInterval(chess, 1000);
    let re = setInterval(reverse, 1500);
    setInterval(function () {
        clearInterval(ch);
        clearInterval(re);
    }, 10000)
}