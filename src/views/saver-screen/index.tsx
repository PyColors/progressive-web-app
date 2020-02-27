import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RouterProps } from '../../interfaces/router-props.interface';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#303333',
    height: '100%',
    padding: '14% 0',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${'../../../images/background-saver-screen.jpeg'})`,
  },

  main: {},
  basline: {
    fontSize: '8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'arial',

    background: theme.palette.primary.main,
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main,
  },
}));

interface SaverScreenProps extends RouterProps {}

const SaverScreen = ({ history: { push } }: SaverScreenProps) => {
  const classes = useStyles();

  return (
    <Fragment key="saver-screen">
      <div className={classes.root}>
        {/* <div className="bg">
          <img src="http://localhost:3000/images/background-saver-screen.jpeg" alt="" />
        </div> */}
        <CssBaseline />

        <Container component="main" className={classes.main} maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom className={classes.basline}>
            Toucher l'écran
            <span className={classes.headerInnerTitlePoint}>_</span>
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
};

export default SaverScreen;
