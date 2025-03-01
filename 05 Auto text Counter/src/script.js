const textArea = document.querySelector('#text-area')
const totalCharacter = document.querySelector('#total-character')
const remainingCharacter = document.querySelector('#remaining-character')

counter()

textArea.addEventListener("keyup", ()=>{
    counter();
})

function counter(){
    totalCharacter.innerText = textArea.value.length
    remainingCharacter.innerText = textArea.getAttribute('maxlength') - textArea.value.length 
}