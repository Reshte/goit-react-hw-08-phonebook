import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <FilterForm />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </>
  );
}
