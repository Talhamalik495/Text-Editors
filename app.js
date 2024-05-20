let imga = document.getElementById("img1")
let imgb = document.getElementById("img2")
let imgc = document.getElementById("img3")
let imgd = document.getElementById("img4")
let imge = document.getElementById("img5")
let para = document.getElementById("first1")
imga.addEventListener('click', (event) => {
    if (para.style.fontWeight !== '800') {
        para.style.fontWeight = '800'
    }
    else {
        para.style.fontWeight = ''
    }
})
imgb.addEventListener('click', (event) => {
    if (para.style.fontStyle !== 'italic') {
        para.style.fontStyle = 'italic'
    }
    else {
        para.style.fontStyle = ''
    }
})
imgc.addEventListener('click', (event) => {
    if (para.style.textAlign !== 'left') {
        para.style.textAlign = 'left'
    }
    else {
        para.style.textAlign = 'center'
    }
})
imgd.addEventListener('click', (event) => {

    if (para.style.textAlign !== 'right') {
        para.style.textAlign = 'right'
    }
    else {
        para.style.textAlign = ''
    }
})
imge.addEventListener('click', (event) => {

    if (para.style.textDecoration !== 'underline') {
        para.style.textDecoration = 'underline'
    }
    else {
        para.style.textDecoration = ''
    }
})




