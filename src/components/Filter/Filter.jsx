import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
// import { label, input } from './Filter.module.scss';

import InputBase from '@material-ui/core/InputBase';
// import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints.values);

  return {
    // MuiToolbarGutters: {
    //   padding: 0,
    //   paddingLeft: theme.spacing(1),
    //   paddingRight: theme.spacing(1),
    //   minHeight: 80,
    // },

    search: {
      paddingLeft: 5,
      height: 50,
      position: 'relative',
      // borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.0),
      // border: ['2px solid transparent'],

      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        // border: ['2px solid white'],
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
      // color: 'inherit',
      // color: '#546086',
    },

    inputInput: {
      height: 34,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create('width'),
      // width: '100%',
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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: 'green',
//   },
//   MuiToolbarGutters: {
//     padding: 0,
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.35),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 1),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '15ch',
//       '&:focus': {
//         width: '25ch',
//       },
//     },
//   },
// }));

const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches);

  return (
    <>
      {/* <label className={label}>
        Search by name
        <input className={input} value={value} onChange={onChange} />
      </label> */}

      {/* <Toolbar className={classes.MuiToolbarGutters}> */}
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
