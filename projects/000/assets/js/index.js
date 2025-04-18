const imageContainer = document.querySelectorAll('.container > div');
// console.log(imageContainers);
 for (let i=0 ; i < imageContainer.length; i++) {
 

 imageContainer[i].addEventListener('click',function() {
    removeActive()
    imageContainer[i].classList.add('active');

 });
 }



 function removeActive (){
    for (let i=0;i<imageContainer.length;i++) {
        imageContainer[i].classList.remove('active');
     }
 }

 