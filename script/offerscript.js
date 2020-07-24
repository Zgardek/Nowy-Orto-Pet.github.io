//open
var test = document.querySelectorAll('.photo-box');
function openDescryption(position){
  var x = document.querySelector('.photo-phone-'+position);
  x.style.display = "grid";
}
function closeDescryption(position){
  var x = document.querySelector('.photo-phone-'+position);
  x.style.display = "none";
}




