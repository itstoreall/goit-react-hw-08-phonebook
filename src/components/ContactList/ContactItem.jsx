import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';

import s from './Contacts.module.scss';

const useStyles = makeStyles((theme) => ({
  contactItemDivider: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 15,
  },
  personIcon: {
    marginRight: 15,
    fill: '#546086',
  },
  deleteBtn: {
    padding: 7,
    margin: 0,
  },
  deleteIcon: {
    fontSize: 20,
    fill: '#546086',
    '&:hover': {
      fill: '#6b7cb4',
    },
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
      <div className={s.contactItemInfoWrap}>
        <PersonIcon className={ms.personIcon} />
        <p>{`${name}: ${number}`}</p>
      </div>
      <IconButton
        aria-label='delete contact'
        className={ms.deleteBtn}
        onClick={() => onDeleteContact(id)}
      >
        <CancelIcon fontSize='small' className={ms.deleteIcon} />
      </IconButton>
    </ListItem>
    // </li>
  );
};

export default ContactItem;
