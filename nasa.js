var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('nasaPhoto');
var photoTitle = document.getElementById('nasaTitle');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

fetch('https://api.nasa.gov/planetary/apod?api_key=iGjtV2K2JG6kubj5a3qPKges4Oz7xFboabmZ8YUf')
  .then(response => response.json())
  .then(data => {
      photoTitle.innerHTML = data['title']
      img.src = data['url']
      captionText.innerHTML = data['explanation'];
  });


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



