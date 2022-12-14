# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The parameter is a placeholder for data and the argument is the actual data being passed in.

Researched answer: The parameters are the alias for the values that will be passed to the function. The arguments are the actual values. For example let's say you have the following function: 
    var foo = function(a, b, c) ------> a, b, and c are the parameters
    foo(1, 2, 3) -------> 1, 2, and 3 are the arguments

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined parameters that .map() takes are the array and the values in the array. I would think that the array is required so that map() knows which values to iterate though.

Researched answer: Map() has three built-in parameters: the current value, the index, and the array the function is called on. Higher order functions have to take in at least one argument (value) but can take two or three. The value of the array at the current iteration is required. The index of the array and the array are both optional. It has to be in this order if wanting to have all three parameters: (value, index, array)

3. What is the difference between map and filter?

Your answer: Map goes through the values of an array and changes the values according to what your function is doing. Filter goes through the values of an array and filters the values and returns it into a new array with the values that satisfied the condition.

Researched answer: The map method iterates through an array and returns a new array of the same length. For example: you would use map if you wanted to have each value in an array multiplied by 3. Your new array would be the same length and have the updated values. The filter method iterates through an array and returns a new array with only the values that satisfy the stated condition. Filter needs an evaluation to work. The evaluation can be anything that will return a Boolean value of true or false or a truthy or falsy value. Values that are true or truthy are included in the new array while values that are false or falsy are excluded.

4. What is iteration?

Your answer: Iteration is a set of instructions executed over and over until a condition is met.

Researched answer: Iteration is a set of instructions executed over and over until a condition is met. Iteration occurs when we want to execute code once for each item in a collection, usually elements in an array or properties in an object. Some common iteration methods include 'for...of', 'for...in', map(), and forEach().

5. What is the difference between a class and an object?

Your answer: The class is like the blueprint for an object. You can create a class that produces different objects, they are resuable and customizable, much like functions. Objects contain different key value pairs of information.

Researched answer: Objects are a JavaScript data type that is made up of different key value pairs. Objects can contian static informations as well as methods, which are functions that belong to the object. Classes are a type of function that contain data and behavior. They are the blueprints of objects and have their own scope. Classes are resuable, each object created from class is independent from each other.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User stories look at software from a perspective of user value. After implementing a story, the developers can get feedback from users whether they're satisfied or if there's something they'd like changed. Good user stories follow the three Cs: Card, Converstion, and Confirmation[1]. Card means user stories are short, they focus on the value provided by the user. The team developing the software has conversations about the stories. Input from users and business stakeholders is necessary, but developers bring their ideas to the table as well. Last, the team documents the results of conversations as acceptance criteria. Checking the acceptance criteria later serves as confirmation that the team has implemented the story correctly.

2. Spread operator: The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability. The spread operator is denoted by three dots, '...'.

3. React state: The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time, whenever it changes, the component re-renders. The change in state can happen as response to user action or system-generated events and these changes determine the behavior of the component and how it will render. A state can be modified based on user action or network changes. Every time the state of the object changes, React will re-render the component to the browser. The state object is initialized in the constructor and can store multiple properties. this.setState() is used the change the value of the state object, setState() function performs a shallow merge between the new and previous state.

4. React props: In React, props are a type of object where the value of attributes of a tag is stored. The word props implies properties, and its working functionality is quite similar to HTML attributes. Prop components are read-only components. In Reqct, the data can be passed from one component to another component using these props, similar to how arguments are passed in a function. Inside the component, you can add the attributes called props; however, you can't change or modify props inside the component as they are immutable.

5. DOM events: DOM events allow JavaScript to register different event handlers on elements in an HTML document. Events are normally used in combinatoon with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).
