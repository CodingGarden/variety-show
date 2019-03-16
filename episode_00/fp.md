###  Functional Programming

#### Objectives

* 🐑 Define and Describe Functional Programming
* 🚼 Define and Describe Pure Functions
* 🐣 Write a Pure Function
* 🥛 Define and Describe Referential Transparency
* 🥇 Define and Describe First Class Functions
* 👨‍⚖️ Define and Describe Higher Order Functions
* 🏃‍ Use some of JavaScripts Built-In Higher Order Functions
* 📦 Define and Describe Immutability
* 🌈 Describe why Functional Programming is Useful
* 💪 Solve a coding problem using functional programming concepts

### 🐑 Define and Describe Functional Programming

Functional programming is a programming paradigm in which we try to bind everything in pure mathematical functions style. It is a declarative type of programming style. Its main focus is on “what to solve” in contrast to an imperative style where the main focus is “how to solve”. It uses expressions instead of statements. An expression is evaluated to produce a value whereas a statement is executed to assign variables. Those functions have some special features discussed below.

Programming Languages that support functional programming: JavaScript, Haskell, Scala, Erlang, Lisp, ML, Clojure, OCaml, Common Lisp, Racket

>[Source](https://www.geeksforgeeks.org/functional-programming-paradigm/)

* [Functional Programming on WikiPedia](https://en.wikipedia.org/wiki/Functional_programming)
* [FUNCTIONAL PROGRAMMING PRINCIPLES EVERY IMPERATIVE PROGRAMMER SHOULD USE](https://www.lucidchart.com/techblog/2017/11/29/functional-programming-principles-every-imperative-programmer-should-use/)
* [An introduction to the basic principles of Functional Programming](https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84)

### 🚼 Define and Describe Pure Functions

In computer programming, a pure function is a function that has the following properties:

1. Its return value is the same for the same arguments
  * No variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices
1. Its evaluation has no side effects
  * No mutation of local static variables, non-local variables, mutable reference arguments or I/O streams

![pure-function](https://cdn-images-1.medium.com/max/1760/1*OmLtMy0P6aBQzfzbZewlAA.png)

>[Source: WikiPedia](https://en.wikipedia.org/wiki/Pure_function)

![pure-function](https://cdn-images-1.medium.com/max/1760/1*wKHYR78dth2CsD2Zkd_UuA.png)

>[Source: Medium](https://medium.com/@jyothsnasrinivas/what-are-pure-functions-c1e9f376dc4c)

* [Side Effect on WikiPedia](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
* [What are Pure Functions?](https://medium.com/@jyothsnasrinivas/what-are-pure-functions-c1e9f376dc4c)

### 🐣 Write a Pure Function

```js
// write code here
```

### 🥛 Define and Describe Referential Transparency

An expression is called referentially transparent if it can be replaced with its corresponding value without changing the program's behavior. This requires that the expression is pure, that is to say the expression value must be the same for the same inputs and its evaluation must have no side effects. An expression that is not referentially transparent is called referentially opaque.

>[Source: WikiPedia](https://en.wikipedia.org/wiki/Referential_transparency)

![referential-transparency](https://cdn-images-1.medium.com/max/1760/1*fFAR8YtX3NZ74kXHwc7XSQ.png)

>[Source: Medium](https://medium.com/@jyothsnasrinivas/referential-transparency-c70b74067db8)

* [What Is Referential Transparency?](https://www.sitepoint.com/what-is-referential-transparency/)

### 🥇 Define and Describe First Class Functions

A programming language is said to have first-class functions if it treats functions as first-class citizens. This means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

>[Source: WikiPedia](https://en.wikipedia.org/wiki/First-class_function)

* [First-class function on MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

### 👨‍⚖️ Define and Describe Higher Order Functions

A higher-order function is a function that does at least one of the following:

* Takes one or more functions as arguments
* returns a function as its result.

>[Source: WikiPedia](https://en.wikipedia.org/wiki/Higher-order_function)

### 🏃‍ Use some of JavaScripts Built-In Higher Order Functions

* [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### 📦 Define and Describe Immutability

An immutable object (unchangeable object) is an object whose state cannot be modified after it is created. This is in contrast to a mutable object (changeable object), which can be modified after it is created.

>[Source: WikiPedia](https://en.wikipedia.org/wiki/Immutable_object)

### 🌈 Describe why Functional Programming is Useful

* Pure functions are predictable and easier to understand.
* Testing is easier. Do not have to depend on external state.
* Debugging is easier. Can better isolate and debug a problem.
* Programs have fewer "moving parts". No global state, mutable variables or hidden state.
* Programs are usually more concise.
* If you're not used to it, you'll learn to think about the solution to problems in a different way.

#### Further Reading

* [The Benefits of Functional Programming](https://alvinalexander.com/scala/fp-book/benefits-of-functional-programming)
* [StackOverflow: What are the benefits of functional programming?](https://stackoverflow.com/questions/128057/what-are-the-benefits-of-functional-programming)
* [Pros and Cons of Functional Programming](https://itnext.io/pros-and-cons-of-functional-programming-32cdf527e1c2)
* [Quora: What are some limitations/disadvantages of functional programming?](https://www.quora.com/What-are-some-limitations-disadvantages-of-functional-programming-Where-does-it-break-down-when-you-want-to-get-things-done/answer/Tikhon-Jelvis)

### 💪 Solve a coding problem using functional programming concepts

* [Function composition on Codewars](https://www.codewars.com/kata/function-composition-1)

### Libraries

* [Awesome FP JS](https://github.com/stoeffel/awesome-fp-js)