import React from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const EditContact= (props) => {
    //console.log(props);
    // destructure the props
    const location = useLocation()
    let tempName = '', tempEmail='', tempId='';
    if(location.state.contact){
        tempName = location.state.contact.name?location.state.contact.name:'';
        tempEmail = location.state.contact.email?location.state.contact.email:'';
        tempId = location.state.contact.id?location.state.contact.id:'';
    }
    // console.log("location ", location.state.contact);
    const [name, setName] = useState(tempName);
    const [email, setEmail] = useState(tempEmail);
    const [id, setId] = useState(tempId);

    // console.log("in contact detail >> location state ", location.state);

    const editUpdate = (e) => {
        e.preventDefault();

        if(!name){
             alert("Please add a name");
             return;
        }

        //onAdd({text, day, reminder})
        props.updateContactHandler({name, email, id});
        setName('');
        setEmail('');
        
   }
   const handleNameChange = (e) => {
        e.preventDefault();
        setName( e.target.value );
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail( e.target.value );
};

    return (
        <div className="ui main">
            <h2>Update Contact List</h2>
            <form className="ui form" onSubmit={editUpdate}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={ handleNameChange }/>
                    <label>Email</label>
                    <input type="email" name="name" placeholder="Email" value={email} onChange={ handleEmailChange }/>
                    <input type="hidden" name="id" value={id}/>
                </div>
                <button className="ui button blue">Edit Contact</button>
            </form>
        </div>
    );
}

export default EditContact;


// import React from 'react';
// //import { useNavigate } from 'react-router-dom';

// class EditContact extends React.Component{

//     constructor(props){
//         console.log("constructor props edit ", props)
//         super(props);
//         // const {id, name, email} = props.state.contact;
//         // this.state = {
//         //     id,
//         //     name,
//         //     email
//         // }
//     }

//     update = (e) => {
//         e.preventDefault();
//         if(this.state.name === "" || this.state.email === ""){
//             alert("All fields are required");
//             return;
//         }
//         this.props.updateContactHandler(this.state);
//         console.log(this.state);
//         this.setState({name: "", email: ""});
//         console.log(this.props);
//         //this.props.history.push("/");
//         //const navigate = useNavigate(); 
//         //navigate("/home", { state: { message: "Ok" } });
//     }  
//     render(){
//         return (
            // <div className="ui main">
            //     <h2>Update Contact List</h2>
            //     <form className="ui form" onSubmit={this.update}>
            //         <div className="field">
            //             <label>Name</label>
            //             <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }/>
            //             <label>Email</label>
            //             <input type="email" name="name" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
            //         </div>
            //         <button className="ui button blue">Edit Contact</button>
            //     </form>
            // </div>
//         );
//     }
// }

// export default EditContact;