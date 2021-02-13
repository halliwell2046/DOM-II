// Your code goes here
const bus = document.querySelector('.intro');

bus.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
});

const cool = document.querySelector('.main-navigation');
// console.log(cool);

cool.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'purple';
});
  
const adventure = document.querySelector('.img-content');
//  console.log(adventure);

adventure.addEventListener('click', (event) => {
    event.target.src = 'https://images.unsplash.com/photo-1496154704336-6c88a94a019a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});

const tinyBus = document.querySelector('.intro img');
// console.log(tinyBus);

tinyBus.addEventListener('mouseenter', () => {
    tinyBus.style.transform = 'scale(1.2)';
    tinyBus.style.transition = 'transform 1s';
});

tinyBus.addEventListener('mouseleave', () => {
    tinyBus.style.transform = 'scale(1)';
    tinyBus.style.transition = 'transform 1s';
});

const body = document.querySelectorAll('img');
// console.log(body);

window.addEventListener('resize', () => {
    body.forEach((pic) => {
        pic.src = 'https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
    });
});

document.addEventListener('keydown', () => {
    alert('You Pressed a key');
});

document.addEventListener('wheel', () => {
    alert('You scrolled with the wheel');
});

document.addEventListener('contextmenu', () => {
    alert('WHAT!');
});


const destination = document.querySelector('.content-destination');
const destinationImg = document.querySelector('.content-destination img');

destination.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    destination.style.backgroundColor = 'DeepPink';
});

destinationImg.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    destinationImg.src = 'https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80';
});

const home = document.querySelector('a');

home.addEventListener('click', (e) => {
  e.preventDefault();
});

const drag = document.querySelector('.img-fluid');
// console.log(drag);

drag.addEventListener('drag', function(event) {

}, false);

drag.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

drag.addEventListener('dragend', function(event) {
    event.target.style.opacity = '';
}, false);

drag.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

drag.addEventListener('dragenter', function(event) {
    if (event.target.className === 'text-content') {
        event.target.style.backgroundColor = 'green';
    }
}, false);

// const dragTarget = document.querySelector('.text-content');
// console.log(dragTarget);


drag.addEventListener ('dragleave', function(event) {
    if (event.target.className === 'text-content') {
        event.target.style.backgroundColor = '';
    }
}, false);

drag.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.className === 'text-content') {
        event.target.style.backgroundColor = '';
        dragged.parentNode.removechild ( dragged );
        event.target.appendChild( dragged );
    }
}, false);