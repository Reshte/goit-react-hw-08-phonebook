import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { fetchContacts } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>
      <ContactForm />
      <title>Contacts</title>
      <FilterForm />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}
