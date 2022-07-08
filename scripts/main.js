


document.querySelector('h1').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  }); 
  /* let myImg = document.querySelector('img');
  myImg.addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });  SAME */
  
  let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/breed.jpg') {
      myImage.setAttribute('src','images/2.jpg');
    } else {
      myImage.setAttribute('src','images/1.jpg');
    }
}
