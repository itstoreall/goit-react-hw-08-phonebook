import ContactItem from './ContactItem';
import { contactList } from './Contacts.module.scss';

// Презентационный компонент (без логики)
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={contactList}>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
