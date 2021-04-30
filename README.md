# Kalakar - A Multiuser Drawing App
- Kalakar is a collaborative drawing space for children to create drawings together on separate systems where one canvas can be used by any number of users.
- They have options to change colours and brush strokes with the inclusion of saving their drawings or resetting it.
- With this collaborative drawing space we aim to teach children about team work.
- This website can help children build up their creative mindset and team spirit at an early age. 

## Home Page:
![image](https://user-images.githubusercontent.com/64376922/113134907-0e925c80-923f-11eb-9978-48e76cb33bed.png)

- Here we can see the header named “Kalakar” which when clicked, redirects us to the same page.
- There is a draw button which redirects the user to http://localhost:3000 which is the second page where the canvas and drawing tools are located.

#### Components: 
  1) the Header that redirects the user to the same page and showcases the name of the website. 
  2) the Draw button which takes us to the drawing page.

## Drawing Page:
![image](https://user-images.githubusercontent.com/64376922/113134918-13efa700-923f-11eb-9d9b-279d2014d49f.png)

- The canvas that is shared on the same local host  is used for drawing by selecting various colours and stroke weights.
- The random word generator provides different words every time we load this page.
- Reset button can be used in renewing the drawing canvas and save button saves the current drawing in your computer.

#### Components: 
  1) a canvas to draw on, 
  2) a random word generator to present user with new ideas for the drawing, 
  3) colour and stroke weight selector, 
  4) the reset button to select restart the drawing, 
  5) the save button to save the drawing in the device and 
  6) the heading that when clicked will redirect user to home page.

## Working
#### Canvas:
- The canvas works on p5.js which is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else.
#### Random Word Generator:
- It contains an expression which gives a different word every time we load the web page which works on AngularJS.  
- We also use Math function to generate random number to select a random index in the JSON object containing all the words.
#### Socket.io:
![image](https://user-images.githubusercontent.com/64376922/116748694-6b8b5900-aa1d-11eb-9e19-41c94a4ff5e8.png)
