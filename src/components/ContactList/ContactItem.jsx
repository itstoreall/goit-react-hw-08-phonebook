import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { contactItem, button } from './Contacts.module.scss';

const useStyles = makeStyles((theme) => ({
  deleteContactBtn: {
    margin: 0,
  },
}));

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  const classes = useStyles();

  return (
    <li className={contactItem}>
      <IconButton
        aria-label='delete contact'
        className={classes.deleteContactBtn}
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon fontSize='small' />
      </IconButton>
      {/* <button className={button} onClick={() => onDeleteContact(id)}>
        Delete
      </button> */}
      <span>
        {name}: {number}
      </span>
    </li>
  );
};

export default ContactItem;
