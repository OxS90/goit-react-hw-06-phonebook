import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = props => {
  return (
    <form className={styles.form} onSubmit={props.submitFunction}>
      <label>Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  submitFunction: PropTypes.func.isRequired,
};

export default ContactForm;
