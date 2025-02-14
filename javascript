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
// * for-of - iska use array ki values ko on-by-one get krne ke liye kiya jata h(it is use for get values
//   of array one-by-one)
// * break - condition false hone se phle loop se bhar niklne ke liye iska use krte h(It is used to break out
//   of the loop before the condition fails)
// * continue - is keyword se loop ke kisi particuler value ko skip krke loop ko continue rkh skte h(With
//   this keyword you can skip any particular value of the loop and keep the loop continuous)


//                                 --------------  QFUNCTIONS  --------------
// * function block of code hote h jinse task perform krte h function ko call krne pr code execute hote h(
//   function is a block of code which we create for perform task and it execute when we call it)
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


//                              --------------  QFUNCTIONEXPRESSION  --------------
// * is function ka name nhi hota ise ek variable m store krte h(This function does not have a name, it is
//   stored in a variable)
// * ye hoisting nhi hote h(it is not hoisting)


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
// * first class function m hm function ko as arguments usre function m pass krte h(in first class function, we
//   pass the function as arguments to another function)
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
