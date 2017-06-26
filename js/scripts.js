
window.addEventListener("scroll", changePos, false);
function changePos() {
    var header = document.getElementsByTagName("header")[0];
    if (window.pageYOffset > 570) {
        header.className = "fixed";
    } else {
        header.classList.remove("fixed");
    }
}

var pagrindine = document.getElementById('pagrindine');
var issilavinimas = document.getElementById('issilavinimas');
var patirtis = document.getElementById('patirtis');
var sugebejimai = document.getElementById('sugebejimai');

var info = document.getElementsByClassName('info');
var infoMeniu = document.getElementsByClassName('info-meniu');

function meniu(e, el) {
  var rodyti = document.getElementById(el);
  var target = e.target;
  if (rodyti.style.display === "none") {
    for (var i = 0; i < info.length; i++) {
      info[i].style.display = "none";
    }
    for (var i = 0; i < infoMeniu.length; i++) {
      infoMeniu[i].style.backgroundColor = "#0E0E0E";
      infoMeniu[i].style.top = "0px";
    }
    rodyti.style.display = "block";
    target.style.backgroundColor = "#FE5F55";
    target.style.top = "5px";
  }
}
pagrindine.addEventListener("click", function(e) { meniu(e, 'pagrindine-tur'); }, false);
issilavinimas.addEventListener("click", function(e) { meniu(e, 'issilavinimas-tur'); }, false);
patirtis.addEventListener("click", function(e) { meniu(e, 'patirtis-tur'); }, false);
sugebejimai.addEventListener("click", function(e) { meniu(e, 'sugebejimai-tur'); }, false);


function myFunction() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "meniuToggle") {
        x.className += " meniuMobile";
    } else {
        x.className = "meniuToggle";
    }
}
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", myFunction, false);

 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 
 $('.close').click(function() {
     $('.port2, .gallery ul').removeClass('item_open');
     return false;
 });

//Nustato lango vieta
 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top - 50)
     }, 400);
 });

 $("#infoB").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($(".cv").offset().top - 100)
     }, 400);
 });

$("#portB").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($(".gallery").offset().top - 100)
     }, 400);
 });

$("#pagr").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("body").offset().top)
     }, 400);
 });

 $("#kontaktaiB").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#kontaktai").offset().top)
     }, 400);
 });