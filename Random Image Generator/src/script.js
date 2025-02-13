const imgContainer = document.querySelector('#img-container')

const btn = document.querySelector('#btn')



btn.addEventListener('click', () =>{
    loadidg = 12;
    addNewImg()
   
})

function addNewImg(){
    for (let index = 0; index < loadidg; index++) {
        const imgcreate = document.createElement('img')
        imgcreate.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imgContainer.appendChild(imgcreate)
    }
}