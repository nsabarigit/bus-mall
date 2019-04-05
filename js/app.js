'use strict';

// array to hold all of our Bus Mall Item to track
BusMallItem.allBusMallItems = [];

// create objects for our Goats
function BusMallItem(name, filepath) {
  this.name = name;
  this.filepath = filepath;

  BusMallItem.allBusMallItems.push(this);
}

new BusMallItem('Bag', 'img/bag.jpg');
new BusMallItem('Banana', 'img/banana.jpg');
new BusMallItem('Boots', 'img/boots.jpg');
new BusMallItem('Bathroom', 'img/bathroom.jpg');
new BusMallItem('Breakfast', 'img/breakfast.jpg');
new BusMallItem('Bubblegum', 'img/bubblegum.jpg');
new BusMallItem('Chair', 'img/chair.jpg');
new BusMallItem('Cthulhu', 'img/cthulhu.jpg');
new BusMallItem('dog-duck', 'img/dog-duck.jpg');
new BusMallItem('Dragon', 'img/dragon.jpg');
new BusMallItem('Pen', 'img/pen.jpg');
new BusMallItem('Pet-Sweep', 'img/pet-sweep.jpg');
new BusMallItem('Scissors', 'img/scissors.jpg');
new BusMallItem('Shark', 'img/shark.jpg');
new BusMallItem('Sweep', 'img/sweep.png');
new BusMallItem('Tauntaun', 'img/tauntaun.jpg');
new BusMallItem('Unicorn', 'img/unicorn.jpg');
new BusMallItem('USB', 'img/usb.gif');
new BusMallItem('Water-can', 'img/water-can.jpg');
new BusMallItem('Wine-Glass', 'img/wine-glass.jpg');

// need event listenter to track clicks of Bus Mall Item images

var imgContainer1 = document.getElementById('busmall-item-pic1');
imgContainer1.addEventListener('click', randomBusMallImage);

var imgContainer2 = document.getElementById('busmall-item-pic2');
imgContainer2.addEventListener('click', randomBusMallImage2);

var imgContainer3 = document.getElementById('busmall-item-pic3');
imgContainer3.addEventListener('click', randomBusMallImage3);


// var imgContainer;

// function populate(busMallItemImage) {
//   imgContainer = document.getElementById(busMallItemImage);
//   imgContainer.addEventListener('click', randomBusMallImage);
// }


// display random bus mall product images
function randomBusMallImage() {
  var randomIdx = Math.floor(Math.random() * BusMallItem.allBusMallItems.length);
  imgContainer1.src = BusMallItem.allBusMallItems[randomIdx].filepath;
}

function randomBusMallImage2() {
  var randomIdx2 = Math.floor(Math.random() * BusMallItem.allBusMallItems.length);
  imgContainer2.src = BusMallItem.allBusMallItems[randomIdx2].filepath;
}

function randomBusMallImage3() {
  var randomIdx3 = Math.floor(Math.random() * BusMallItem.allBusMallItems.length);
  imgContainer3.src = BusMallItem.allBusMallItems[randomIdx3].filepath;

}

randomBusMallImage();
randomBusMallImage2();
randomBusMallImage3();
