# Course Title: CPNT262-A - Web Client & Server Prog.

## Assignment: cpnt262 - [Final Project](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/final)

## Team Name: Life Cloud

## Team Members

  - [Jaime Hellman](https://github.com/j-hellman)
  - [Jina Hwang](https://github.com/geumjinhwang)
  - [Vincent Miranda](https://github.com/vinceldric)

## Responsibilities
  - **Jaime Hellman**
    - Owner of the repo
    - Created Heroku app
    - Worked on README.md
    - Deployed to Heroku and MongoDB Atlas
    - Completed the Frontend Fetch() for gallery
    - Completed the HTML Endpoint of individual images
    - Added some comments on files
    - Helped on some changes in EJS pages
  
  - **Jina Hwang**
    - Found the project name
    - Worked on README.md
    - Created the life cloud logo
    - Picked the template
    - Found the gallery images and came up with the services
    - Completed the CSS of every pages 
    - Completed the seeds/clouds.js
    - Completed the EJS pages in views folder
    - Added some comments on files
    - Added media queries 

  - **Vincent Miranda**
    - Completed the folders structure
    - Completed the server.js
    - Worked on README.md
    - Completed the project setup
    - Completed the schema/model implementation
    - Completed the Frontend Fetch() for gallery and subscribers
    - Completed import.js
    - Completed DB Seeds
    - Completed the HTML and JSON Endpoints
    - Added some comments on codes
    - Helped on some changes in CSS file, EJS pages

## Links to
  - GitHub [Repo](https://github.com/j-hellman/cpnt262-finalProject)
  - Heroku App [Link](https://cpnt262-final-project.herokuapp.com/)

## HTML Endpoints
  - /gallery
    - returns gallery page
  - /gallery/:id 
    - :id should be from 1 to 9
    - returns individual image
  - /subscribe
    - returns subscribe page (subscription form)
  - /admin
    - returns the list of subscribers
    - at first this should be empty, but when someone subscribes then the admin page will list the subscriber/s

## JSON Endpoints
  - /gallery/api/v0/clouds
    - returns the array of objects of the gallery
  - /gallery/api/v0/clouds/:id
    - :id should be from 1 to 9
    - returns the individual object of the specified ID
  - /api/subscribers
    - returns the array of objects of the subscribers

## Comments
  - We had difficulty on loading images by their ID, but putting correct image source fixed the problem. 
  - We also had difficultly on the list of subscribers on /Admin page. Vincent figured out the problem by creating 'client2.js' so that it can fetch and display the list of subscribers.
  - Adding min-height and position property in css for the footer made the footer stick to the bottom. 
  - We added media queries for navigation bar, logo and gallery to make them responsive.

## Assets
  - Template Big Picture is from [HTML5up](https://html5up.net/).
  - Gallery images are from [Unsplash](https://unsplash.com).
  - [Final Project](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/final): Deployed Product/Services Website
  - Instructor [Tony Grime's](https://github.com/acidtone) code as reference.