'use strict';

// array to hold all of our Goats to track
Goat.allGoats = [];

// create objects for our Goats
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

new Goat('Cruiser', 'img/cruisin-goat.jpg');
new Goat('Kissing', 'img/kissing-goat.jpg');
new Goat('Sassy', 'img/sassy-goat.jpg');
new Goat('Smiling', 'img/smiling-goat.jpg');
new Goat('Sweater', 'img/sweater-goat.jpg');

// need event listenter to track clicks of Goat images
var imgContainer = document.getElementById('goat-pic');
imgContainer.addEventListener('click', randomGoat);

// display random goat images
function randomGoat() {  
  var randomIdx = Math.floor(Math.random() * Goat.allGoats.length);

  imgContainer.src = Goat.allGoats[randomIdx].filepath;
}

randomGoat();
