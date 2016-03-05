$(document).ready(function(){
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
  $('.datepicker').pickadate();
  $('select').material_select();
});

var yourApiKey = 'AbwDZpo3gTOyH18Lb4FHFz'
filepicker.setKey(yourApiKey);


function createImage() {
    var img = document.createElement("img");
    img.src = event.fpfile.url;
    var tag = document.getElementById("results");
    tag.appendChild(img);
}