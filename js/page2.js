const params = new URLSearchParams (location.search);
let f_name=params.get('f_name');
let l_name=params.get('l_name');
let age=params.get('age');
let gender=params.get('gender');
let email=params.get('email');

results='' 

results +='<p>Name : '+ f_name +" " +l_name
results += '<p>Age : '+ age
results += '<p>Gender : '+ gender
results += '<p>Email : '+ email

let circle = document.createElement('div');
circle.classList.add('profile');

let initials = f_name[0] + l_name[0];

circle.innerText = initials;

document.getElementById('results').appendChild(circle);

document.getElementById('results').innerHTML+=results;

