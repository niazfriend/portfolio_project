const image = document.getElementById("image");

const changer = () => {
  
  setTimeout(() =>{
	image.style.backgroundImage = 
    "url('https://static.pexels.com/photos/220444/pexels-photo-220444.jpeg')"
  }, 2000)
  
  setTimeout(()=>{
    image.style.backgroundImage = "url('https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg')";
	  }, 4000)
  
  setTimeout(()=>{
    image.style.backgroundImage = "url('https://static.pexels.com/photos/380283/pexels-photo-380283.jpeg')";
  }, 6000)
}

setInterval(changer, 8000);

