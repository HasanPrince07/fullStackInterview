//                               --------------  QJAVASCRIPT  --------------
// * two type of javascript - vanilla js,advance js
// * vanilla js - it is a client side language use for develop frontend part of web application
// * advance js - it is a server side language use for develop backend part of web application
// * javaScript is the world's most popular programming language used in web development
// * javaScript is used both in the frontend and backend
// * JavaScript is used to create logic in the frontend and interact with the user
// * JavaScript is used to develop backend part of web application in node.js
// * javascript is single-threaded
// * javascript is synchronous by default but supports asynchronous programming through the event loop, 
//   callbacks, promises, and async/await

// * external javascript m .js extension wali ek external file m javascript code hoti h jis file ka html ke 
//   head ya body element m link dete h(external JavaScript contains JavaScript code in an external file with a
//   .js extension which is linked to in the head or body element of the HTML)
// * external javascript ko reuse kiya ja sakta h(external JavaScript can be reused)
// * external javascript se code more readable ho jaati h(external JavaScript makes the code more readable)


//                             --------------  QRESERVEDKEYWORD  --------------
// * reserved keywords words hote h jinki prefined meaning hoti h(reserved keywords are words that have a 
//   predefined meaning)
// * reserved keywords ka use as a identifier jese variable name, function name etc. nahi kiya ja sakta h
//   (reserved keywords cannot be used as identifiers such as variable names, function names, etc)
// * reserved keyword syntax ka part hote h(reserved keywords are part of the syntax)


//                             --------------  QFILEEXTENSION  --------------
// * file extension file ke format ya fil m contain data ko indicate krte h(file extensions indicate the format
//   of the file or the data content in the file)


//                                --------------  QVARIABLES  --------------
// * variable container hote h data ko store krne ke liye(Variables are Containers for Storing Data)
// * 4 ways to declare variable - var,let,const,without keyword
// * var - 1. ye keyword js ke old version se use hota a rha h(this keyword has been using since the old
//   version)
//   2. isse declare varaible ki value reassign kr skte h(this allows reassigning the declared variable's
//   value)
// * 3. isse declare krne pr variable ka scope global or local scope ho skta h(when declared with this, the
//   scope of the variable is can global and local scope)
// * 4. isse declare krne pr variable ko redeclare kr skte h(variables declared with var can be redeclared)
// * 5. isse declare variable apne scope m hoisted hote h ek default value(undefined) ke sath(variables
//   declared with var are hoisted into their scope with default value undefined)
// * let - 1. ye keyword js ke es6 version m add huva tha(this keyword was added in es6 version of js)
//   2. isse declare varaible ki value reassign kr skte h(this allows reassigning the declared variable's
//   value)
// * 3. isse declare krne pr variable ka scope global,local ya block scope ho skta h(when declared with this,
//   the scope of the variable is can global,local or block scope)
// * 4. isse declare krne pr variable ko redeclare nhi kr skte(variables declared with let can not be
//   redeclared)
// * 5. isse declare variable apne scope m hoisted hote h with initialization error(variables declared with let
//   are hoisted into their scope with initialization error)
// * const - 1. ye keyword js ke es6 version m add huva tha(this keyword was added in es6 version of js)
//   2. isse declare varaible ki value reassign nhi kr skte(this not allows reassigning the declared
//   variable's value)
// * 3. isse declare krne pr variable ka scope global,local ya block scope ho skta h(when declared with this,
//   the scope of the variable is can global,local or block scope)
// * 4. isse declare krne pr variable ko redeclare nhi kr skte(variables declared with const can not be
//   redeclared)
// * 5. isse declare variable apne scope m hoisted hote with initialization error(variables declared with const 
//   are hoisted into their scope with initialization error)


//                                --------------  QOPERATOR  --------------
// * assignment operator - =,+=,-=,*=,/=,**=,%=
// * arithmetic operator - +,-,*,/,**,%,++,--
// * comparison operator - ==,===,>,<,>=,<=,!=,!==
// * ternary operator - ?
// * logical operator - &&,||,!

// * typeof - it is a operator use for check the type of value or variable and it returns a string value.


//                                 --------------  QNAN  --------------
// * not a number represent a invalid number
// * isNaN() - this function chekcs if a value is NaN
// * NaN is not equal to anything
// * NaN == NaN, NaN === NaN - both are false


//                                --------------  QDATATYPE  --------------
// * 2 type of datatypes - primitive, non-primitive
// * primitive data type - string, number, boolean, undefined, null, symbol, bigInt
// * non-primitive data type - object
// * string - represents a sequence of characters enclosed in single, double, or backticks
// * number -  represents numeric values, including integers and floating-point numbers
// * boolean - represents either true or false
// * undefined - represents a variable that has been declared but not assigned a value
// * null - represents a empty value of variable
// * symbol - represents a unique and immutable value and it is use for create unique id and it is introduced
//   in es6
// * bigInt - represents large numbers of integers and it is introduced in es10


//                                 --------------  QARRAY  --------------
// * array ka use data ke ordered collection ko store krne ke liye kiya jata h(array are used to store ordered 
//   collections of data)
// * array m index number hota h jo array m element ki position ko specifie krta h(An index is a number in an
//   array that specifies the position of an element in the array)


//                                 --------------  QOBJECT  --------------
// * object is a collection of properties
// * properties - jisme data key(name)-value ke form m rhta h(In which the data remains in the form of
//   key(name)-value)
// * object ki properties ko dot notaion or bracket notation method se access kr skte h(You can access the
//   properties of the object using dot notation and bracket notation methods)
// * dot notaion method example - object_name.key=key's_value
// * bracket notation method example - object_name[key]=key's_value


// * length - ye ek property hoti h jo no. of string character or no. of arrays element return krta h(it is a
//   property which return no. of string character and no. of arrays element)
// * toString() - is method se array,number,boolean,object ko string m convert krte h(with this we can
//   convert array,number,boolean,object into string)
// **indexOf() - is method se value or character ki position find krte h(by this method we can find position
//   of value and character)
// **lastIndexOf() - is method se ending se value or character ki position find krte h(by this method we can 
//   find position of value and character from ending)
// * includes() - is method se string m characters or array ke element ko find kr skte h ki vo isme h ya nhi
//   ager ho to true return hoga(by this method we can check strings character and arrays element, if these
//   values are available its returns true)


//                               --------------  QARRAYSMETHOD  --------------
// **push(),pop(),unshift(),shift(),slice(),splice(),concat(),reverse(),sort(),fill(),Array.isArray(),join(),
//   forEach(),map(),filter(),find(),findIndex()


// * push() - array ke end m element add krne ke liye(to add an element to the end of an array)
//   example - array_name.push(element)
// * pop() - array ke end wale element ko remove krne ke liye(to remove an element to the end of an array)
//   example - array_name.pop(element)
// * unshift() - array ke start m element add krne ke liye(to add an element to the start of an array)
//   example - array_name.unshift(element)
// * shift() - array ke start wale element ko remove krne ke liye(to remove an element to the start of an array)
//   example - array_name.shift(element)
// * slice() - array ke kuch element se ek new array return krta h(returns a new array from some of the 
//   elements of an array)
//   example - array_name.slice(someelement,someelement)
// * splice() - array se element remove/add krne ke liye(add/remove elements in an array)
//   example - array_name.splice(indexno,howmanyelementremove,someelement)
// * concat() - multiple arrays ko combine krta h(combine multiple arrays)
//   example - arrayone_name.concat(arraytwo_name)
// * reverse() - elements ke order ko reverse krta h(revrese the order of elements)
//   example - array_name.reverse()
// * sort() - sort elements
//   example - array_name.sort()
// * Array.isArray() - ye check krta h ki value array h ya nahi(check if a value is an array)
//   example - Array.isArray(value)
// * join() - elements ke bich value add krke string return krta h(returns a string by adding values ​​between
//   elements)
//   example - array_name.join(",")
// * forEach() - isme ek function pass krte h jo array ke elements ko return krta h(we pass a function into it
//   that returns the elements of the array)
//   example - array_name.forEach((data)=>{data})
// * map() - array ke hr element pr calculation krke ek new array return krta h(performs calculations on each
//   element of the array and returns a new array)
//   example - array_name.map(data=>data*2)
// * filter() - array ke hr element pr condition apply krke ek new array return krta h(returns a new array by
//   applying a condition to each element of the array)
//   example - array_name.filter(data=>data%2===0)
// * find() - condition se match hone wala sbse pahla element return krta h(Find the first element that matches
//   a condition)
//   example - array_name.find(data=>data%2===0)
// * findIndex() - condition se match hone wala sbse pahle element ka index return krta h(Find the first 
//   element's index that matches a condition)
//   example - array_name.findIndex(data=>data%2===0)


//                                --------------  QSETTIMEOUT  --------------
// * ye built-in function hota h jo kisi function ya code ko ek specific time ke bad ek baar call krta h(it is 
//   a built-in function that calls a function or code one time after a specific time)
// * settimeout asynchronous hota h(settimeout is asynchronous)


//                                --------------  QSETINTERVAL  --------------
// * ye built-in function hota h jo ek function ya code ko ek specific time pr continuously call krta h(it is a
//   built-in function that is continuously call a function or code after specific time)
// * setinterval asynchronous hota h(setinterval is asynchronous)


//                                --------------  QCLEARTIMEOUT  --------------
// * setTimeout ek id return krta h jise cleartimeout function m put krte h settimeout ko stop krne ke liye(The
//   setTimeout returns an ID which is passed to the cleartimeout function to stop the setTimeout)

//                               --------------  QCLEARINTERVAL  --------------
// * setinterval ek id return krta h jise clearinterval function m put krte h setinterval ko stop krne ke liye
//   (The setinterval returns an ID which is passed to the cleartimeout function to stop the setinterval)


//                                    --------------  QSCOPE  --------------
// * scope variables or functions ki accesebility ko determine krta h(scope determines the accessibility of 
//   variables and functions)
// * types of scope - global scope, local scope/function scope, block scope, lexical scope
// * global scope - jb variable ya function ko function ya block ke bhar declare kiya jata h to uske scope ko 
//   global scope khte h jisme varaible ya function ko kahi bhi access kiya ja skta h(when the variable or 
//   function is declared throughout the function or block, then its scope is called global scope, in which the  
//   variable or function can be accessed anywhere)
// * local scope - jb variable ya function ko function ke ander declare kiya jata h to uske scope ko local 
//   scope kahte h jisme varaible ya function ko keval function ke ander hi access kr skte h(when the variable
//   or function is declared inside the function, then its scope is called local scope, in which the variable 
//   or function can be accessed inside the function only)
// * block scope - jb variable ko kisi block ke ander declare kiya jata h to uske scope ko block scope kahte
//   h jisme varaible ko keval us block ke ander hi access kr skte h. ye scope es6 version m introduce hova
//   tha(when the variable is declared inside the block, then its scope is called block scope, in which the
//   variable can be accessed inside the block only. this block was introduce in es6 version)
// * lexical scope - isme inner function ko outer function ke variable ka access rahta h(the inner function has
//   access to the variables of the outer function in lexical scope)


//                                  --------------  QSCOPECHAIN  --------------
// * scope chain ek process hota h jisme variable ko inner to outer scope ke order m find kiya jata h(scope
//   chain is a process in which variables are searched in order from inner to outer scope)
// * last m global scope m bhi variable find na ho to error show hoti h(finally, an error is shown if the
//   variable does not exist in the global scope as well)


//                                    --------------  QLOOP  --------------
// * isme ek specific condition pure hone tak ek block of code execute hoti h rhti h(In this, a block of code
//   continues to execute until a specific condition is fulfilled)
// * mostly loop ka use array, object ki values ko one-by-one get krne ke liye kiya jata h(Mostly loop is
//   used to get the values ​​of array, object one by one)
// * type of loop - while, do-while, for, for-in, for-of
// * while, do-while, for loop m initilaization, condition, increment-decrment krte h
// * while - phle initialization krte h phir while keyword likhr parenthesis m condition dete h phir curly
//   bracket m statement likhr increment-decrement krte h(First initialization then write while keyword and
//   give condition in parenthesis and then write statements and increment-decrement in curly brackets)
// * do-while - phle initialization krte h phir do keyword likhr curly bracket m statement likhr increment-
//   decrement krte h phir while keyword likhr parenthesis m condition dete h. jisse isme conditiion second
//   time se check hoti h(First initialization then write do keyword and write statement and increment-
//   decrement in curly brackets and then write while keyword and give condition in parenthesis. Due to which
//   the conditions are checked by second time)
// * for - isme for keyword likhr parenthesis m initilization, condition, increment-decrement krte h phir
//   curly bracket m statement likhte h(write for keyword then give initilization, condition, increment-
//   decrement in parenthesis then write statement in curly bracket)
// * for-in - iska use object ki values ko on-by-one get krne ke liye kiya jata h(it is use for get values
//   of object one-by-one)
//   example - for(const key in obj_name){ console.log(obj_name.key) }
// * for-of - iska use array ki values ko on-by-one get krne ke liye kiya jata h(it is use for get values
//   of array one-by-one)
//   example - for(const value of array_name){ console.log(value) }
// * break - condition false hone se phle loop se bhar niklne ke liye iska use krte h(It is used to break out
//   of the loop before the condition fails)
// * continue - is keyword se loop ke kisi particuler value ko skip krke loop ko continue rkh skte h(With
//   this keyword you can skip any particular value of the loop and keep the loop continuous)


//                                 --------------  QFUNCTIONS  --------------
// * function reusable block of code hote h jinse task perform krte h function ko call krne pr code execute
//   hote h(function is a reusable block of code which we create for perform task and it execute when we call 
//   it)
// * parameter - ye varirable ke name hote h jinhe function m define krte h(it is a name of variable which
//   we define inside the function)
// * arguments - function ko pass ki jane vali value(it is a value which we pass to a function)
// * return - isse fuction ki value ko jha function ko call kiya vha pass krte h(By this, the value of the
//   function is passed where the function is called)


// * outer_function()() - isme outer function call hota h jo ek inner function ko return krta h fir second  
//   parenthesis se inner function immediently call ho jata h(it contains an outer function call that returns
//   an inner function and then the second parenthesis calls the inner function immediately)


//                             --------------  QFUNCTIONDECLARATIONS  --------------
// * is function ka name hona jruri h(it must have a name)
// * ye hoisting hota h(it is hoisting)
// * ise regular function, normal function or function statment bhi kaha jaata h(It is also called regular 
//   function, normal function and function statement)
// * syntax - function function_name(){ console.log("call") }


//                              --------------  QFUNCTIONEXPRESSION  --------------
// * is function ka name nhi hota ise ek variable m store krte h(This function does not have a name, it is
//   stored in a variable)
// * ye hoisting nhi hote h(it is not hoisting)
// * syntax - var variable_name = function (){ console.log("call") }


//                            --------------  QNAMEDFUNCTIONEXPRESSION  --------------
// * named function expression ek function expression hota h with function name(a named function expression is
//   a function expression with a function name)
// * isme function ka name only function ke andr hi accessible hota h(in this the function name is accessible
//   only inside the function)


//                                --------------  QARROWFUNCTION  --------------
// * ye function ES6 version m introduce huva(This function was introduced in the ES6 version)
// * ise expression function ko modifie krke create krte h(Create it by modifying the expression function)
// * isse function syntax short m likh skte jese single line statement pr return keyword or curly bracket
//   hta skte h or single parameter pr round bracket/parentheses bhi hta skte h(With this function syntax
//   can be written in short for example we can remove return keyword and curly bracket on single line
//   statement and we can remove round bracket/parentheses on single parameter)
// * iska khudka this keyword nhi hota h ye apne parent ke this ko refer krta h(arrow functions do not have 
//   their own this keyword it refers to its parent this keyword)
// * iska khudka arguments object nhi hota(arrow functions do not have their own argument object)
// * isko as a constructor use nhi kr skte h(cannot be used as a constructor)
// * syntax - var variable_name = () => { console.log("call") }


//                             --------------  QCALLBACKFUNCTION  --------------
// * callback function ek function hota jise as a argument dusre function m pass krte h(callback function is
//   a function which we pass as a argument in another function)
// * jb dusra function complete ho jata h tb callback function call hota h(callback funtion is call when
//   another function execute)


//                            --------------  QANONYMOUSFUNCTION  --------------
// * ve function jinke koi name nhi hote(functions that have no names)
// * expression function anonymous function hote h(expression function is a anonymous function)


//                                  --------------  QIIFE  --------------
// * immediately invoked function expression ek function hota h jise define krte h ye immediently execute ho 
//   jata h(iife is a function that gets executed immediately after it is defined)
// * iife ko self-invoking function or self-executing function bhi kahte h(iife also known as a self-invoking
//   function or self-executing function)
// * iife syntax - (function(){ console.log("call") })();


//                            --------------  QCONSTRUCTORFUNCTION  --------------
// * constructor function ka use object create krne ke liye kiya jata h(the constructor function is used to
//   create an object)
// * jb hame multiple objects create krne ho jinki properties or methods same ho tb constructor function ka use
//   kiya jata h(constructor functions are used when we need to create multiple objects that contain the same
//   properties and methods)
// * constructor function ke name ka first charecter capital m hona jaruri h(the first letter of the 
//   constructor function's name must be capitalized)
// * constructor function m new keyword se object create kiya jata h(in the constructor function, an object is
//   created using the new keyword)


//                              --------------  QFIRSTCLASSFUNCTION  --------------
// * first class function concept ko refer krte h jisme function ko value ki tarah treat kiya jata h(first
//   class functions refer to the concept in which functions are treated as values)
// * first class function m hm function ko variable m store kr skte h(in first class function we can store the
//   function in a variable)
// * first class function m hm function ko as arguments dusre function m pass krte h(in first class function,
//   we pass the function as arguments to another function)
// * first class function m hm function ko kisi dusre function se return kr skte h(in first class function we
//   can return a function from another function)


//                                   --------------  QHOF  --------------
// * high order function ek function hota h jo ya to ek ya ek se jyada function ko as a arguments accept krta h
//   ya fir kisi function ko as a result return krta h ya fir dono hi karta h(A high order function is a 
//   function that either accepts one or more functions as arguments or returns a function as a result or does
//   both)


//                                 --------------  QCURRYING  --------------
// * ye ek technique h jisme multiple arguments wale function ko several function m transform krte h jisme ek
//   function ek hi arguments leta h(this is a technique in which a function taking multiple arguments is
//   transformed into a multiple function taking a single argument)


//                                  --------------  QTHIS  --------------
// * this ek identifier h jo us context ko refer krta h jisme code currently execute ho rha ho(this keyword is
//   an identifier that refers to the context in which the code is currently executing)
// * this ki value depend krti h ki this ka use kaha kiya ja raha h(this keyword's value depends on where it is
//   being used)
// * jb this keyword ka use global scope m kiya jata h tb this keyword browser m window object or nodejs m
//   global ko refer krta h(when this keyword is used in global scope then this keyword refers to window object
//   in browser and global in nodejs)
// * object m this keyword us object ke current context ko refer krta h(in object this keyword refer to current
//   context of object)
// * constructor function m this keyword newly created object ko refer krta h(in constructor function this 
//   keyword refer to newly created object)
// * eventListner m this keyword us element ko refer krta h jisse event call hova ho(in eventListner this
//   keyword refer to element that calls event)
// * vo function jo kisi object ke method nhi h unme this keyword window object ko refer krta h(in functions 
//   that are not methods of an object the this keyword refers to the window object)


//                                --------------  QCLOSURE  --------------
// * closure ek function hota h jo ki outer function ke execution ke baad bhi apne lexical scope se outer 
//   function ke variable ko access kr skta h(closure is a function that can access variables of outer function
//   from lexical scope even after outer function has finished executing)


//                                --------------  QHOISTING  --------------
// * hoisting javascript ka ek machenism hota h jisse variable or function ko declare krne se pahle access kr
//   skte h(hoisting is a JavaScript mechanism that allows accessing variables and functions before they are
//   declared)


//                                  --------------  QTDZ  --------------
// * let ya const se declare variable se phle ka area temporal dead zone hota h(the area before the variable
//   declared by let or const is the temporal dead zone)
// * tdz m variable ko access nhi kiya ja skta(we can not access variable in tdz)
// * tdz let or const se decalre variable ke liye hota h(tdz is apply only for let and const)


//                               --------------  QUSESTRICT  --------------
// * use strict ek directive h jo strict mode ko enable karta h(use strict is a directive which is enable
//   strict mode)
// * use strict common error ko catch krta h(use strict catches common error)
// * ise es5 m introduce kiya gaya(it is introduce in es5)
// * undeclared variable ko value assign krne pr error show krta h(shows error when assigning value to 
//   undeclared variable)
// * kuch syntax ko allow nhi krta h(does not allow certain syntax)
// * isme this keyword un function m undifined hota h jo function kisi object ke method nhi hote(in this, this
//   keyword is undefined in those functions which are not methods of any object)
// * isme duplicate parameter allow nhi hote(duplicate parameters are not allowed in use strict)
// * add "use script" at top for apply strict mode on whole script
// * add "use script" inside function for apply strict mode on specific function


//                             --------------  QTYPECEORCION  --------------
// * kisi value ke data type ka conversion type ceorcion hota h(conversion of data type of a value is a type
//   ceorcion)
// * type of cercion - implicit type ceorcion, explicit type coercian
// * implicit type ceorcion - jb different data type pr operation perform krte h tb javascript khudse data 
//   type change krta h(javaScript automatically changes the data type when performing operations on different
//   data types)
// * example -> "3"+3="33", "3"-3=0
// * explicit type coercin - isme developer methods se data type change krta h(in this the developer changes
//   the data type through methods)
// * methods for explicit type ceorcion - String(), Number(), Boolean()


//                               --------------  QPROMISE  --------------
// * promise object ka use asynchronous operation ko handle krne m krte h(we use promise object for handle
//   asynchronous operation)
// * promise m do predefined parameter pass krte h - resolve,reject(promise takes two predefined parameter -
//   resolve,reject)
// * resolve - jb promise success hota h,reject - jb promise failed hota h
// * promise state or result return krta h(promise returns state and result)
// * state - initialy state pending rhti h phir resolve ya reject hoti h(Basically the state remains Pending
//   then Resolve or Reject)
// * result - initialy result undefined rhta h phir isme state ki value hoti h(Initially the result is
//   undefined, then it contains the value of the state)
// * .then() - promise resolve hone pr then method ke parameter m promise ki value aati h(When the promise is
//   resolved, the value of the promise comes in the parameter of then method)
// * .catch() - promise reject hone pr catch method ke parameter m promise ki value aati h(When the promise
//   is reject, the value of the promise comes in the parameter of catch method)
// * finally() - promise resolve ho ya reject promise complete hone pr ye method call hota h(This method is
//   called when the promise is resolved or rejected)
// * promise chaining - multiple .then method ka use krke multiple promise resolve krte h jise promise
//   chaining khte h isme ek .then method promise return krta h jise resolve krne ke liye ek or .then method
//   ka use krte h(we use multiple .then method for resolve multiple promise that call promise chaining In
//   this, a .then method returns a promise, which is resolved by another .then method)
// * promise.all - sabhi promise resolve hone pr ye un sabhi promise ke output ko ek array m return krega or
//   jo bhi promise reject hoga ye keval uska output return krega(If all promises are resolved, it will
//   return the output of all those promises in an array and This will return only the output of whatever
//   promise is rejected)
// * promise.allSettled - ye method sabhi promise complete hone pr sabhi ke state or result ko return krega
//   chahe koi promise resolve ho ya reject ho(this method will return the state and result of all the
//   promises when all promises complete whether the promise is resolved or rejected)
// * promise.race - jo promise sbse phle complete hoga ye uska output dega(It will give the output of the
//   promise that is completed first)
// * ager kisi promise m resolve or reject dono ho to jo phle run hoga usi ka output milega(If a promise
//   contains both Resolve and Reject, the one that is run first will get its output)
// * error handling ke liye catch method use me lete h(we use catch method for error handling)


//                                 --------------  QERROR  --------------
// * error code ke execution m hone wale issue ko represent krta h(the error represents an issue occurring 
//   during the execution of the code)
// * error show krti h ki code m kaha or kya galat h(the error shows where and what is wrong in the code)
// * error ko resolve na krne pr code execute nhi hota h(the code does not execute if the error is not resolved)
// * types of error - compile error, runtime error
// * compile error - ye error execution start hone se phle aati h(this error occurs before the execution 
//   starts)
// * runtime error - ye error tb aati h jb execution start ho jata h(this error occurs when the execution
//   starts)
// * SyntaxError - jb code m invalid syntax find ho tb ye error show hoti h(this error is shown when there is
//   invalid syntax in the code)
// * ReferenceError - jb variable ya function ko access krte h pr vo declare nhi hote tb ye error show hoti h
//   (this error is shown when a variable or function is accessed but it is not declared)
// * TypeError - jb unexpected value find ho tb ye error show hoti h(this error is shown when there is an 
//   unexpected value found)
// * SyntaxError is a part of compile error
// * ReferenceError and TypeError is a part of runtime error


//                             --------------  QERRORHANDLING  --------------
// * ye ek runtime error ko handle krne ka process h jisse program crash hone ke bjae handle ho ske(this is a
//   process of handling errors in a systematic way so that the program can be handled instead of crashing)
// * error ko handle krne ke liye try, catch or finally ka use krte h(we use try, catch and finally to handle 
//   errors)
// * try block m vo code hogi jo error show kr skta h(the try block will contain the code that can show the
//   error)
// * error find hone pr catch block ki code execute hogi(the code in the catch block will be executed when an
//   error occurs)
// * finally block hmesha execute hota h chahe code m error find ho ya nahi(the finally block is always
//   executed regardless of whether the code contains errors or not)
// * throw keyword se custom error create or show kr skte h(You can create and show custom errors with the 
//   throw keyword)


//                              --------------  QRESTPARAMETER  --------------
// * rest parameter ek feature h jisme ek function ke arguments ko array m represent krte h(rest parameters are
//   a feature that represents the arguments of a function in an array)
// * rest parameter ko ...name se show kiya jata h(rest parameters are shown by ...name)
// * rest parameter function m last parameter hona chahiye(rest parameter must be the last parameter in the
//   function)
// * ek function m ek hi rest parameter hota h(a function can have only one rest parameter)
// * rest parameter es6 m introduce hua(rest parameters introduced in S6)


//                              --------------  QSPREADOPERATOR  --------------
// * spread operator ka use array, string ko invidual elements, character m expand krne ke liye kiya jata h
//   (spread operator is used to expand an array, string into individual elements, characters)
// * spread operator se do array ya do object ko merg kr skte h(You can merge two arrays or two objects using
//   the spread operator)
// * spread operator ko ... se show kiya jata h(spread operator are shown by ...)
// * spread operator es6 m introduce hua(spread operator introduced in S6)


//                               --------------  QCALLBACKHELL  --------------
// * callback hell esi situation ko refer krta h jaha asynchrouns operation ko handle krne ke liye nested
//   callback ka use kiya jata h(callback vehicle refers to a situation where nested callbacks are used to
//   handle asynchronous operations)
// * callback hell ki situation m code ko read, debug or maintain krna dificult hota h(in a callback hell
//   situation, it is difficult to read, debug, and maintain the code)
// * promises or async/await ka use krke callbak hell ko resolve kr skte h(callback hell can be resolved by
//   using promises and async/await)










//                               --------------  QREACTJS  --------------
// * reactjs ek open source javascript library h(it is a open source javascript library)
// * iska use web application ke frontend part ko develop krne m krte h(we use for develop frontend part of
//   web application)
// * isse single page application bnate h(we create single page web application with help of reactjs)
// * ise facebook community ne develop kiya h(facebook develops react js)
// * reactjs application ko kei component m divide krte h jin component ko reuse kr skte h(we divide the react
//   js application into components that can be reused)
// * react js ka current version - 19.1.0
// * react js release date is 29 may 2013


//                          --------------  QHOWDOESREACTJSWORK  --------------
// * react js virtual dom ke concept pr work krta h(react works on virtual dom concept)
// * react m app.js root component hota h jisme sbhi component ko call krte h(in react app.js is the root
//   component in which all the components are called)
// * app.js se output index.js m pass krte h phir document.getElementById ke through index.html file m pass
//   krte h(output from app.js passes to index.js then passed through document.getElementById to index.html
//   file)


//                                --------------  QDOM  --------------
// * dom/real dom mtlb document object model ye html ke document ko ek tree structure m represent krta h(dom/
//   real dom means document object model it is represent document as a tree structure)
// * jb document m changes kiye jate h to dom update hota h or re-render hota h(DOM updates and rerenders
//   when changes are made to the document)


//                              --------------  QVIRTUALDOM  --------------
// * virtual dom real dom ki copy hoti jo real dom ke comparison m fast h(virtual dom is a copy of real dom
//   that is fast compare to real dom)
// * document m state change krne pr virtual dom tree ki new copy bnti h or new copy previous copy se compare
//   hoti h or jis element m change rhega real dom m keval vhi element change hoga(A new copy of the virtual
//   dom tree is created when the state changes in the document and new copy is compared to previous copy and
//   The element in which there will be change, only that element will change in the real dom)


//                              --------------  QSHADOWDOM  --------------
// * ye ek hidden dom h(it is a hidden dom)
// * ye dom ko completly represent nhi krta(it is not represent dom compeletly)
// * is pr main dom ki styling ka impect nhi pdta(dom's styling does not affect this)
// * ager hme esa element create krna ho jispr dom ki css ka impect na pde to shadow dom ka use krenge(If we
//   want to create such an element which is not affected by the css of the dom, then we will use the shadow
//   dom)


//                              --------------  QCOMPONENTS  --------------
// * components reusable code hote h jo jsx/react element return krte h(components are reusable code which
//   return jsx/react element)
// * ek application ko bhot se component m divide krte h or in sabhi child component ko root component/app
//   component m call krte h(dwe ivide a application into multiple child component and then call these
//   components in the root components)
// * components ko use krne ke liye components ko import krke call krte h(we import components and then
//   call components for use)
// * component application ka part hota h(components is a part of application)
// * two type of component - 1.function based component 2.class based component


//                           --------------  QFUNCTIONCOMPONENTS  --------------
// * function component ek simple javascript function h(function component is a simple javascript function)
// * inhe stateless component bhi kahte h(these are also called stateless components)
// * isme constructor use nhi hota(there is no constructor in class components)
// * isme render method require nhi hota h(there is no render method require in function component)
// * hooks ka use krte h life cycle method,state,pure component etc. feature ka use krne ke liye(we use hooks
//   for use life cycle method,state,pure component etc)


//                            --------------  QCLASSCOMPONENTS  --------------
// * class component ek es6 class hoti h(class component is a es6 class)
// * class component reactjs ke early version m introduce huva(class component introduced in early version of
//   reactjs)
// * isme constructor m state define krte h(in this we define the state in the constructor)
// * ise statefull component bhi khte h kyuki isme state or logic defined krte h(also known as a statful
//   component because we can defined state and logic in class component)
// * react element(jsx) return krne ke liye render method require hota h(render method require for return
//   react element(jsx))
// * class component ko create krne ke liye react se component ko import krte h(import component from react
//   for create class component)
// * class component m life cycle methods,state,pure component etc.(we can use life cycle methods,state,pure
//   component etc. in class components)


//                           --------------  QCONTROLLEDCOMPONENT  --------------
// * ye form ke element(input, textarea, select) hote h jinki value react state dwara control hoti h(these are 
//   form elements (input, textarea, select) whose value is controlled by react state)


//                          --------------  QUNCONTROLLEDCOMPONENT  --------------
// * ye form ke element(input, textarea, select) hote h jinki value dom ya useref dwara control hoti h(these
//   are form elements (input, textarea, select) whose value is controlled by the DOM or useref)
// * ref ka use krke form ke element ki value ko access kiya jata h(the value of a form element is accessed 
//   using ref)
 

//                             --------------  QPURECOMPONENT  --------------
// * pure component ek class component hota h jo ki unnecessery re-render ko avoid krta h(the pure component is
//   a class component which avoids unnecessary re-rendering)
// * ye previous props ya state ko current props ya state se compare krta h agr props ya state m koi changes 
//   detect na ho to component re-render nhi hota(it compares previous props or state with the current props or 
//   state. if changes to the props or state are not detected, the component is not re-rendered)
// * isse application ki performance better hoti(this would have improved the performance of the application)
// * functional component m pure component ki functionality ko use krne ke liye useMemo ka use krte h(in 
//   functional components, we use useMemo to access the functionality of the pure component)


//                                 --------------  QHOC  --------------
// * high order component ek pattern/technique h component logic ko reuse krne ka(high order component is a
//   pattern/technique for reusing component logic)
// * ye ek function h jo component ko as a argument leta h or component return krta h(this is a function that
//   takes a component as an argument or returns the component)
// * hoc functionality add krke new component return krta h(the hoc returns a new component by adding 
//   functionality)


//                               --------------  QHOOKS  --------------
// * jo features/funtonality jese life cycle method,state,pure component etc. react ke class component m use
//   krte h vhi feature/funtonality hooks ki help se function component m kr skte h(Whatever work we do in
//   the class component of React like state,life cycle method,pure component etc. we can do the same work
//   in the function component using hooks)
// * function based component m react ki additional functionality ko use krne ke liye hooks ka use krte h
//   (We use hooks to use additional functionality of React in function based components)
// * hooks ko class component m use nhi kr skte(we can not use hooks in class component)
// * hooks ko react ke 16.8 version m introduce kiya gya tha(hooks are introduced in react 16.8 version)


//                             --------------  QTYPEHOOKS  --------------
// * react provide 17 type of hooks in react 18 version - 1.useState 2.useEffect 3.useContext 4.useRef
//   5.useLayoutEffect 6.useReducer 7.useCallback 8.useMemo 9.useId 10.useDebugValue 11.useDeferredValue
//   12.useImperativeHandle 13.useInsertionEffect 14.useSyncExternalStore 15.useTransition 16.useActionState
//   17.useOptimistic


//                             --------------  QUSESTATE  --------------
// * useState hook ka use functional component m state handle/manage krne ke liye krte h(useState use for
//   state management/handle in functional component)
// * useState ek array return krta h jisme do value hoti 1.current state 2.function - function se current
//   state ko update krte h or current state ki initial value useState ke round bracket m assign krte h(it
//   provide a array with two values.1. current state 2.function we can update state with help of function.
//   we can assign initial value of current state in usestate's bracket)
// * jb bhi state change hoti h component re-render hota(component is re-rendered whenever the state changes)


//                              --------------  QUSEEFFECT  --------------
// * component render hone pr ya state update hone pr useEffect asynchronously call hota h(useffect is called 
//   asynchronously when the component is rendered or state is updated)
// * useEffect m function or dependencie pass krte h.dependencie optional hoti h.do trah ki dependencie pass
//   kr skte h 1.empty array([]) - jb component render hota h tb ek bar useEffect call hoga 2.array with
//   variable - first time render krne pr phir jb state update krenge h tb useEffect call hoga.jo code
//   execute krni ho vo function ke ander likhte h(we pass dependencie and function in useEffect.dependencie
//   are optional.we can pass to type of dependencie 1.empty array([]) - When the component is rendered,
//   useffect will be called once.2.array with variable - useEffect will call when component render first
//   time and agian when the state is updated.The code we write inside the function that code is executed)
// * jb bhi component render hone ke bad ya state update hone pr koi code execute krni ho jese alert show
//   krna, setTimeout use krna, data fetch krna, componentDidMount, componentDidUpdate, componentWillMount jese
//   feature ka use functional component m krna ho tb useEffect ka use krenge(whenever any code needs to be
//   executed after the component is rendered or after the state is updated, such as showing an alert, using
//   setTimeout, fetching data, using componentDidMount, componentDidUpdate, componentWillMount, etc., if any
//   feature needs to be used in a functional component, then useEffect will be used)


//                              --------------  QUSECONTEXT  --------------
// * useContext se context ko child component m access kr skte h(we can access context with help of
//   useContext)
// * useContext global data return krta h(useContext return global data)


//                                --------------  QUSEREF  -------------- 
// * useRef hook se dom element ko direct access kr skte h(useRef hook allows direct access to dom element)
// * useRef se mutable value store krte h jo change hone pr component ko re-render nhi krte h(useRef stores 
//   mutable value which does not re-render the component if it changes)
// * useRef hook ek current property wali ref object return krta h(useRef hook returns a ref object with a
//   current property)
// * current property mutable value store rkhti h jo change hone pr component ko re-render nhi krti h(current
//   property stores mutable value which does not re-render the component if it changes)
// * element m ref attribute add krke us element ko directly access kr skte h(we can access that element
//   directly by adding an ref attribute to the element)


//                              --------------  QUSELAYOUTEFFECT  -------------- 
// * ye hook useEffect ki tarah hota h but browser pr screen show hone se phle synchronusly run hota h(this 
//   hook is similar to a simple effect but runs synchronously before the screen is shown on the browser)


//                                --------------  QUSEREDUCER  --------------
// * useReducer useState ka advance method hota h. complex state ko manage krne ke liye iska use krte h
//   (useReducer is a advance method of useState.it is use for complex state managment)
// * useReducer do argument accept krta h 1.reducer 2.initialState or ek array return krta h jisme current
//   state(state) or dispatch method hota h(useReducer accept two arguments 1.reducer 2.initialState and
//   return a array which hold current state and dispatch method)
// * dispatch se action ko trigger krte h or jis type ka action perform krna ho dispatch ke type property m
//   value pass krte h(trigger the action from dispatch and type of action which we want to perform we put
//   value in dispatch's type property)
// * reducer ek pure function hota h jo ki do parameter 1.state 2.action accept krta h or ek state return
//   krta h. action se hm operation perform krte h(reducer is a pure function which accept two paramater
//   1.state 2.action and return a state.we perform operation with help of action)


//                                --------------  QUSECALLBACK  --------------
// * useCallback m dependencie pass krte h jiske bases pr useCallback call hota h or ek memoized function
//   return krta h jise child component m pass krte h(passes the dependency inside the useCallback on the
//   basis of which the useCallback is called and returns a memoized function which is passed to the child
//   component)
// * isse application ki performance better hoti h kyoki ye child component ko unneccesery re-render nhi krta
//   jiske liye child component ko memo m rapped krte h (from callback The performance of the application is
//   better because a child component does not have to be re-rendered manually,for which the child component
//   is wrapped in memo)


//                                  --------------  QUSEMEMO  --------------
// * useMemo m dependencie pass krte h jiske bases pr useMemo call hota h or ek memoized value return jise
//   component m khi show krva skte h(passes the dependency inside the useMemo on the basis of which the
//   useMemo is called and returns a memoized value which we can show in component)
// * isse application ki performance better hoti h kyoki ye unneccesery code ko render nhi krta(This
//   improves the performance of the application because it does not render the unneccesery code)


//                                    --------------  QUSEID  --------------
// * ye hook ek unique id generate krta h jise html element(label,input) m pass krte h(it returns a unique id
//   that we pass in html element)


//                            --------------  QD.USEMEMO&USEUSEEFFECT  --------------
// * useMemo - ye dependencie ke bases pr sepecific code ko render krta h(It renders code based on
//   dependencies)
// * useEffect - ye dependencie ke bases pr pure component ko render krta h(it renders compelete component
//   based on dependencie)


//                                --------------  QPROPDRILLING  --------------
// * ye ek process hota h jisme data kei component ke through pass krte h(It is a process in which the
//   components of data pass through)
// * isme jis component ko data ki need nhi hoti usme bhi data pass hota h(In this, the data is passed even
//   in the component which does not need the data)
// * prop drilling ko avoid krne ke liye contextapi ka use krte h(use contextapi for avoid prop drilling)


//                                 --------------  QCONTEXTAPI  --------------
// * propdrilling ki problem ko resolve krne ke liye contextapi ka use krte h(Using contextapi to resolve
//   propdrilling problems)
// * isse direct kisi bhi chlid component m data ya function pass kr skte h(we can pass data and function
//   to any child component with help of contextapi)
// * react se createContext function ko import krke createContext se context create krte h(import
//   createContext function from react and create context with help of createContext)
// * context state/data ko hold/store rkhta h(data stored in context)
// * child component ko provider m wrapped rkhte h or provider ke value attribute ke throw data child
//   component m pass krte h(The child component should be wrapped with the provider and we can pass value
//   to the child component with help of value attribute of provider)
// * child component m context ko use krne ke liye useContext ka use krte h(to use the context in the child
//   component, use the useContext)


//                               --------------  QLIFECYCLEMETHOD  --------------
// * ye special methods hote h jinhe component ki life ke different stages pr call kiya jata h(these are special
//   methods that are called at different stages of the component's life)
// * lifecycle method ka use class component m hota h(lifecycle method is used in class component)
// * ek component ki lifecycle ki 3 stage hoti h - mounting, updating, unmounting
// * mounting - the phase when a component is created and inserted into the dom
// * updating - the phase when the component's state or props change, leading to re-render
// * unmounting - the phase when a component is removed from the dom
// * constructor - initializes the component and sets up state
// * render - returns jsx in mounting phase, renders the updated jsx in updating phase
// * componentDidMount - invoked after the component is inserted into the DOM. Commonly used for initializing
//   API calls
// * shouldComponentUpdate - determine krta h ki component re-render hona chahiye ya nahi(determines whether 
//   the component should re-render)
// * componentDidUpdate - useful for performing side effects after updates
// * componentWillUnmount -  invoked before the component is removed from the DOM


//                                 --------------  QPROPS  --------------
// * props se parent to child component m data pass krte(we can pass data from parent to child with help of
//   props)
// * props immutable hote h(props are immutable)
// * props ko child component m as a parameter access krte h(we access props as a parameter)
// * class component m this.props or functional component m direct props access krte h(we get props from 
//   this.props in class component and direct props in functional component)


//                                 --------------  QSTATE  --------------
// * state m component ka data store krte h(we store data in state)
// * state component ke andr manage ki jati h(state is managed inside the component)
// * state mutable hota h(state are mutable)
// * state update hone pr component re-render hota h(Component re-renders when state is updated)
// * class component m constructor m state define krte h(we can defined state in constructor in class
//   component)
// * class component m this.state se or functional component m useState hook se state access krte h(we can get
//   state from this.state in class component and useState hook in functional component)


//                                 --------------  QIMMUTABLE  --------------
// * jiski ki value change nhi kr skte h(we can not change value of immutable)


//                                 --------------  QMUTABLE  --------------
// * jiski ki value change kr skte h(we can change value of mutable)


// * react application m data ka flow parent to child component m hota h(data flow is parent component to
//   child component in react application)


//                                   --------------  QJSX  --------------
// * jsx stands for javascript xml/javascript extension
// * jsx js ke liye syntax extension h jiska use reactjs m krte h(jsx is a syntax extension for js which is 
//   used in reactjs)
// * jsx se react application likhna easy hota h(it easy to write react application with help of jsx)
// * ye html ki tarah dikhti h isme html or js ko sath m likh skte h(it look like html and we can write html
//   with js)
// * isme js likhne ke liye {} use krte h(use {} for using js)
// * jsx rules - 1. sbhi elements ko parent div ya fragment m wrapped krte h(close all element in parent div
//      or fragment)
//   2. sabhi tags ko close krte h(close all tags)
//   3. attributes m camelCase ka use krte h jese class, for attribute ki jagah className, htmlFor attribute ka
//      use krte h(we use camelCase in attributes, like instead of class, for attribute we use className and 
//      htmlFor attribute)
//   4. anchor tag ki jagah Link tag ka use krte h(use Link tag instead of anchor tag)


//                                --------------  QNOTIFICATION  --------------
// * notification alert ki tarah hota h ise popup ki tarah show krte h(Notification is like an alert, it is
//   shown like a popup)
// * isse situation ke base pr user ko information show krte h jese kuch update krne pr ya register krne pr(
//   With this, information is shown to the user on the basis of the situation, such as updating or
//   registering something)
// * react-toastify ek package h jisse decorated notification show krte h(react-toastify is a package that
//   shows decorated notifications)
// * react-toastify package install krke isme se ToastContainer or toast import krte h or phir iski css bhi
//   import krte h phir ToastContainer ko call krte h or toast call krne pr notification show hota h(Install
//   toast package and import toastcontainer and toast from it and then import its css too then call the
//   ToastContainer and the notification is shown when the toast is called)


//                                    --------------  QJWT  --------------
// * json web token ka use user verification ke liye krte h(jwt is used for user verification)
// * jwt header,payload,signature se milkr banta h(jwt made from header,payload,signature)
// * header do part se bnta h - type of token or algorithem(header made by two parts - type and algorithem)
// * payload data se banta h(payload made by data)
// * signature secret key se banta h(signature made by secret key)
// * api ko secure karne ke liye jwt ka use karte h(we use jwt for secure api)
// * successful login karne pr hm backend m sign function se token create karte h or phir as a response
//   token ko frontend m pass karte h(On successful login we create token from sign function in backend and
//   then pass the token as a response in frontend)
// * sign function m payload, secret key, expiry time(optional), callback funtion lete h
// * token milne pr token ko string format m cookie m store karte h(On receipt of token we store the token
//   in cookie in string format)
// * headers m token ko backend m pass krke middleware function m verify function se token ko verify krte h(
//   By passing the token in the backend in the headers, the token is verify with verify function in the
//   middleware function)
// * token verify hone ke bad hi backend ki code run hoti h(backend code is run only after token is verified)
// * server token se user ko identify(authenticate) karta h(server identifies the user with the token)


//                                    --------------  QREDUX  --------------
// * redux is a tool for manage application's state
// * useDispatch - react-redux se useDispatch hook ko import krte h ye dispatch method return krta h(we
//   import useDispatch hook from react-redux this hook returns dispatch method)
// * dispatch - is method se action ko trigger krte h(dispatch method triggers action)
// * useSelector - ye ek react-redux hook h jisse hm component m redux store ke data ko access krte h(it is a
//   react-redux hook which we use for access data from redux store)
// * store - ek react application m ek hi redux store create krte h jo application ki state ko hold rkhta h(
//   we create a single store in a single react application which holds application state)
// * createStore -  ise redux se import krte h store create krne ke liye. isme rootReducer or initial data
//   pass krte h(we import this from redux for create store. we pass rootReducer and initial data in this)
// * Provider - isse puri application m data pass krte h(By this we pass data throughout the application)
// * action creator - ye ek function hota h jo ki action object create krta h or return krta h(An action
//   creator is a function that creates and returns an action object)
// * action - ye ek plain javaScript object hota h jisme type or payload lete h
// * reducer - ye ase function hote h jo current state or action lete h or new state return krte h. isme
//   action perform krne ki functionality krte h(Reducers are functions that take the current state and an
//   action as arguments, and return a new state. we create the functionality to perform action in reducer)
// * root reducer - is file m sabhi reducer ko merge krte h(we merge all reducers in this file)
// * combineReducers - ise redux se import krte h isme ek object pass krte h jisme key or value pass krte h
//   1. key - reducer se return ki gyi value 2.value - reducer function(we import it from redux and pass an
//   object in which pass the key and value 1. key - it is return value from reducer 2. - reducer function)
// * component m dispatch se action ko call krte h. data component se action phir reducer m pass hota h. 
//   reducer m data update hota h. phir useSelector ki help se data ko component m access krte h(we call the
//   action from dispatch in the component then data pass in action from component then in reducer then data
//   is updated in the reducer then we can access data using useSelector)


//                                     --------------  QAPI  --------------
// * application programing interface
// * isse frontend ko backend se connect krke data pass krte h(Through this, we connect the frontend to the
//   backend and pass data)
// * fetch javascript ka in-built method h jisse api ko call krte h(fetch is a in-built method of JavaScript
//   which we use for call a api)
// * fetch method m as a argument url pass krte h. phir ye ek promise return krta h(In the fetch method we
//   pass the url as a argument. Then it returns a promise)
// * api se aye response object ko json method se json format m convert krte h jo ek promise m return hota h(
//   we can get our output as a json format by using the json method which we get in promise)
// * headers m data ka type define krte h(we define type of data in header)
// * header metadata hota h request or response ka(header is a metadata of request and response)
// * body m stringify data ko backend m pass krte h(we pass stringify data in body to backend)
// * type of request method - GET, POST, PUT, DELETE
// * GET method ka use data fetch karne ke liye krte h(we use get method for fetch data)
// * POST method ka use data insert karne ke liye krte h(POST method is used to insert data)
// * PUT method ka use data ko update karne ke liye krte h(PUT method is used to update data)
// * DELETE method ka use data delete krne ke liye krte h(we use delete method for delete data)
// * get,post,put,delete se data fetch ya delete kr skte h bs frontend or backend m method same hona chahiye
//   vrna console m error show hoti h(we can fetch and delete data with help of get,post,put and delete
//   method but method must same in frontend and backend otherwise its show error in console)
// * post,put,delete se data insert ya update kr skte h bs frontend or backend m method same hona chahiye
//   vrna console m error show hoti h(we can insert and update data with help of post,put and delete
//   method but method must same in frontend and backend otherwise its show error in console)


//                                   --------------  QJSON  --------------
// * JavaScript Object Notation
// * json ek data ka format hota h jo ki javascript object ki tarah hota h(json is a format of data which
//   look like javacript object)
// * isme data key value ke format m hota h jisme key ko double qoutes m likhte h(json data is written as
//   key/value pairs and key is in double qoutes)
// * json m number,string,boolean,array,object,null datatype allow hota h(json allows number,string,boolean,
//   array,object,null datatype)
// * json is lightweight
// * JSON.stringify() - is method se value/object ko JSON string me convert krte h(by this method we can
//   convert a value/object into JSON string)
// * data ko json string m convert krke backend/server m pass krte h(we convert data into json string and 
//   pass it to the server/backend)
// * JSON.parse() - is method se value ko javascript object m convert karte h(by this method we can convert a
//   value into javascript object)


//                                 --------------  QSTATUSCODE  --------------
// * response status code - ye client ke dvara kri gyi request ke result ko indicate/show krta h(it shows the
//   results of requests made by the client)
// * 2xx - success, 4xx - client error, 5xx - server error
// * 200(ok) - jab client dvara ki gyi request ka response mil jata h for example jab data fetch ho jata h(
//   when we get response which made by client request for example when we get data)
// * 201(created) - data insert hone pr(when data is inserted)
// * 400(bad request) - galat request dene pr(when user give wrong request)
// * 401(unauthorized) - jab client unauthorized ho(when the client is unauthorized)
// * 403(forbidden) - client authorized ho pr specific resource ko access krne ki permission na ho(the client
//   is authorized but does not have permission to access specific resource)
// * 404(not found) - request ke badle koi response na ho(when we dont have any response against request)
// * 500(internal server error) - server m error ki vajah se response nhi milta(no response due to server
//   error)


//                                --------------  QREACTFEATURES  --------------
// * jsx,virtual dom concept,components,high performance
// * high performance - react sabhi components ko update krne ke bjae sirf unhi component ko update krta h
//   jinme kuch change hua ho. isse react application fast hoti h(Instead of updating all components, React
//   updates only those components in which something has changed. This makes react applications faster)


//                                   --------------  QBABEL  --------------
// * babel is a javascript compiler
// * babel jsx ko convert krta h jisse browser code ko read kr sake(babel converts jsx so that browser can
//   read the code)


//                                --------------  QREACTROUTERDOM  --------------
// * ye ek npm package h jisse react application m routing krte h(This is a npm package through which we can
//   do routing in react application)
// * isse single page web application create krte h jisme ek page se dusre page pr navigate krne se
//   application refresh nhi hoti h(With this, a single page web application is created in which the
//   application is not refreshed by navigating from one page to another)
// * isse application ki performance better hoti h(This improves the performance of the application)
// * BrowserRouter - ye parent component hota h isme sabhi component ko stack karte h(it is a parent
//   component. We stack all the components in this)
// * Routes - isme sabhi route component ko stack karte h(we stack all the route components in this)
// * Route - isme path or component define karte h(we define path and component in this)
// * route m ek specific url par ek specific component ko render karte h(we renders a specific component at a
//   specific URL in the route)
// * ager user non-exist url ko hit kare to ham page not found ka component render karte h jiske liye route
//   ke path m * value pass krte h(if user hits non-exists url then we render page not found component for
//   which we pass * value in path of route)
// * Link - is component ka use ek page se dusre page pr navigate karne ke liye karte h(this component is
//   used to navigate from one page to another)
// * NavLink - is component se ham jis bhi page pr hote h us NavLink component m ek active name ki class add
//   ho jati h or us active class ko target karke ham specific style apply kr sakte h(From this component,
//   whatever page we are on, an active name class is added to our NavLink component or we can apply
//   specific style by targeting our active class)
// * user jis bhi page pr hota h uske NavLink component m styling apply ho jati h jisse user links ko dekh kr
//   jan sakta h ki vo konse page pr h(Whatever page the user is on, styling is applied to its Navlink
//   component so that the user can look at the links and know which page he is on)


//                                --------------  QCREATEREACTAPP  --------------
// * 1. nodeJS install krte h kyuki react library install krne ke liye npm ki jarurat hoti h(Install NodeJS
//   on the computer because we need npm to install the React library)
// * 2. terminal m npx create-react-app projectname commmand run krte h(create-react-app is a package)


//                                --------------  QLAZYLOADING  --------------
// * lazy loading technique h jiski help se react application ki performance better krte h(lazy loading is a
//   technique that helps to improve the performance of react application)
// * lazy loading m component ko tabhi load kiya jata h jb load krne ki requirment ho(in lazy loading, the
//   component is loaded only when there is a need to load it)
// * lazy loading initial load time ko reduce krta h(lazy loading reduces the initial load time)
// * lazy - ye ek built-in function hota h jisme lazy component ko import krte h(this is a built-in function
//   in which we import lazy component)
// * suspense - ye ek component hota h jisme fallback attribute hota h(this is a component that has a fallback
//   attribute)
// * fallback - loader show karta h(the loader shows)









//                                   --------------  QNODEJS  --------------
// * nodejs is a js runtime enviroment jisme js ko server pr run krte h(node.js is a js runtime enviroment by
//   which we run js in server)
// * node.js m chrome ka v8 engine use hota h(Chrome's V8 JavaScript engine used in node.js)
// * node.js ka use application ke backend part ko develop krne m kiya jata h(node.js use for develop backend
//   part of web application)
// * node.js single threaded hota h(node.js is a single threaded)


//                               --------------  QNODEJSADVANTAGE  --------------
// * non-blocking or event-driven arcitecture ki vajah se nodejs ki performance better h(nodejs has better 
//   performance due to its non-blocking and event-driven architecture)
// * nodejs m javascript language hoti h jo frontend ke liye bhi use hoti h(nodejs has javascript language 
//   which is also used for frontend)
// * nodejs m bhot se external packages available hote h(there are many external packages available in nodejs)
// * nodejs ki ek large community h jo resources provide krti h(nodejs has a large community that provides 
//   resources)
// * nodejs real-time applications build krne ke liye capable h(nodejs is capable of building real-time 
//   applications)
// * nodejs horizontal or vertical scaling ko support krta h(nodejs supports horizontal and vertical scaling)
// * nodejs m chrome ka v8 engine use hota h jiski performance better h(nodejs uses chrome's v8 engine which 
//   has good performance)
// * nodejs windows, macOS, linux pr run kr skta h(nodejs can run on Windows, macOS, Linux)


//                                   --------------  QSERVER  --------------
// * nodejs m server ek program hota h jo ki client ki request ko handle krta h or data ko process krke
//   response send karta h(in nodejs the server is a program that handles the client's request and processes
//   the data and sends the response)


//                                   --------------  QV8ENGINE  --------------
// * ye ek javascript engine hota h jo google chrome m bhi use hota h(it is a javascript engine that is also
//   used in google chrome)
// * ye javascript code ko machine language m compile krta h(it compiles JavaScript code into machine language)


//                                    --------------  QNPM  --------------
// * node package manager node.js ke liye ek package manager h (npm is a package manager for node.js)
// * npm project ki dependencies ko download, update or manage krta h(npm downloads, update and manage the
//   dependecie of project)
// * npm install command - un sabhi packages ko install karta h jo as a dependencies package.json file m show
//   hote h(its install all packeges who show in package.json file as a dependencies)
// * npm install package_name - ek specific package ko install karta h(its install a specific package)
// * npm update command - sabhi packages ko unke newer version m update krta h(its update all packages to their
//   latest versions)
// * npm update package_name - ek specific package ko update karta h(its update a specific package)
// * npm install package_name@version - ek specific version ke package ko install karta h(Installs a specific
//   version of a package)


//                                --------------  QRUNTIMEENVIRONMENT  --------------
// * runtime enviroment ek enviroment hota h jisme js ko web browser ke bhar execute kiya jata h(runtime 
//   environment is the environment in which JS is executed outside the web browser)
// * js program ko run krne ke liye is enviroment m sabhi tools, libreries or baki infrastrucure hote h(this 
//   environment contains all the tools, libraries, and other infrastructure needed to run a js program)


//                                 --------------  QDEPENDENCIES  --------------
// * dependencies external package hote h jinki need project ke production m hoti h(dependencies are external
//   packages that it needs in the production of the project)
// * dependencies npm ke through manage hoti h(dependencies manage by npm)


//                                 --------------  QDEVDEPENDENCIES  --------------
// * devdependencies package hote h jinka use development or testing m hota h(DevDependencies are packages that
//   it needs during development and testing)


//                                    --------------  QPACKAGE  --------------
// * package ek folder tree hota h jisme package.json file or or bhi kae files, folders hote h(A package is a
//   folder tree containing the package.json file and several other files and folders)
// * package ko npm ke thorugh install krte h(we can installs the package through npm)


//                                 --------------  QPACKAGE.JSON  --------------
// * ye configuration file hoti h jisme project ki information hoti h jese project name, version, description,
//   dependencies, scripts(it is a configuration file that contains information about the project like project's
//   name, version, description, dependencies, scripts)
// * script - ye custom command ko defined karti h(This defines a custom command)
// * custom command ko execute krne ke liye npm run script_name enter karte h(To execute the custom command,
//   enter npm run script_name)


// * node ke project ko create krne ke liye npm init(initializer) command run krte h(for create node project 
//   we run npm init command)
// * npm init -y - node ke project ko create krne ke liye with auto detail of project like name, version,
//   description etc..(for create node project with auto detail of project like name, version, etc..)
// * npm init command se package.json file create hoti h(we create package.json file with npm init command)


// * node ki js m browser ki js ke kuch features nhi hote jese dom etc..(Node's js does not have some of the
//   features that a browser's js has, such as dom etc..)
// * browser ki js m node ki js ke kuch features nhi hote jese file handling etc..(browser's js does not have
//   some of the features that a node's js has, such as file handling etc..)
// * node m js file ko run krne ke liye node filename command run krte h(for run js file in node run command
//   - node filename)


// * file location m ./ same directory ko or ../ kisi folder se bhar akar same directory ko represent krta h
//   (in file location ./ same directory and ../ represent same directory outside of folder)


//                                   --------------  QREQUIRE  --------------
// * ye ek built-in function hota h jiska use module, file ko include/import krne ke liye krte h(it is a
//   built-in function that is used to include/import the module, file)
// * is function ke andr as string module ka name, module/file ka path diya jata h(inside this function the
//   model name, path of the model/file is passed as a string)
// * ye synchronous hota h jo current module ko load hone tak file ko execute nahi karta h(it is synchronous it
//   does not execute the file until the current model is loaded)


// * module.exports/exports se variables, functions, objects etc ko dusri file m use krne ke liye expose krte h
//   (expose variables, functions, objects etc for use in other files with the help of model.exports/exports)


//                            --------------  QMODULERPROGRAMMING  --------------
// * badi application ko kae modules m divide krke create kiya jata h(Large applications are built by splitting
//   them into multiple models)


//                                   --------------  QMODULE  --------------
// * modules reusable code ya file hote h(modules are reusable code or file)
// * module package ka part ho sakte h(a module can be part of a package)
// * type of module - 1. core module 2. local module 3. third-party module
//   1. ye built-in modules hote h jo nodejs ke sath aate h jese fs, http etc(these are built-in modules that
//      come with Node.js like fs, http etc)
//   2. in modules ko khudse create kiya jata h(these models are made by overselves)
//   3. inhe alag se install krte h(we install them separately)


//                                  --------------  QFSMODULE  --------------
// * ye ek built-in module hota h jisse node.js m file system se interact kr skte h(it is a built-in module  
//   which we use to interact with file system in node.js)
// * isse file write, read, update, delete etc.. kr skte h(it allow you to write, read, update, delete etc..
//   file)
// * isse file system ki information get kr skte h(it allow you to get information of file system)


//                                 --------------  QHTTPMODULE  --------------
// * ye ek built-in module hota h jisse node.js m data ko http(hyper text transfer protocole) pr transfer kr
//   skte h(it is a built-in module which we use for transfer data over http)
// * is module se server create krte h(create server from this module)


//                                --------------  QMODULESYSTEMS  --------------
// * 1. CJS/CommonJS 2. ES Modules/ECMAScript Modules
// * 1. ye purana module system h module ko import or export krne ka(it is a old module system for import and
//      export modules)
// *    isme module ko require se import or module.exports/exports se export kiya jata h(in this the model is
//      imported from require and exported from module.exports/exports)
// *    isme module synchronous load hota h(it loads module synchronously)
// * 2. ye module system js ke es6 version m introduce hua h(this module system is introduced in es6 version of
//      js)
// *    isme module ko import se import or exports se export kiya jata h(in this the model is imported from
//      require and exported from export)
// *    isme module asynchronous load hota h(it loads module asynchronously)


//                                --------------  QNODEJSARCHITECTURE  --------------
// * sbse phle client frontend pe request krta h jo request nodejs m event queue m store hoti h fir nodejs m 
//   event loop hota h jo un request ko accept krke check krta h ki request blocking/syncronus h ya
//   non-blocking agr request non-blocking hoti h to event loop us request ko aage process kr deta h pr agr 
//   request blocking hoti h to us request ko thread pool m forword kiya jata h thread pool m threads hote h
//   jo blocking request ko process krte h(the client makes a request to the frontend the request is stored
//   in the event queue in nodejs, then nodejs has an event loop which accepts the request and checks whether
//   the request is blocking or non-blocking, if the request is non-blocking then the event loop processes the
//   request further and if the request is blocking then the event loop forwards the request to the thread pool
//   which contains threads that process blocking requests)
// * nodejs event driven or non-blocking i/o model pr work krta h(nodejs works on an event driven and non 
//   blocking i/o model)


// * non-blocking i/o operations ek asyncrounus operation hota h(non-blocking i/o operations are an 
//   asynchronous operation)


//                                 --------------  QEVENTDRIVEN  --------------
// * event driven ek core principal h jisme event loop hota h jo non-blocking request ko handle krta h(event 
//   driven is a core principle with an event loop that handles non blocking requests)


//                                   --------------  QEVENTLOOP  --------------
// * event loop nodejs m core concept h jo asynchronous operations ko handle krta h(the event loop is a core
//   concept in nodejs that handles asynchronous operations)
// * event loop continuesly event queue ko check krta h or tasks ko sequently execute krta rhta h(the event
//   loop continuously checks event queue and executes tasks sequentially)


//                                    --------------  QBLOCKING  --------------
// * blocking operation m current task complete hone ke baad hi aage ki code execute hoti h(in blocking
//   operation, further code is executed only after the current task is completed)


//                                  --------------  QNONBLOCKING  --------------
// * non-blocking operation m current task ke complete hone ka wait nahi hota or aage ki code execute ho jati h
//   (in non-blocking operation, there is no wait for the current task to complete and further code gets 
//   executed)
// * non-blocking operation m async/await, promise, callback ka use kiya jata h(async/await, promise, callback
//   are used in non-blocking operations)


//                                   --------------  QSYNCHRONOUS  --------------
// * isme sbhi operations ek ke baad ek execute hote h ek operation complete hone ke baad hi dusra operation
//   start hota h(in this all the operations are executed one after the other and the next operation starts 
//   only after the completion of the first operation)


//                                  --------------  QASYNCHRONOUS  --------------
// * isme operation independaly perform hote h mtlb iske baad ka operation pahle wale operation ke compelete
//   hone ka wait nahi karta or execute ho jata h(in this the operations are performed independently, meaning
//   the subsequent operation does not wait for the completion of the previous operation and gets executed)
// * asynchronous operation m async/await, promise, callback ka use kiya jata h(async/await, promise, callback
//   are used in asynchronous operations)


//                                      --------------  QURL  --------------
// * uniform resource locator internet pr deploy resource ka ek unique address hota h(url is a unique address
//   of a deployed resource on the Internet)
// * https://www.websitename.com/home/class?id1=p1&id2=p2(protocol/hostname/path?queryparameters)
// * http - hypertext transfer protocol
// * https - hypertext transfer protocol secure
// * www.websitename.com - domain name
// * /home - path
// * /home/class - nested path
// * ?id=p1 - query parameters
// * protocol - protocol set of rules hote h jo specifie krta h ki browser or server ke bich kese communicate 
//   krna h(protocol is a set of rules which specifie how to communicate between browser and server)
//   between browser and server
// * domain - user friendly name of ip address
// * query parameters - ye key-value ke pair m additional information hoti h jise hm url m add krte h(this is 
//   additional information in key-value pair that we add to the url)


//                                  --------------  QHTTPMETHODS  --------------
// * ye request ke types hote h jo resources pr kya action perform krna h use indicate krte h(These are types
//   of requests that indicate what action is to be performed on the resources)
// * types of http methods - GET, POST, PUT, DELETE, PATCH
// * GET - for fetch data from the server
// * POST - for create data to the server
// * PUT - for update an exsisting data on the server
// * DELETE - for remove data from the server
// * PATCH - for partial update


//                                  --------------  QHTTPHEADER  --------------
// * http header key-value pairs hote h jo ki additional information provide krte h jese transfer kiye jana
//   vale content ka type, authentication detail(HTTP headers are key-value pairs that provide additional 
//   information such as the type of content to be transferred, authentication details, etc.)


//                                   --------------  QEXPRESS  --------------
// * express nodejs ka framework h jo nodejs application ko develop krne ke liye features ka set provide krta h
//   (express is a framework of nodejs that provides set of features to develop nodejs applications)
// * express nodejs application ko build krne ke process ko easy krta h(express makes the process of building
//   nodejs applications easy)
// * express http request response ko handle krne ko easy bnata h(express makes it easy to handle http request
//   responses)


//                              --------------  QMIDDLEWAREFUNCTION  --------------
// * ye ek function hota h jiske pass request object, response object, next middleware function ka access hota
//   h(it is a function that has access to the request object, response object, next middleware function)
// * is function m req, res, next parameter hote h(this function has req, res, next parameters)
// * next() - ye ek function hota h jo request ko age forward krta h(this is a function that forwards the 
//   request)
// * agr next function call na ho to request-response cycle end ho jati h(the request-response cycle ends if 
//   the next function is not called)
// * request phle middleware function m aati h phir middleware function m condition dete h jiske bases pr
//   request-response cycle ko continue ya end kiya jata h(the request first comes to the middleware function
//   and then a condition is given to the middleware function on the basis of which the request-response cycle
//   is continue or end)
// * authentication m iska use krte h(we use it in authentication)


// * type of middleware - application-level middleware, router-level middleware, error-handling middleware,
//   built-in middleware, third-party middleware, custom middleware
//   application-level middleware - app.use() ka use krke in middlewares ko puri application pr apply krt h jo 
//   hr request pr call hote h()
//   router-level middleware - ye middlewares certain route pr apply hote h or un certain route pr request 
//   ane pr call hote h()
//   error-handling middleware - application m error ko handle krne ke liye in middleware ka use krte h()
//   built-in middleware - express.json(), express.urlencoded(), express.static() express provide these 
//   middleware
//   third-party middleware - corse this middleware provided by third party
//   custom middleware - these middleware functions are defined for specific tasks


//                                --------------  QMVCPATTERN  --------------
// * model view controller ek pattern hota h jisse ham nodejs ki code ko organize tarike se rakhte h(model 
//   view controller is a pattern through which we keep the code of nodejs in an organized manner)
// * isse applicaton ko read or maintain krna easy hota h(this makes applications easier to read and maintain)


//                                   --------------  QSSR  --------------
// * server side rendering ek web development technique hoti h jisme html page ko server pr generate krke
//   browser pr send krte h(server side rendering is a web development technique in which HTML pages are 
//   generated on the server and sent to the browser)


//                                   --------------  QEJS  --------------
// * embedded javascript ek template engine hota h(embedded javascript is a template engine)
// * isse server pr html ko generate krte h(this generates HTML on the server)
// * isse html m js ko add kr skte h(with this you can add js to html)


//                                --------------  QAUTHNETICATION  --------------
// * authentication ek process hota h jisme user ki identify ko verify karte h(authentication is a process
//   in which verify user's identity)


//                             --------------  QAUTHNETICATIONPATTERNS  --------------
// * statefull, stateless
// * statefull - is authentication method m server pr session maintain kiya jata h or browser m cookie m
//   session id ko store kiya jata h jise authentication ke liye use kiya jata h is method ko session-based
//   authentication bhi kahte h(in this authentication method, the session is maintained on the server and the
//   session ID is stored in a cookie in the browser which is used for authentication. This method is also 
//   called session-based authentication)
// * stateless - is authentication method m server pr koi session maintain nahi kiya jata isme user ko
//   authenticate krne ke liye token ka use kiya jata h is method ko token-based authentication bhi kahte h(In
//   this authentication method, no session is maintained on the server. In this, token is used to authenticate
//   the user. This method is also called token-based authentication)


//                                --------------  QAUTHORIZATION  --------------
// * authorization user ki identity ya role ke bases pr user ke liye resources, actions, services access ya
//   denying krne ka ek process hota h(authorizations are the process of granting or accessing resources, 
//   actions, or services to a user based on the user's identity or role)
// * isme sirf permission vale user hi resources ko access ya kuch specific action ko perform kr skte h(In this,
//   only users with permission can access resources or perform some specific actions)


// * authorization se pahle authentication ke through user ki identity verify hoti h(User's identity is 
//   verified through authentication before authorization)
// * authentication m user ki identity verify krne ke baad authorization m user ko kon konse access h determine
//   krte h(after verifying the user's identity in authentication, authorization determines what access the 
//   user has)


//                                   --------------  QREPL  --------------
// * read-eval-print-loop ek environment h jaha hm javascript code ko write or execute kr skte h(the 
//   read-eval-print-loop is an environment where we can write and execute javascript code)
// * repl ka use code ko test, debugging, nodejs ke feature ko explore krne ke liye kiya jata h(repl is used 
//   for testing code, debugging, and exploring features of nodejs)
// * read - reads the input provided by the user
// * eval - evaluates the code
// * print - prints the result
// * loop - returns to read's step
// * REPL command - help, exit, clear, save, load
// * node - this command is to activate repl
// * .help - this command is to view all the commands of repl
// * .exit - this command is to exit from repl


//                                --------------  QCHILDPROCESS  --------------
// * child process ek separate process hota h jise child process module se create ya manage kiya ja sakta h(a
//   child process is a separate process that can be created or managed from the child process module)
// * child process ka use parallel m task perform krne ke liye krte h(child processes are used to perform tasks
//   in parallel)


//                                  --------------  QSTREAM  --------------
// * stream ek way h jisme data ko ek sath read ya write krne ke bjae chunks m handle kiya jata h(stream is a
//   way in which data is handled in chunks instead of reading or writing it at once)
// * stream ka use large amount of data process krne m kiya jata h(stream is used to process large amount of data)
// * stream asynchronously work krta h(stream works asynchronously)
// * stream buffer ka use as a temporary storage krte h(stream uses buffer as a temporary storage)
// * 4 type of streams - 1. readable stream 2. writable stream 3. duplex stream 4. transform stream
// 1. readable streams - fs.createReadStream - for file reading
// 2. writable streams - fs.createWriteStream - for file writing
// 3. duplex streams - for both reading and writing
// 4. transform streams - a type of duplex stream where the output is computed based on the input


//                                  --------------  QBUFFER  --------------
// * buffer binary data ke liye temporary storage area hote h(buffers are temporary storage areas for binary
//   data)
// * buffer ka use raw binary data ko handle krne m kiya jata h(buffers are used to handle raw binary data)
// * buffer se data ke chunk ko process krte h(chunks of data are processed using buffer)
// * buffer ki ek fix size hoti h jo dynamically change nhi hoti(buffers have a fixed size which does not 
//   change dynamically)
// * buffer nodejs m globally available hota h ise import krne ki need nhi hoti(buffers are globally available
//   in nodejs, hence there is no need to import them)
// * buffer.alloc() - it creates a buffer and allocates size to it
// * buffer.write() - it writes the data on buffer
// * buffer.toString() - it read data from the buffer and returned it
// * buffer.length - it returns the size of the buffer in bytes


//                             --------------  QREACTORPATTERN  --------------
// * ye ek design pattern hota h jiska use i/o operations ko handle krne ke liye krte h(it is a design pattern
//   that is used to handle I/O operations)


//                                --------------  QEVENTS  --------------
// * events ek built-in module hota h jiske through hm eventEmitter class ko create krte h()


//                             --------------  QEVENTEMITTER  --------------
// * event emitter ek class hoti h jisse events ko emit/generate kiya jata h()
// * .emit() - use this method for emit a event
// * .on() - use this method for attach listener on event
// * .off() - use this method for detach listener on event
// * .once() - use this method for attach listener on single execution of the event


//                               --------------  QCLUSTER  --------------
// * cluster ek built-in module hota h jisse nodejs application m multiple instances/child process run krte h
//   (cluster is a built-in module that runs multiple instances/child processes in a nodejs application)
// * cluster ki help se application pr workload km hota h(with the help of cluster, the workload on the 
//   application is reduced)
// * cluster m master process child process/worker ko manage krta h(in a cluster, the master process manages the
//   child process/worker)
// * .fork() - using this method we create child process/worker
// * each child process/worker nodejs ke instance ko run krta h(each child process/worker runs an instance of 
//   nodejs)
// * child process/workers same hi port share krte h pr request ko independly handle kr skte h(the child 
//   process/workers share the same port but can handle requests independently)
// * hr ek worker ek alg core pr chlta h(each worker runs on a different core)
// * worker crash hone pr master process new worker create krta h(in case of a worker crash, the master process
//   creates a new worker)


//                              --------------  QWORKERTHREADS  --------------
// * worker threads module hota h jisse multi-threading kr skte h(worker threads are a model that allows multi
//   threading)
// * worker threads se main thread ke parallel javscript code ko run krne ke liye multi thread create krte h
//   (worker threads create multiple threads to run javascript code in parallel with main threads)


// * nodejs by-defualt single threaded hota h kyuki ye event-driven or non-blocking i/o model ka use krta h
//   (nodejs is single-threaded by default as it uses an event-driven and non-blocking i/o model)
// * nodejs m multi threaded operation ke liye worker thread, child process, cluster ka use krte h(nodejs uses
//   worker threads, child processes, clusters for multi-threaded operations)


//                              --------------  QERRORHANDLING  --------------
// * error handle krne ke liye try catch block, error handling middleware, promises ka use krte h(to handle 
//   errors we use try catch blocks, error handling middleware, promises)


//                            --------------  QERRORFIRSTCALLBACK  --------------
// * error first callback ek design pattern hota h jiska use asynchrouns operation ko handle krne ke liye kiya
//   jata h(error First callback is a design pattern used to handle asynchronous operations)
// * error first callback m callback ka pahla argument ek error object hota h(in error first callback the first
//   argument of the callback is an error object)
// * error first callback m callback ke baki argument result hote h(in the error first callback the remaining
//   arguments of the callback are the result)
// * error first callback m asynchronous operation succesfull hone pr error object ki value null ya undefind 
//   hoti h or fail hone pr error object m error ki detail hoti h(if the asynchronous operation in the first 
//   callback succeeds then the value of the error object is null or undefined and if the asynchronous
//   operation fails then the value of the error object is error)


//                                 --------------  QCORS  --------------
// * cors stands for cross origin resource sharing
// * cors ek mechanism h jo ye specify krta h ki konsa domain server ke resources ko access kr skta h(CORS is a
//   mechanism that specifies which domains can access the server's resources)
// * nodejs m cors ka use cross origin request ko handle krne ke liye kiya jata h(in nodejs cors is used to 
//   handle cross origin requests)
// * browser m same-origin policy lagu hoti h jisse ek domain pr running web application dusre domain pr 
//   request nhi kr skti jbtk server pr cors ka use krke origin ko allow na kiya jae(the same-origin policy is
//   applied in the browser so that a web application running on one domain cannot request another domain while
//   the origin is not allowed by using the cors on the server)


//                                 --------------  QTHREAD  --------------
// * thread kisi process ke andr execution ki unit hoti h(a thread is a unit of execution within a process)
// * thread ko operating system dwara execute kiya jata h(threads are executed by the operating system)









//                                --------------  QMONGODB  --------------
// * mongodb ek document database management system h (mongodb is a document database management system)
// * iska use large amount of data ko store krne m krte h (it is used for store large amount of data)
// * ye non-relational/nosql based h (it is non-ralational/nosql based)
// * isme data bson document m store hota h(in this data store in form of bson document)


//                             --------------  QMONGODBFEATURES  --------------
// * mongodb allows dynamic data structure
// * schema less data structure which means one collection can hold diffrent type of document
// * high performance because run operations fastly
// * horizontal scalibility with help of sharding
// * support multiple storage enigne


//                             --------------  QHOWMONGODBWORKS  --------------
// * user frontend pr request krta h tb query frontend se backend or backend se mongodb server pr pass hoti h
//   phir mongodb server query ko storage engine m pass krta h jaha data ko read or write kiya jata h phir data
//   database m store hota h(When the user makes a request on the frontend, the query goes from the frontend to 
//   the backend and then from the backend to the MongoDB server Then mongodb server passes the query to the 
//   storage engine where the data is read and write then data store in database)


//                                --------------  QDATABASE  --------------
// * database data ka collection hota h(database is a collection of data)
// * two type of database - 1. relational database(sql) 2. non-relational database(nosql)


//                              --------------  QSQLDATABASE  --------------
// * isme data table ki form m store hota h(in this, data is stored in the form of table)


//                             --------------  QNOSLQDATABASE  --------------
// * isme data document ki form m store hota h jise document database bhi khte h(in this, data is stored in the
//   form of document which is also called document database)


//                           --------------  QSCHEMALESSDATABASE  --------------
// * mongodb ek schemaless database h(mongodb is a schemaless database)
// * mongodb m pre-defined schema ki require nahi hoti(mongodb does not require a pre-defined schema)


//                              --------------  QCOLLECTION  --------------
// * collection relational database ki table ki tarah hote h(Collections are like tables in relational database)
// * documents ko collection m store kiya jata h(Documents are stored in collections)


//                       --------------  QEMBEDDEDDOCUMENT/QNESTEDDOCUMENT  --------------
// * document ke andr document ko embedded/nested document kahte h(Embedded/nested documents are those types of
//   documents which contain a document inside another document)


//                                --------------  QDOCUMENT  --------------
// * document record hota h jise ham collection m store karte h(document are record which we store in collection)
// * document m data feild value ke form m hota h(Data in the document is in the form of field values)
// * document json object ki tarah hote h(documents are similar to JSON objects)
// * same collection ke documents ka schema same hona jarurui nhi hota mtlb documents ke feild or un fields ke
//   data type diffrent ho skte h(It is not necessary for the documents in the same collection to have the same
//   schema, meaning the fields of the documents and the data types of those fields can be different)


//                                --------------  QSCHEMA  --------------
// * schema ek json object hota h jo data ke structure ko define krta h(schema is a json object that defines
//   structure of data)


//                              --------------  QD.JSON&BSON  --------------
// * json - javascript object notation is a human readable format of data
// * bson - it is a binary form of json


// * mongodb supports these datatype - string, number, boolean, null, date, array, object, objectId,
//   binary data


//                           --------------  QCOMPARISONOPERATOR  --------------
// * $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
// * $eq example -> db.collection_name.find({"field_name":{$eq:50}})
// * $ne example -> db.collection_name.find({"field_name":{$ne:50}})
// * $gt example -> db.collection_name.find({"field_name":{$gt:50}})
// * $gte example -> db.collection_name.find({"field_name":{$gte:50}})
// * $lt example -> db.collection_name.find({"field_name":{$lt:50}})
// * $lte example -> db.collection_name.find({"field_name":{$lte:50}})
// * $in example -> db.collection_name.find({"field_name":{$in:[50,60]}})
// * $nin example -> db.collection_name.find({"field_name":{$nin:[50,60]}})


//                            --------------  QLOGICALOPERATOR  --------------
// * $and, $or, $not, $nor
// * $and example -> db.collection_name.find({$and:[{"field_name":value},{"field_name":value}]})
// * $or example -> db.collection_name.find({$or:[{"field_name":value},{"field_name":value}]})
// * $nor example -> db.collection_name.find({$nor:[{"field_name":value},{"field_name":value}]}) -> dono
//   condition ko chodke baki bacha document return krega
// * $not example -> db.collection_name.find({"field_name":{$not:{$gt:value}}})
// * $not example -> db.collection_name.find({"field_name":{$ne:value}})


//                            --------------  QCURSORMETHOD  --------------
// * $count, $limit, $skip, $sort
// * $count example -> db.collection_name.find({"field_name":{$gt:50}}).count()
// * $limit example -> db.collection_name.find({"field_name":{$gt:50}}).limit(3)
// * $skip example -> db.collection_name.find({"field_name":{$gt:50}}).skip(2) -> skip 2 value from starting
// * $sort example -> db.collection_name.find({"field_name":{$gt:50}}).sort({"field_name":1}) -> ascending
// * $sort example -> db.collection_name.find({"field_name":{$gt:50}}).sort({"field_name":-1}) -> decending


//                               --------------  QCOMMANDS  --------------
// * show dbs -> for see all database
// * use db_name -> for select database and create database
// * db.dropDatabase() -> for drop database
// * show collections -> for see all collections
// * db.createCollection("collection_name") -> for create collection
// * db.collection_name.drop() -> for drop collection
// * db.collection_name.insertOne/db.collectiona_name.createIndex -> for insert one document in collection
// * db.collection_name.insertMany -> for insert many document in collection
// * db.collection_name.find() -> for fetch all documents in collection
// * db.collection_name.findOne() -> for fetch one document in collection
// * db.collection_name.find().limit() -> for fetch limited documents in collection
// * db.collection_name.find().count() -> for fetch number of documents in collection
// * db.collection_name.updateOne({_id:ObjectId('123')}, {$set: {'existing_field':'new_value'}}) -> for update
//   only one fields value and for add one field
// * db.collection_name.updateMany({age:25}, {$set: {'existing_field':'new_value'}}) -> for update many fields
//   value
// * db.collection_name.updateOne({age:25}, {$unset: {'field_name':1}}) -> for remove field 
// * db.collection_name.updateMany({age:25}, {$rename: {'old_field_name':'new_field_name'}}) -> for update many 
//   fields name
// * db.collection_name.deleteOne({_id:1}) -> for delete single document
// * db.collection_name.deleteMany({price:122}) -> for delete multiple document


//                               --------------  QINDEXES  --------------
// * indexes data structure hote h jo collection ke data set ke small portion ko store rkhte h jisse data ko
//   fastly access kiya ja skta h(indexes are data structures that store small portions of a collection of data
//   sets, allowing the data to be accessed quickly)
// * indexes m data ki copy contain hoti h(indexes contain copy of data)
// * without indexes mongodb har ek document ko scan karta h(without indexes mongodb scans every document)
// * ek collection m multiple indexes ho sakte h(multiple indexes can exist per collection)
// * indexes ki help se query fast perform hoti h(with help of indexes query perform fastly)


//                               --------------  QSHARDING  --------------
// * sharding large data set ko handle krne ke liye multiple machines m data destribute krne ka ek method h
//   (sharding is a method for distributing data across multiple machines to handle large data set)
// * sharding ek type ki horizontal scaling h(sharding is a type of horizontal scaling)
// * sharding se performance improve hoti h(sharding improves performance)

// sharded cluster - a collection of shard
// shard - shard ek mongodb instance/database h jo total data ka subset store krta h(shard is a mongodb 
//         instance/database that stores a subset of the total data)
// shard key - ye ek field hoti h jo determine krti h ki data ko shard m kese destribute krna h(this is a field
//             that determines how the data is to be distributed across the shards)
// config server - ye shard kiye gye cluster ke bare m metadata or configuration information store rkhte h
//                 (these store metadata and configuration information about the shared cluster)
// * jb document database m insert hota h to mognodb shard key ke bases pr determine krta h ki document kis
//   shard ko belong krta h fir document uchit shard m insert hota h(when a document is inserted in the 
//   database, mognodb determines on the basis of the shard key to which shard the document belongs, then the 
//   document is inserted in the desired shard)


//                               --------------  QREPLICATION  --------------
// * replication ek replica set ke andr different server/node pr data ki copies create krna or maintain rkhne
//   ka process h jisse data ki avability ko badaya ja ske(replication is the process of creating and  
//   maintaining copies of data on different servers/nodes within a replica set to increase data availability)
// * ek server down hone pr data another server pr available hota h(If one server is down the data is available
//   on another server)
// replica set - ye mongodb server ka group hota h jo same data set ko maintain rkhta h(these are groups of
// mongodb servers that maintain the same data set)


//                             --------------  QAGGREGATION  --------------
// * aggregation ek process h jo ki multiple documents ko process karta h or computed result return karta h(
//   aggregation is a process which process multiple documents and return computed result)


//                                --------------  QATLAS  --------------
// * ye mongodb ki cloud database service h(it is a mongodb's cloud database service)
// * isse aap apne data ko cloud m host or manage kr skte h(you can host and manage your data in cloud with help 
//   of this)


//                               --------------  QCLUSTER  --------------
// * cluster interconnected server ko refer karta h jo ki data store or manage karne ke liye ek sath work karte h
//   (cluster refers to a group of interconnected servers that work together to store and manage data)


//                               --------------  QDRIVERS  --------------
// * drivers software library hote h jo ki application ko allow karte h mongodb database se intrect karne ke liye
//   (drivers are software library that allow applications to interact with mongodb databases)
// * mongodb varoius programing language jese c, c++, java, python, php, node.js, ruby ko supported drivers offer
//   karta h(mongodb offer supported drivers for various programing language like c, c++, java, python, php,
//   node.js, ruby)


//                             --------------  QPOPULATE  --------------
// * populate ek feature hota h jisse relational data ke sath easily work kiya ja sakta h(populate is a feature
//   that allows you to work easily with relational data)
// * populate m ek document dusre collection ke document ko reference krta h(a document in populate references
//   a document in another collection)
// * populate ki help se referenced document ko easily fetch kiya ja sakta h(with the help of populate the
//   referenced document can be fetched easily)


//                             --------------  QMONGOSHELL  --------------
// * mongodb shell/mongosh ek javascript environment hota h jiska use mongodb se interact krne ke liye krte h
//   (mongodb shell/mongosh is a javascript environment used to interact with mongodb)
// * mongodb shell ka use database ko explore or query ko run krne ke liye krte h(we use the mongodb shell to
//   explore the database and run queries)

// * vertical or horizontal scaling se large amount of users ko handle krne ke liye system ki capacity or 
//   performance ko increase krte h(vertical and horizontal scaling increases the capacity of the system to 
//   handle large amounts of users)
// * vertical scaling - 1. isme load ko handle krne ke liye single server ki capacity ko increase krte h jiske 
//   liye storage ki capacity, ram, cpu cores ko bdate h ya faster disk drive, faster processer ka use krte h
//   (in this, we increase the capacity of a single server to handle the load for which we increase the storage
//   capacity, ram, cpu cores or use faster disk drive, faster processor)
//   2. application ek hi server pr depend hoti h or isme server ki capacity ek limit tk hi increase kr skte h
//   the application depends on a single server and the server capacity can be increased only up to a limit)
// * horizontal scaling - isme load ko handle krme ke liye more server ko add krte h(in this we add more 
//   servers to handle the load)
