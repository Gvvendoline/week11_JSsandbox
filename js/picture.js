const myButton = document.querySelector('button');
const image = document.querySelector('img')
const pictures = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg']

myButton.addEventListener('click', changePicture);

function changePicture() {
    let randomIndex = Math.floor(Math.random()*pictures.length)
    
    image.src='img/'+ pictures[randomIndex];
}
