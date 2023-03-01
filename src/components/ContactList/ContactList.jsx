import { ContactListItem } from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { selectContacts } from '../../redux/selectors'
import { selectFilter } from '../../redux/selectors'

const getVisibleContacts = (contacts, filter) => {
    if (filter.length > 0) { return contacts.filter(({ name }) => name.toLowerCase().includes(filter)) }
    return contacts;
    };

export const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter);    
    const visibleContacts = getVisibleContacts(contacts, filter)
  
            return ( 
            <List>
                   {visibleContacts.map(({ id, name, number }) => (
                       <ContactListItem key={id} id={id} name={name} number={number}/>))}
            </List> )
}

