// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/admin`)

// Server send JSON as response
.then(function(response) {
  return response.json(); 
})

.then(function(subscribers) {
  // Variable where the img tags will be stored
  console.log(subscribers);
  
  let output = '';

  subscribers.forEach(function(subscriber) {
    output += `<p><strong>Name:</strong> ${subscriber.name} <strong>Email:</strong> ${subscriber.email} <strong>Message:</strong> ${subscriber.message}</p>`;
  })

 // Output to DOM
 document.querySelector('.subscribers').innerHTML = output;
})

// Error message
.catch(function(error) {
  if (error) {
    console.log('Something went wrong!');
  }
});
