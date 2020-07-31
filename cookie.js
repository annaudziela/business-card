// localStorage.setItem('human', 'ania');
// console.log(localStorage.getItem('human'));
// localStorage.setItem('city', 'cracow');

// localStorage.removeItem('human');
// sessionStorage.setItem('dog', 'Harry');
// localStorage.removeItem('person');
// localStorage.setItem('newKey', {name: 'ania'});
// localStorage.setItem('key', {country: 'Poland'});

// console.log(localStorage.getItem('key'));


// sessionStorage.setItem('key', JSON.stringify({country: 'Poland'}));
// console.log({country: 'Poland'});

// const myKey = sessionStorage.getItem('key');
// console.log(JSON.parse(myKey));

// const myNewKey = JSON.parse(myKey);
// console.log(myNewKey);

// myNewKey.newProperty = 'hello';
// console.log(myNewKey);
// myNewKey.newProperty = 'yoohoo';
// console.log(myNewKey);

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    result = entry; 
};

const entryInput = document.querySelector('.entry--js');
entryInput.value = result;

const button = document.querySelector('.button--js');
button.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value); 
});
console.log(result);

localStorage.setItem('jak ci poszło?', 'całkiem nieźle');
console.log(localStorage.getItem('jak ci poszło?'));

localStorage.setItem('data', {title: 'WTF'});


localStorage.setItem('data', JSON.stringify({title: 'WTF'}));
console.log(localStorage.getItem('data'));

const myData = localStorage.getItem('data');
console.log(JSON.parse(myData));

myNewData = JSON.parse(myData);
myNewData.newProperty = 'helooo';
console.log(myNewData);

mySuperNewData = JSON.parse(myData);
mySuperNewData.newProperty = 'nie wiem, czy to się uda';
console.log(mySuperNewData);








