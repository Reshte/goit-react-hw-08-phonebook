import { Form } from './ContactForm.styled'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { TextField, Button } from '@mui/material';


export function ContactForm () {
  const [name, setName] =useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  
const handleSubmit = event => {
  event.preventDefault();
  const isNameInContacts = contacts.find(contact => contact.name.toLowerCase() ===  name.toLowerCase().trim() )
  if (isNameInContacts) {
    alert(`${name} is already in contacts`)
  } else {
    const contact = { name, number }
    dispatch(addContact(contact))
  }
    reset();
  };


const handelInputChange = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value)
        break;
      
       case 'phone':
        setNumber(e.currentTarget.value)
        break;
    
      default:
        console.log("Бедося у тебя с руками")
    }}
         
   const reset = () => {
     setName('')
     setNumber('')
    }
    
  return (<Form onSubmit={handleSubmit}>
       <TextField id="outlined-basic" type="text"  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handelInputChange}
              required  name="name" 
              label="Name" variant="outlined" margin="normal" />
             
    <TextField id="outlined-basic" type="tel"  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handelInputChange}
              required  name="phone" 
              label="Phone number" variant="outlined" margin="normal" />
            <Button variant="contained" type="submit" >Add contact</Button>
               </Form>)

}

