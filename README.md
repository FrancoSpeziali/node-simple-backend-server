# Node.js Simple Backend Server

In this assignment you will be expected to write a backend system to handle saving and serving information to and from a client.

Most of the server code has already been provided for you - you will need to concentrate on the internal workings of the server (file system).

## Getting started

Please run `npm install` before starting

## What you will be doing

This project will teach you:

- The difference between GET and POST requests
- How to write files in Node.js
- How to read files in Node.js

This project assumes you've already had experience with:

- JavaScript
- Frontend
- Fetch API
- Tools for testing APIs, such as Postman or Insomnia

## Assignments

For the backend part of this assignment, you are expected to write your code in the file `server.js`

## Assignment 1 - Test!

Let's perform a simple test to see if we can connect to our server.

1. In the `console`, run the command:
    `nodemon server.js` or `node server.js`
    
    > Hint: The difference between `nodemon` and `node` is that `nodemon` will automatically reload / reserve your file when you make changes. `node` will not.

2. Once your server is running, you can connect to it with one of your API testing tools (Postman, Insomnia)

    Use this URL `http://localhost:3000/save/user` to connect to the server

3. What is the response?

## Assignment 2 - Understanding the code

In the last assignment, we connected to the server using the path `http://localhost:3000/save/user`, but why this path?

The first part, `http://localhost`, is because we are running the server locally on our machines. But where does the rest come from?

1. Look at the code inside `server.js`. On the last line we have the following line `app.listen(3000);`. That number `3000` is known as the `port`. This is the port number to which the server is listening to.

2. Look again at the code inside `server.js`
    
    Do you notice the function call, called `app.post()`?
    
    This function call is listening for a path called `/save/user`
    
If we put this information together, we build the URL `http://localhost:3000/save/user`

## Assignment 3 - Preparing to write data

For this assignment, we will be using the Node.js module, `fs`. Look over your notes regarding the Node.js file system.

Before you can use the `fs` module, we should import it:

```js
const fs = require('fs');
```

Research: [fs.appendFile()](https://www.geeksforgeeks.org/node-js-fs-appendfile-function/)

1. Create a function which will write data to the server

    The function should use the `fs.appendFile()` function
    
    The function should either return a Promise - OR - use a Promise natively (if for example you are importing `('fs').promises` or `('fs/promises')`) 
    
    The function should take 2 arguments, `filename` and `data`

## Assignment 4 - Writing data from a POST request

Look for the `app.post()` function with the route `/save/user`.

This function is called when the client makes a POST request.

Inside this function, we can access the data sent with the `BODY` of the `POST` request with the property `request.body`.
 
 1. Take the `request.body` value and `stringify` it
 
    > Hint: You will need to use the `JSON.stringify()` function

2. From inside the callback in `app.post()`, call the function you created in **Assignment 3**, passing in the data you stringified in the previous step. Also pass in an appropriate filename.

    - If the `Promise` resolves:
        
        1. Set the status of the response to 200 with the function `response.status(200)`
        
        2. Send the file data back to the user via the function `response.send()`
        
    - If the `Promise` rejects:
    
        1. Set the status of the response to 500 with the function `response.status(500)`
        
        2. Send the message "Sorry, unable to process request" to the client with the function `response.send()`

3. Test your code by making a `POST` request, sending a `JSON` object as the body. Include some test data here. When you make your request, it should create a new file with the data you passed in.

> Hint: If your testing tool gives you the error `Cannot GET /save/user`, check you are making a `POST` and not a `GET` request

## Assignment 5 - Reading data from a file

Research: [fs.readFile()](https://www.geeksforgeeks.org/node-js-fs-readfile-method/)

1. Create a function which will read data from the server

    The function should use the `fs.readFile()` function
    
    The function should either return a Promise - OR - use a Promise natively
    
    The function should take 1 argument, `filename`
    
    The function should `return` or `resolve` with the data from the file

## Assignment 6 - Sending a GET request

If you look at the code again, you should notice a function call, called `app.get()`. This is the `GET` request counterpart for your `POST` request. We will make this return a value.

1. From inside the callback in `app.get()`, call the function you created in **Assignment 5**, passing in the filename you wish to read from.

    > Hint: Remember, this function should return a `Promise`

    - If the `Promise` resolves:
        
        1. Set the status of the response to 200 with the function `response.status(200)`
        
        2. Send the file data back to the user via the function `response.send()`
        
    - If the `Promise` rejects:
    
        1. Set the status of the response to 500 with the function `response.status(500)`
        
        2. Send the message "Sorry, unable to process request" to the client with the function `response.send()`

## Assignment 7 - Build a frontend to make these calls

Build a frontend which will make both the `GET` and `POST` requests you were previously testing with your API testing tool.

1. The frontend should consist of a `<form>`, which will take the following details:

    - First name
    - Last name
    - Age
    - E-mail address
    - Interests
    
    There should be a button to `Submit` the form
     
2. Add a callback to the click event on the button to a `POST` request to the server

    1. Put all your `<form>` input values into one object 

    2. Use `JSON.stringify` to stringify this object
    
    3. Use the `fetch` API to send this object to your server endpoint, with the following options:
    
    ```
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: data
   ```
    
    Look at the generated file on your server. It should contain all the data.
    
3. Add another button on your website which will do a `fetch` `GET` request to get the data from the server.

4. Display the results on your website
