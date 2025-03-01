const testimonials =[
    {
        name: "Jessica Reynolds",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am extremely satisfied with the quality of phones offered by apple.Their sleek design and advanced features are unmatched in the market. Myexperience with apple has been exceptional, and I highly recommend their"
    },
    {
        name: "John Smith",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Apple offers top-notch laptops that are perfect for any tech-savvy male. Their sleek designs and high-performance features make them a must-have for anyone in need of a reliable device. I am extremely satisfied with my purchase and would highly recommend apple to all my male friends."
    },
    {
        name: "Ethan Banks",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I recently purchased a new phone from Apple and I am beyond impressed with the quality and performance. The sleek design and cutting-edge technology make it a perfect choice for any tech-savvy male like myself. I highly recommend Apple to anyone looking for top-notch devices."
    }
]

const userName = document.querySelector('#name')
const img = document.querySelector('#img')
const text1 = document.querySelector('#text')
let indx = 0;

updateTestimonial()

function updateTestimonial (){
    //Object Destructuring
    const {name, image, text} = testimonials[indx]
    img.src = image;
    userName.innerText = name;
    text1.innerText = text;
    indx++
    if(indx === testimonials.length){
        indx = 0;
    }
    setTimeout(updateTestimonial,3000)
}