const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading')

let load = 0 

let int = setInterval(blurring, 30)

function blurring(){
    load++
    loadText.innerText = ` ${load}% `
    if (load == 100) {
        clearinterval(int)
    }

    bg.style.filter = `blur(${30 - 0.3*load}px)`
    loadText.style.opacity = `${1 - load/100}`
}