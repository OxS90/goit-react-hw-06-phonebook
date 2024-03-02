import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = props => {
  const { listToSearch, deleteFunction } = props;
  return (
    <ul>
      {listToSearch.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            onClick={deleteFunction}
            id={contact.id}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  listToSearch: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;
