import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RouterProps } from '../../interfaces/router-props.interface';

const useStyles = makeStyles(theme => ({
  top: {
    padding: '100px 0',
    background: '#111',
    color: 'white',
  },
  innerTop: {
    color: 'white',
  },
  main: {
    background: '#fff',
    color: '#575757',
    lineHeight: '2.25rem',
    fontSize: '1.25rem',
    fontFamily: 'Akkurat,sans-serif,Helvetica Neue,Helvetica,Arial',
  },
  headerInnerTitle: {
    fontFamily: 'arial',
    marginBottom: '0.35em',
    fontWeight: 'bold',
    fontSize: '8rem',
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main,
  },
}));

interface Navigation1Props extends RouterProps {}

const Navigation6 = ({ history: { push } }: Navigation1Props) => {
  const classes = useStyles();

  return (
    <Fragment key="privac-policy">
      <main className={classes.main}>
        <Container maxWidth="xl" component="section" className={classes.top}>
          <Container maxWidth="lg" component="div" className={classes.innerTop}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                align="center"
                className={classes.headerInnerTitle}
              >
                Navigation<span className={classes.headerInnerTitlePoint}>_</span>
              </Typography>
            </Grid>
          </Container>

          <Container maxWidth="lg" component="section">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h2" component="h3" gutterBottom></Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h5" component="h3" gutterBottom>
                  6
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </main>
    </Fragment>
  );
};

export default Navigation6;
