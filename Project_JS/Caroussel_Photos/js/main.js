"use-strict";
/**********************************************/

const PHOTOS = [{
  src: "1.jpg",
  legend: "Frères Pandas"
},
{
  src: "2.jpg",
  legend: "Yoga Top"
},
{
  src: "3.jpg",
  legend:"Sunrise"
},
{
  src: "4.jpg",
  legend: "NightSky"
},
{
  src: "5.jpg",
  legend: "Tea Time"
},
{
  src: "6.jpg",
  legend: "ça va péter le bide !"
},
];

const figcaption = document.querySelector("#sliderfigcaption");
const img = document.querySelector("#slide img");figcaption.textContent = PHOTOS[0].legend;
img.source = PHOTOS[0].
img.alt = PHOTOS[0].legend;