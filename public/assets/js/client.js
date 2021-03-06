// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)

// Server send JSON as response
.then(function(response) {
  return response.json(); 
})

.then(function(clouds) {
  // Variable where the img tags will be stored
  console.log(clouds);
  
  let output = '';

  clouds.forEach(function(cloud) {
    output += `<figure>
                  <img src="/${cloud.imagePath}" alt="${cloud.title}" width="${cloud.width}" height="${cloud.height}">
                  
                  <figcaption>
                   <h2>${cloud.title}</h2>
                    ${cloud.description}
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
})
