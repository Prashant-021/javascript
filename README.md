# Callback Functions in JavaScript

when you pass another function to a function then it is known as callback function.

It gives us access to attain asynchronicity in javascript.

any operation blocking the call stack is known as blocking the main thread.

Callback is a very powerful concept of JavaScript to acheive asynchronicity in code. 
## But there are two major issues in using callback:

1. Callback Hell:
    Whenever we use a callback inside a callback function and create a ladder structure which grows code horizontally instead of vertically then it is called as callback hell. The structure is called as pyramid of doom.

    it looks like:

    callback func(){
        callback func(){
            callback func(){
                callback func(){
                    //code
                }
            }
        }
    }

2. Inversion of control:
    Another issue while using callback function is that whenever the callback function is used it is depended on the higher order function to call that function and the control is not in our hands. That function may contain some bugs. Even it may not call the callback function or call it twice.


