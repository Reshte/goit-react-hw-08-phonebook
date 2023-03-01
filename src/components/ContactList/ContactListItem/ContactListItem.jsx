import { Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";
import { Button } from '@mui/material';


export const ContactListItem = ({ id, name, number }) => {
     const dispatch = useDispatch()
     const handleDelete = () => dispatch(deleteContact(id));
     return (  
<Item key={id}>
               <p>{name} : {number}</p>
<Button variant="contained"  type='button' onClick={handleDelete} >Delete</Button>
</Item>)  
}