var stars = document.getElementsByClassName('star');
var circles = document.getElementsByClassName('circle');
var confetti = document.getElementsByClassName('confetti');
var h = document.querySelectorAll('#letter-h');
var a = document.querySelectorAll('#letter-a');
var c = document.querySelectorAll('#letter-c');
var k = document.querySelectorAll('#letter-k');
const letters = [h,a,c,k];

for(var i=0; i<letters.length; i++){
  for(var j=0; j<letters[i]; j++)
    letters[i][j].hidden = true;
}
for(var i=0; i< stars.length; i++){
    stars[i].hidden = true;
}
for(var i=0; i< circles.length; i++){
  circles[i].hidden = true;
}
for(var i=0; i< confetti.length; i++){
  confetti[i].hidden = true;
}

const animateBackground1 = new TimelineMax();
const animateBackground2 = new TimelineMax();
const animateBackground3 = new TimelineMax();
const animateBackground4 = new TimelineMax({repeat: 100});

animateBackground1.to(stars, 5, {fill: "#FFFFFF", yoyoEase:Power2.easeOut, repeat:100});
animateBackground2.to(circles, 5, {scaleX: 2, scaleY: 2, yoyoEase: Bounce.easeInOut, repeat:100});
animateBackground3.to(confetti, 1, {y: 15, yoyoEase:Power2.easeInOut, repeat:100, repeatDelay:0.1});
animateBackground4
  .to(h, 0.5, {fill: "#8d3aa8", yoyoEase:Power2.easeInOut, repeat:4})
  .to(a, 0.5, {fill: "#8d3aa8", yoyoEase:Power2.easeInOut, repeat:4})
  .to(c, 0.5, {fill: "#8d3aa8", yoyoEase:Power2.easeInOut, repeat:4})
  .to(k, 0.5, {fill: "#8d3aa8", yoyoEase:Power2.easeInOut, repeat:4});