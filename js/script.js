let $ = document.querySelector.bind(document);

$('#dark-mode').addEventListener('click',toggleMode)

function toggleMode(){
    if($(':root').hasAttribute('dark_mode')){
        localStorage.setItem('mode','light');
        $(':root').removeAttribute('dark_mode');
    }else{
        localStorage.setItem('mode','dark_mode');
        $(':root').setAttribute('dark_mode',true);
    }
}

function checkMode(){
    if(localStorage.getItem('mode')==='dark_mode'){
        $(':root').setAttribute('dark_mode',true);
    }
}

