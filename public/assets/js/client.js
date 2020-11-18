// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)

.then(function(response) {
  return response.json(); // Server send JSON as response
})

.then(function(clouds) {
  // Variable where the img tags will be stored
  console.log(clouds);
  
  let output = '';

  clouds.forEach(function(cloud) {
    output += `<figure class="card">
                  <img src="/${cloud.imagePath}" alt="${cloud.title} width="250" height="250">
                  
                  <figcaption>
                   <h2>${cloud.title}</h2>
                    ${cloud.description}
                  </figcaption>

                </figure>`;
  })

 // Output to DOM
 document.querySelector('.gallery').innerHTML = output;
})

// Error message
.catch(function(error) {
  if (error) {
    console.log('Something went wrong!');
  }
});
