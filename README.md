### React 2021 4 Noobs
React beginner with simple steps
* Reference [https://www.youtube.com/watch?v=0riHps91AzE]

### Topic of contents
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
* Visit reactapp github page [https://github.com/dmalvia/React_Tutorial_Contact_Manager_App]
* Online learing through Stackblitz [https://stackblitz.com/edit/react-wd2rqu Stackblitz]
* Online learning through CodeSandbox [https://codesandbox.io/s/new]
* CodePen [https://codepen.io/pen?&editors=0010]

```
$ npx create-react-app contactlistapp
$ cd contactlistapp
$ npm start
```

#### Semantic UI library

* Semantic UI library will be used in this project for CSS 
  * Semantic UI CDN [https://cdnjs.com/libraries/semantic-ui]
  * Semantic UI website [https://semantic-ui.com/introduction/getting-started.html]

#### Component
* A component is a piece of code which can be reusable, has its own input/output and has its own functionality. JSX is combination of javascript and html which is used in creating components. 
* If you are going to return more than 1 line of code, you use paranthesis to group them ().
* Styling html elements inside JSX (Javascript Extension)
  * class cannot be used in JSX as it refers to classes and you need to use className instead.
  * use camel case to represent CSS properties "padding-top" will be "paddingTop", "font-family" will be "fontFamily"
* If you are going to use functional components, you will be using React Hooks Props are used to pass elements from parent to child.
* To generate unique id for each user
    * $ npm i -S uuidv4

* Class componentnpm i
* 
```javascript
import React from 'react';

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are required");
            return;
        }
        this.props.addContactHandler(this.state);
        console.log(this.state);
        this.setState({name: "", email: ""});
    }  
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact List</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }/>
                        <label>Email</label>
                        <input type="email" name="name" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add to Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
```

#### LocalStorage Access

```javascript
  const LOCAL_STORAGE_KEY = "contacts";

  ...
  // retrieve data from localstorage
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
  if(retrieveContacts){
    setContacts(retrieveContacts);
  }

  ...
  // set localstorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

```


#### JSON Placeholder API
* URI [https://jsonplaceholder.typicode.com/]

#### JSON Server
* Create a separate folder for json server and name it "server-api"
* Initialize npm
```
$ npm install -g json-server
```
* Modify package.json to start the server and to watch db.json changes
* Visit http://localhost:3005/contacts to see the contacts list (you should create a db.json file with contacts json payload)
```
 "scripts": {
    "start": "json-server -p 3005 -w db.json"
  },
```

#### Axios for API access
* Ref link [https://zetcode.com/javascript/jsonserver/]
* Install axios
```
$ npm i -S axios
```