import React from 'react'
import './App.css'
import Header from './Components/Header'
import AddContacts from './Components/AddContacts'
import ContactList from './Components/ContactList'
import Form from './Components/Forms'


export const App = () => {
  
const contacts = [
    {id : "1",
    name : "ibrar ahmed",
    email : "ibrarahmedjani@gmail.com"
  },

  {id : "1",
  name : "ibrar ahmed",
  email : "ibrarahmedjani@gmail.com"
}
  ]
  return (
    <div>        
            <Form />
            <AddContacts AddContactHandler={AddContactHandler}/>
            <ContactList contact={contacts}/>
    </div>
  )
}

export default App
