# EMSG (Error Message)

Emsg or error message is a small piece of code that will help you extract an error message from a catch block and display it to the user.

Whenever we are trying to normalize the errors of our server, we always follow the same pattern. 

In this case I have chosen to always use the same structure for my errors:

Looks like:


    message: "Validation Error"

    errors: [
        {
            message: "Please enter your name" // Message #1
        },
        {
            message: "Please enter your email address" // Message #2
        }
    ]


So if your structure is the same then you can use this code, otherwise it won't work for you.


To make sure this code is compatible with yours go to your axios catch and type this.

    axios.post("/some-url").catch(e){
        console.log(e.response.data.message) // String
        console.log(e.response.data.errors) // Array
    }


## How to install

With yarn

    yarn add emsg

With npm

    npm install emsg


## Import

#1

    import emsg from 'emsg'

#2

    const emsg = require('emsg')



## How to use

There are multiple functions.

You can use 


* getData(e) // Get the data out of the error from an http request
* getErrors(e) // Get the errors array (if any)
* getMsg(e) // Get the first message availablle.


Example:

    
    axios.post('/some-url').catch(e => alert(emsg.getMsg(e))) // You can use a modal, notification or other component to display the error message.

