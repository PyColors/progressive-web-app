import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    color: '#757575',
    borderTop: `1px solid #333`,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    // paddingTop: theme.spacing(3),
    background: '#1c1c1c',
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: theme.spacing(6),
    // }
  },

  icon: {
    border: 'solid 2px white',
    padding: '10px 0',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    margin: '0 20px 25px 0',
  },
  link: {
    margin: theme.spacing(6, 3, 0, 0),
    textTransform: 'capitalize',
    color: '#757575',
    fontSize: '1.1em',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  navigation: {
    width: '100%',
    display: 'table',
    padding: '0',
    backgroundColor: theme.palette.primary.main,
  },

  navigationItem: {
    display: 'table-cell',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    // boxShadow: 'inset 0px 37px 0px -15px #23395e',
    boxShadow: 'inset 0px 37px 0px -15px #222',
    // backgroundColor: '#2e466e',
    border: '1px solid #222',
    cursor: 'pointer',
    color: '#ddd',
    fontFamily: 'Verdana',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 38px',
    textDecoration: 'none',
    textShadow: '0px -1px 0px #263666',
  },
}));

export default useStyles;
