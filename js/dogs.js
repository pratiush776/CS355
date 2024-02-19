var breeds 
var interval = setInterval

let showImagesBtn = $('#showImagesBtn')
let image=$('#dogImage');
let clearImageBtn =$('#clearImage')

showImagesBtn.addEventListener('click', randImage)
clearImageBtn.addEventListener('click', clear)

function clear(){
      clearInterval(interval);
      image.style.display='None';
      image.src="";
      $('#search').value ="";
      return;
}

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

async function randImage(){
    let breed=$('#search').value;
    link='https://dog.ceo/api/breed/'+breed+'/images';
    let response = await fetch(link);
    let data = await response.json();
    if(data.status == 'success'){
    idx=Math.floor(Math.random()*data.message.length);
    image.style.display='block';
    image.src=data.message[idx];
    interval = setInterval( () => {
    // if (idx > data.message.length){idx=Math.floor(Math.random()*data.message.length);}
    image.src=data.message[idx];
    idx++;
    },5000)}
    else{
      image.src="";
      image.alt="Breed doesn't exist!!";
      console.log('Invalid Breed');
      clearInterval(interval);
      return;
    }
}
