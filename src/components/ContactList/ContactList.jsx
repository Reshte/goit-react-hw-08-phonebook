import { ContactListItem } from './ContactListItem/ContactListItem'
// import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { selectContacts } from '../../redux/selectors'
import { selectFilter } from '../../redux/selectors'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const getVisibleContacts = (contacts, filter) => {
    if (filter.length > 0) { return contacts.filter(({ name }) => name.toLowerCase().includes(filter)) }
    return contacts;
    };

export const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter);    
    const visibleContacts = getVisibleContacts(contacts, filter)
  
            return ( 
    <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
                   {visibleContacts.map(({ id, name, number }) => (
                       <ContactListItem key={id} id={id} name={name} number={number}/>))}
            </Grid>
    </Box> )
}
