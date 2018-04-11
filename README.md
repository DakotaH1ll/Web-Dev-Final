# Web-Dev-Final
Final project for CSCI 3230U

Our goal was to make a website which allowed users to sign in using their UOIT student numbers
and a password, which would then direct them to a page containing links to all of their classes,
stored in a Mongo database. Clicking one of these buttons would then go to a new page containing
an HTML table featuring a grade breakdown, allowing users to enter teh component name (Assignment 01, etc.)
, the amount of their grade it is worth, and their grade on it. They could then click the 'Calculate'
button to save the data to the databse, as well as show their current grade at the bottom of the page.
The idea was that students could set this up at the begeinning of the semester and add to it as they
get new grades back, allowing them to see their grade rise as the semester goes on.

We have included two file structures in the submission. The first one, titled 'Final' is our proof of concept,
featuring HTML pages for all the desired features, as well as css and working javascript, with features
including AJAX, jQuery, BootStrap and more. Featuring a working grade calculator on 'class.html'.

To use this site, open 'login.html' and sign in using 100518916 as username and 123 as password.
There is also a create account link which allows you to enter information but unfortunetly since we could not get Node.js and mongodb working
it does not save the info

Also included is 'Bad' which features work that we were working on using additional features like Node.js
and MongoDB, but it was not completed in time to be fully functional.


______________________________________________________________________________________________
Run:

In order to run this you have to have a http server running or use an html previewer in atom or something similar(google chrome wont let u access the xml file otherwise and u cant login then)

open terminal in linux and type sudo npm install http-server -g
and then go to the final folder and type http-server

than open browser and type localhost:8080

select login.html
_________________________________________________________________________________________________
