import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints.values);

  return {
    search: {
      paddingLeft: 5,
      height: 50,
      position: 'relative',
      // borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.0),

      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: 'auto',

      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },

    // div
    searchIconWrap: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fill: 'red',

      // icon
      '& > svg': {
        fill: 'white',
      },
    },

    inputRoot: {
      color: 'white',
    },

    inputInput: {
      height: 34,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create('width'),
      width: '15ch',
      '&:focus': {
        width: '26ch',
        // borderRadius: theme.shape.borderRadius,
      },

      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '27.4ch',
        },
      },
    },
  };
});

const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches);

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIconWrap}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search by name…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={onChange}
        />
      </div>
      {/* </Toolbar> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.contactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
