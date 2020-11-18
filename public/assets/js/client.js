
// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)

.then(function(response) {
  return response.json(); // Server send JSON as response
})

.then(function(clouds) {
  // Variable where the img tags will be stored
  let output = '';

  clouds.forEach(function(clouds) {
    output += `<figure>
                  <img src=${clouds.imagePath} alt="${clouds.title}">
                  
                  <figcaption>
                    <h2>${clouds.description}</h2>
                  </figcaption>

                </figure>`;
  });

 // Output to DOM
 document.querySelector('.gallery').innerHTML = output;
})

// Error message
.catch(function(error) {
  if (error) {
    console.log('Something went wrong!');
  }
});
