const image = ["0.jpg", "1.jpg", "2.jpg"];

const imgnumber = Math.floor(Math.random()*image.length);
 
document.body.style.backgroundImage  = `url("${imgnumber}.jpg")`;
