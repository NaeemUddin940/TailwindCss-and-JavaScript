const inp = document.querySelector('#dark-mode')
const body = document.querySelector('body')
inp.addEventListener('click', ()=>{
    darkMode()
})

inp.checked = false;

function darkMode(){
    if(inp.checked){
        body.style.background = "#000"
    }else {
        body.style.background = "#fff"
    }
}