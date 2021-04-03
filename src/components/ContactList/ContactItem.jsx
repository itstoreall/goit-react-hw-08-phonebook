import { contactItem, button } from './Contacts.module.scss';

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => (
  <li className={contactItem}>
    <span>
      {name}: {number}
    </span>
    <button className={button} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
