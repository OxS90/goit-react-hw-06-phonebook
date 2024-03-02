import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  let contacts = useSelector(state => state.contacts);
  let filter = useSelector(state => state.filter);

  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
  };

  let list = contacts;
  if (filter !== '') {
    list = list.filter(contact => contact.name.toLowerCase().includes(filter));
  }

  return (
    <ul>
      {list.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            onClick={handleClick}
            id={contact.id}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
