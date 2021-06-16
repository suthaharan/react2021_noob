# React 2021 4 Noobs
React beginner with simple steps

Topic of contents
==========================
* Create React App
* Components
  * Functional
  * Class
* JSX
* Props vs State
* useState vs useEffect
* Components (Lifecycle, Methods)
* Rendering conditionally
* Lists vs Keys
* Basic Form Handling
* React Project Structure
* Routing React Router
* Programmatic Navigation
* JSON DB Server
* API Calls (using AXIOS)
* React CRUD operations
* React Search Filter
* React Hooks

#### Create React App
* Install the node server (node version for the current app is v12.14.1, npm v6.13.4)
* [Visit reactapp github page]
* [Online learing through Stackblitz] (https://stackblitz.com/edit/react-wd2rqu Stackblitz)
* [Online learning through CodeSandbox] (https://codesandbox.io/s/new)
* [https://codepen.io/pen?&editors=0010]

```
$ npx create-react-app contactlistapp
$ cd contactlistapp
$ npm start
```

* Semantic UI library will be used in this project 
  * Semantic UI CDN [https://cdnjs.com/libraries/semantic-ui]
  * Semantic UI website [https://semantic-ui.com/introduction/getting-started.html]

* A component is a piece of code which can be reusable, has its own input/output and has its own functionality. JSX is combination of javascript and html which is used in creating components. 
* If you are going to return more than 1 line of code, you use paranthesis to group them ().
* Styling html elements inside JSX
  * class cannot be used in JSX as it refers to classes and you need to use className instead.
  * use camel case to represent CSS properties "padding-top" will be "paddingTop", "font-family" will be "fontFamily"
