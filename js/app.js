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

// need event listenter to track clicks of Bus Mall Item images
var imgContainer = document.getElementById('busmall-item-pic');
imgContainer.addEventListener('click', randomBusMallImage);

// display random goat images
function randomBusMallImage() {
  var randomIdx = Math.floor(Math.random() * BusMallItem.allBusMallItems.length);
  imgContainer.src = BusMallItem.allBusMallItems[randomIdx].filepath;
}

randomBusMallImage();
