import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import { contactItem, button } from './Contacts.module.scss';

import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  deleteContactBtn: {
    padding: 7,
    margin: 0,
  },
  contactItemDivider: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 15,
  },
  contactPerson: {
    padding: 0,
    width: 13,
    height: 13,
  },
}));

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  const ms = useStyles();

  return (
    // <li className={contactItem}>
    <ListItem button divider className={ms.contactItemDivider}>
      {/* <ListItemText primary='Drafts' /> */}

      {/* <button className={button} onClick={() => onDeleteContact(id)}>
        Delete
      </button> */}
      <div>
        <span>{`${name}: ${number}`}</span>
      </div>
      <IconButton
        aria-label='delete contact'
        className={ms.deleteContactBtn}
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon fontSize='small' />
      </IconButton>
    </ListItem>
    // </li>
  );
};

export default ContactItem;
