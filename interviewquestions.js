//                               --------------  QJAVASCRIPT  --------------
// * two type of javascript - vanilla js,advance js
// * vanilla js - it is a client side language use for develop frontend part of web application
// * advance js - it is a server side language use for develop backend part of web application
// * JavaScript is the world's most popular programming language


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
// * 5. isse declare variable apne scope m hoisted hote h without default value(variables declared with let
//   are hoisted into their scope without default value)
// * const - 1. ye keyword js ke es6 version m add huva tha(this keyword was added in es6 version of js)
//   2. isse declare varaible ki value reassign nhi kr skte(this not allows reassigning the declared
//   variable's value)
// * 3. isse declare krne pr variable ka scope global,local ya block scope ho skta h(when declared with this,
//   the scope of the variable is can global,local or block scope)
// * 4. isse declare krne pr variable ko redeclare nhi kr skte(variables declared with const can not be
//   redeclared)
// * 5. isse declare variable apne scope m hoisted hote without default value(variables declared with const 
//   are hoisted into their scope without default value)


//                                --------------  QOPERATOR  --------------
// * assignment operator - =,+=,-=,*=,/=,**=,%=
// * arithmetic operator - +,-,*,/,**,%,++,--
// * comparison operator - ==,===,>,<,>=,<=,!=,!==
// * ternary operator - ?
// * logical operator - &&,||,!


//                                --------------  QDATATYPE  --------------
// * string,number,boolean,null,undefined,array,object


//                                 --------------  QARRAY  --------------
// * array ek datatype hota h jiska use data ke collection ko store krne ke liye kiya jata h(Array is a data
//   type which is used to store a collection of data)
// * array m index number hota h jo array m element ki position ko specifie krta h(An index is a number in an
//   array that specifies the position of an element in the array)


//                                 --------------  QOBJECT  --------------
// * object is a collection of properties
// * properties - jisme data key(name)-value ke form m rhta h(In which the data remains in the form of
//   key(name)-value)
// * object ki properties ko dot notaion or bracket notation method se access kr skte h(You can access the
//   properties of the object using dot notation and bracket notation methods)


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
//   forEach()


//                                --------------  QSETTIMEOUT  --------------
// * ye function ko ek specific time ke bad call krta h(it call function after specific time)


//                                --------------  QSETINTERVAL  --------------
// * ye function ko ek specific time pr continuously call krta h(it call function continuously on specific
//   time)

//                                --------------  QCLEARTIMEOUT  --------------
// * setTimeout ko stop krta h(it stop setTimeout)

//                               --------------  QCLEARINTERVAL  --------------
// * setInterval ko stop krta h(it stop setInterval)


//                                    --------------  QSCOPE  --------------
// * scope variable ki accesebility ko determine krta h(scope determines the accessibility of variables)
// * 3 types of scope - global scope, local scope, block scope
// * global scope - jb variable ko function ya block ke bhar declare kiya jata h to uske scope ko global
//   scope khte h jisme varaible ko kahi bhi access kiya ja skta h(when the variable is declared throughout
//   the function or block, then its scope is called global scope, in which the variable can be accessed
//   anywhere)
// * local scope - jb variable ko function ke ander declare kiya jata h to uske scope ko local scope kahte h
//   jisme varaible ko keval function ke ander hi access kr skte h(when the variable is declared inside
//   the function, then its scope is called local scope, in which the variable can be accessed inside the
//   function only)
// * block scope - jb variable ko kisi block ke ander declare kiya jata h to uske scope ko block scope kahte
//   h jisme varaible ko keval us block ke ander hi access kr skte h. ye scope es6 version m introduce hova
//   tha(when the variable is declared inside the block, then its scope is called block scope, in which the
//   variable can be accessed inside the block only. this block was introduce in es6 version)


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


//                             --------------  QFUNCTIONDECLARATIONS  --------------
// * is function ka name hona jruri h(it must have a name)
// * ye hoisting hota h(it is hoisting)


//                              --------------  QFUNCTIONEXPRESSION  --------------
// * is function ka name nhi hota ise ek variable m store krte h(This function does not have a name, it is
//   stored in a variable)
// * ye hoisting nhi hote h(it is not hoisting)


//                                --------------  QARROWFUNCTION  --------------
// * ye function ES6 version m introduce huva(This function was introduced in the ES6 version)
// * ise expression function ko modifie krke create krte h(Create it by modifying the expression function)
// * isse function syntax short m likh skte jese single line statement pr return keyword or curly bracket
//   hta skte h or single parameter pr round bracket/parentheses bhi hta skte h(With this function syntax
//   can be written in short for example we can remove return keyword and curly bracket on single line
//   statement and we can remove round bracket/parentheses on single parameter)
// * iska khudka this nhi hota h ye apne parent ke this ko refer krta h(Arrow functions do not have their
//   own this it refers to its parent this)


//                             --------------  QCALLBACKFUNCTION  --------------
// * callback function ek function hota jise as a argument dusre function m pass krte h(callback function is
//   a function which we pass as a argument in another function)
// * jb dusra function complete ho jata h tb callback function call hota h(callback funtion is call when
//   another function execute)


//                            --------------  QANONYMOUSFUNCTION  --------------
// * ve function jinke koi name nhi hote(functions that have no names)
// * expression function anonymous function hote h(expression function is a anonymous function)


//                                --------------  QCLOSURE  --------------
// * closure ek inner function hota h jo ki outer function ke scope ko access kr skta h(closure is an inner
//   function that can access the scope of an outer function)


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










//                               --------------  QREACTJS  --------------
// * reactjs ek open source javascript library h(it is a open source javascript library)
// * iska use web application ke frontend part ko develop krne m krte h(we use for develop frontend part of
//   web application)
// * isse single page application bnate h(we create single page web application with help of reactjs)
// * ise facebook community ne develop kiya h(facebook develops react js)
// * reactjs application ko kei component m divide krte jin component ko reuse kr skte h(we divide the react
//   js application into components that can be reused)
// * react js ka current version - 18.2.0
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
// * function component ek simple javascript function h jo props ko as a argument accept krta h or react
//   element/jsx return krta h(function component is a simple javascript function that accept props as a
//   argument and return react element/jsx)
// * isme constructor use nhi hota(there is no constructor in class components)
// * isme render method require nhi hota h(there is no render method require in function component)
// * hooks ka use krte h life cycle method,state,pure component etc. feature ka use krne ke liye(we use hooks
//   for use life cycle method,state,pure component etc)


//                            --------------  QCLASSCOMPONENTS  --------------
// * isme constructor use hota(we use constructor in class components)
// * ise stateful component bhi khte h kyoki isme state or logic defined krte h(also known as a statful
//   component because we can defined state and logic in class component)
// * react element(jsx) return krne ke liye render method require hota h(render method require for return
//   react element(jsx))
// * class component ko create krne ke liye react se component ko import krte h(import component from react
//   for create class component)
// * class component m life cycle methods,state,pure component etc.(we can use life cycle methods,state,pure
//   component etc. in class components)


//                           --------------  QCONTROLLEDCOMPONENT  --------------
// * ye ase component hote h jinki input field ko react ki state se control krte h(These are such components
//   whose input fields are controlled by the state of React)


//                          --------------  QUNCONTROLLEDCOMPONENT  --------------
// * ye ase component hote h jinki input field ko dom ya useRef hook se control krte h(These are such
//   components whose input fields are controlled by the dom or useRef hook)
 

//                             --------------  QPURECOMPONENT  --------------
// * ye react ka ek feature h(it is a feature of react)
// * jb state ya props ki value change hoti h to pure component re-render hota h(pure component re-render
//   when state or props value change)
// * isse application ki performance better hoti(This would have improved the performance of the application)
// * iska use sirf class component m krte h(Its only done in class component)
// * function component m iski jagah useMemo ka use krte h(In function components,we use useMemo instead)


//                                 --------------  QHOC  --------------
// * High Order Component
// * ye component logic ko reuse krne ki advance technique h(it is advance technique for reuse component
//   logic)
// * ye as a input ek component access krta h or as a output ek component return krta h


//                               --------------  QHOOKS  --------------
// * jo features/funtonality jese life cycle method,state,pure component etc. react ke class component m use
//   krte h vhi feature/funtonality hooks ki help se function component m kr skte h(Whatever work we do in
//   the class component of React like state,life cycle method,pure component etc. we can do the same work
//   in the function component using hooks)
// * function based component m react ki additional functionality ko use krne ke liye hooks ka use krte h
//   (We use hooks to use additional functionality of React in function based components.)
// * hooks ko class component m use nhi kr skte(we can not use hooks in class component)
// * hooks ko react ke 16.8 version m introduce kiya gya tha(hooks are introduced in react 16.8 version)


//                             --------------  QTYPEHOOKS  --------------
// * react provide 15 type of hooks in react 18 version - 1.useState 2.useEffect 3.useContext 4.useRef
//   5.useLayoutEffect 6.useReducer 7.useCallback 8.useMemo 9.useId 10.useDebugValue 11.useDeferredValue
//   12.useImperativeHandle 13.useInsertionEffect 14.useSyncExternalStore 15.useTransition


//                             --------------  QUSESTATE  --------------
// * useState hook ka use functional component m state/handle manage krne ke liye krte h(useState use for
//   state management/handle in functional component)
// * useState ek array return krta h jisme do value hoti 1.current state 2.function - function se current
//   state ko update krte h or current state ki initial value useState ke round bracket m assign krte h(it
//   provide a array with two values.1. current state 2.function we can update state with help of function.
//   we can assign initial value of current state in usestate's bracket)
// * jb bhi state change hoti h component re-render hota(component is re-rendered whenever the state changes)


//                              --------------  QUSEEFFECT  --------------
// * component render hone pr ya state update hone pr useEffect call hota h(useffect is called when the
//   component is rendered or state is updated)
// * useEffect m function or dependencie pass krte h.dependencie optional hoti h.do trah ki dependencie pass
//   kr skte h 1.empty array([]) - jb component render hota h tb ek bar useEffect call hoga 2.array with
//   variable - first time render krne pr phir jb state update krenge h tb useEffect call hoga.jo code
//   execute krni ho vo function ke ander likhte h(we pass dependencie and function in useEffect.dependencie
//   are optional.we can pass to type of dependencie 1.empty array([]) - When the component is rendered,
//   useffect will be called once.2.array with variable - useEffect will call when component render first
//   time and agian when the state is updated.The code we write inside the function that code is executed)
// * jb bhi component render hone ke bad ya state update hone pr koi code execute krni ho jese alert show
//   krna ya setTimeout use krna tb ueseEffect ka use krenge ya data fetch krna ho ya componentDidMount,
//   componentDidUpdate,componentWillMount jese feature ka use functional component m krna ho tb bhi
//   useEffect ka use krenge(Whenever you want to execute any code like show alert,setTimeout after the
//   component is rendered or after the state is updated, then you will use useEffect or we want fetch data
//   or we want to use feature like componentDidMount,componentDidUpdate,componentWillMount in functional
//   component then we will use useEffect)


//                              --------------  QUSECONTEXT  --------------
// * useContext se context ko child component m access kr skte h(we can access context with help of
//   useContext)
// * useContext global data return krta h(useContext return global data)


//                                --------------  QUSEREF  -------------- 
// * useRef mutable variable create krta h jo component ko re-render nhi krta(it create a mutable
//   variable which will not re-render the component)
// * useRef se dom element ko direct access kr skte h(we can access a dom element directly)
// * useRef ek object return krta h jisme current name ki property hoti h.jiski value useRef ke bracket m
//   assign krte h(useref returns an object that has a property named current. whose value is assigned in
//   the brackets of useref.)
// * current property se useRef ki value ko access krte h(access useRef value with help of current)
// * element m ref attribute add krke us element ko directly access kr skte h(we can access that element
//   directly by adding an ref attribute to the element)


//                              --------------  QUSELAYOUTEFFECT  -------------- 
// * useLayoutEffect same useEffect ki tarah hota h pr ye screen update hone se phle syncronously call hota
//   h(UseLayoutEffect is similar to useEffect but it is called synchronously before the screen is updated) 


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
//   component.)
// * isse application ki performance better hoti h kyoki ye child component ko unneccesery re-render nhi krta
//   jiske liye child component ko memo m rapped krte h (from callback The performance of the application is
//   better because a child component does not have to be re-rendered manually,for which the child component
//   is wrapped in memo)


//                                  --------------  QUSEMEMO  --------------
// * useMemo m dependencie pass krte h jiske bases pr useMemo call hota h or ek memoized value return jise
//   component m khi show krva skte h(passes the dependency inside the useMemo on the basis of which the
//   useMemo is called and returns a memoized value which we can show in component)
// * isse application ki performance better hoti h kyoki ye unneccesery code ko render nhi krta(This
//   improves the performance of the application because it does not render the unneccesery code.)


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
// * component ko create krna,update krna,remove krna component ki life cycle hoti h(creating, updating,
//   removing components is the life cycle of the component)
// * three phase - 1.mounting 2.updating 3.unmounting
// * life cycle methods - constructor,render,componentDidMount,componentShouldUpdate,componentDidUpdate,
//   componentWillUnmount
// * constructor - component render hone se phle ye method call hoga(this method will be called before the
//   component is rendered)
// * render - ye jsx ko render krta h or component update hone pr bhi ye call hota h(it render jsx and This
//   call happens even when the component is updated)
// * componentDidMount - component ke render hone ke bad ye method call hota h(this method is called after
//   the component is rendered)
// * componentShouldUpdate - is method se hm decide krte h ki component re-render hona chahiye ya nhi true
//   return krne pr component update hoga nhi to nhi hoga(with this method, we decide whether the component
//   should be re-render or not, the component will be re-render if it returns true, otherwise it will not) 
// * componentDidUpdate - component ke update hone ke bad ye method call hoga(The componentDidUpdate method
//   is called after the component is updated in the DOM)
// * componentWillUnmount - component ko dom se remove krne se phle ye method call hota h(this method is
//   called when the component is about to be removed from the DOM)


//                                 --------------  QPROPS  --------------
// * props se parent to child component m data pass krte(we can pass data from parent to child with help of
//   props)
// * props immutable hote h(props are immutable)
// * props ko child component m as a parameter access krte h(we access props as a parameter)
// * class component m this keyword se props access krte h(we access props with help of this keyword in class
//   component)


//                                 --------------  QSTATE  --------------
// * state m component ka data store krte h(we store data in state)
// * state mutable hota h(state are mutable)
// * state update hone pr component re-render hota h(Component re-renders when state is updated)
// * class component m constructor m state define krte h(we can defined state in constructor in class
//   component)
// * functional component m useState hook se state defined krte h(we can defined state in functional
//   component with help of useState hook)


//                                 --------------  QIMMUTABLE  --------------
// * jiski ki value change nhi kr skte h(we can not change value of immutable)


//                                 --------------  QMUTABLE  --------------
// * jiski ki value change kr skte h(we can change value of mutable)


// * react application m data ka flow parent to child component m hota h(data flow is parent component to
//   child component in react application)


//                                   --------------  QJSX  --------------
// * javascript xml/javascript extension
// * jsx se react application likhna easy hota h(it easy to write react application with help of jsx)
// * ye html ki tarah dikhti h isme html or js ko sath m likh skte h(it look like html and we can write html
//   with js)
// * isme js likhne ke liye {} use krte h(use {} for using js)
// * jsx rules - 1.sbhi elements ko parent div ya fragment m wrapped krte h(close all element in parent div
//   or fragment)
//   2.sabhi tags ko close krte h(close all tags)
//   3.class attribute ki jagah className attribute ka use krte h(use the classname attribute instead of the
//   class attribute)
//   4.anchor tag ki jagah Link tag ka use krte h(use Link tag instead of anchor tag)


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


//                                    --------------  QNPM  --------------
// * node package manager node.js ke liye ek package manager h jisme javascript ki libraries hoti h jese
//   react(npm is a package manager for node.js that contains javascript libraries such as react)


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
// * Link - is component ka use ek page se dusre page pr navigate karne ke liye karte h(This component is
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









//                                   --------------  QNODEJS  --------------
// * nodejs is a js runtime enviroment jisme js ko server pr run krte h(node.js is a js runtime enviroment by
//   which we run js in server)
// * node.js m chrome ka v8 engine use hota h(Chrome's V8 JavaScript engine used in node.js)
// * node.js ka use application ke backend part ko develop krne m kiya jata h(node.js use for develop backend
//   part of web application)
// * node.js single threaded hota h(node.js is a single threaded)


//                                 --------------  QRUNTIMEENVIRONMENT  --------------
// * runtime enviroment ek enviroment hota h jisme kisi program ko execute kiya jata h(runtime environment is
//   the environment in which a program is executed)


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


//                                 --------------  QPACKAGE.JS  --------------
// * ye ek json file hoti h jisme project ki information hoti h jese project name, version, description,
//   dependencies, scripts(it is a json file that contains information about the project like project's name,
//   version, description, dependencies, scripts)
// * script - isse kisi command ki script change kr skte h(we can change script of command with this)
// * dependencies - ye packages hote h jinhe hm install krte h(These are the packages that we install)


// * file location m ./ same directry ko or ../ kisi folder se bhar akar same directry ko represent krta h
//   (in file location ./ same directry and ../ represent same directry outside of folder)


//                                   --------------  QMODULE  --------------
// * module code hote h jinko hm require se kisi file m call krte h(module is code that we can call in file
//   with help of require)
// * js file ko bhi module khte h(js file is also called module)
// * two type of module - 1. built-in module - inhe alag se install nhi krte(Do not install them separately)
//   2. third-party module - inhe alag se install krte h(we install them separately)


//                                  --------------  QFSMODULE  --------------
// * ye ek built-in module hota h jisse node.js m file system access kr skte h(it is a built-in module which 
//   we use to access file system in node.js)
// * isse file write, read, update, delete etc.. kr skte h(it allow you to write, read, update, delete etc..
//   file)
// * isse file system ki information get kr skte h(it allow you to get information of file system)


//                                 --------------  QHTTPMODULE  --------------
// * ye ek built-in module hota h jisse node.js m data ko http(hyper text tranfer protocole) pr transfer kr
//   skte h(it is a built-in module which we use for transfer data over http)
// * is module se server create krte h(create server from this module)


//                                   --------------  QREQUIRE  --------------
// * require ka use js module, external file ko include/import krne ke liye krte h(it is use for include/
//   import js module, external file in node project)


//                                   --------------  QEXPRESS  --------------
// * express is a framework of node.js


//                              --------------  QMIDDLEWAREFUNCTION  --------------
// * ye ek function hota h jisme req, res, next parameter hote h(it is a function that accept req, res, next
//   parameter)
// * next() - ye ek function h jo request ko age forward krta h(this is a function that forwards the request)
// * request phle middleware function m aati h phir middleware function m condition dete h jiske bases pr
//   response dete h(The request first comes to the middleware function and then a condition is given to the
//   middleware function on the basis of which the response is given)
// * authentication m iska use krte h(we use it in authentication)









//                                --------------  QMONGODB  --------------
// * mongodb ek document database management system h (mongodb is a document database management system)
// * iska use large amount of data ko store krne m krte h (it is used for store large amount of data)
// * ye non-relational/nosql based h (it is non-ralational/nosql based)
// * isme data bson document m store hota h(in this data store in form of bson document)


//                             --------------  QMONGODBFEATURES  --------------
// * mongodb allows dynamic data structure
// * schema less data structure which means one collection can hold diffrent type of document
// * high performance beacause run operations fastly
// * horizontal scalibility with help of sharding
// * support multiple storage enigne


//                             --------------  QHOWMONGODBWORKS  --------------
// * user frontend pr request krta h tb query frontend se backend or backend se mongodb server pr pass hoti h
//   phir mongodb server query ko storage engine m pass krta h jaha data ko read or write kiya jata h phir data
//   database m store hota h(When the user makes a request on the frontend, the query goes from the frontend to 
//   the backend and then from the backend to the MongoDB server Then mongodb server passes the query to the 
//   storage engine where the data is read and write then data store in database.)


//                                --------------  QDATABASE  --------------
// * database data ka collection hota h(database is a collection of data)
// * two type of database - 1. relational database(sql) 2. non-relational database(nosql).


//                              --------------  QSQLDATABASE  --------------
// * isme data table ki form m store hota h(In this, data is stored in the form of table.)


//                             --------------  QNOSLQDATABASE  --------------
// * isme data document ki form m store hota h jise document database bhi khte h(In this, data is stored in the
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


//                               --------------  QSHARDING  --------------
// * sharding large data set ko handle krne ke liye multiple machines m data destribute krne ka ek method h(
//   sharding is a method for distributing data across multiple machines to handle large data set)
// * sharding ek type ki horizontal scaling h(sharding is a type of horizontal scaling)


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
// * indexes data structure hote h jo ki query ke efficient execution ko support krte h(indexes are data 
//   structure that support efficient execution of queries)
// * indexes m data ki copy contain hoti h(indexes contain copy of data)
// * without indexes mongodb har ek document ko scan karta h(without indexes mongodb scans every document)
// * ek collection m multiple indexes ho sakte h(multiple indexes can exist per collection)