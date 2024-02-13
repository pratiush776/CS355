var breeds 

fetch('https://dog.ceo/api/breeds/list/all')
.then(response=>response.json())
.then(data=>{
    breeds=Object.keys(data.message)
    datalist=$('#breedsList')
    breeds.forEach(element => {
        option=document.createElement('option')
        option.setAttribute('value',element)
        datalist.appendChild(option)
    });
})
.catch((error) => {
  console.log(error)
});

let showImagesBtn = $('#showImagesBtn')

showImagesBtn.addEventListener('click', randImage)

function randImage(){
    let breed=$('#search').value;
    link='https://dog.ceo/api/breed/'+breed+'/images/random';
    let interval = setInterval( async () => {
    let response = await fetch(link);
    let data = await response.json();
    image=$('#dogImage')
    image.style.display='block';
    if( breeds.includes(breed) ){
      image.src=data.message;
    }else{
      image.src="";
      image.alt="No breed found!!";
      console.log('breed not found');
      clearInterval(interval);
      return;
    }},5000)
}
