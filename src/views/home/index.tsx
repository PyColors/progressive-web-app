import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { RouterProps } from "../../interfaces/router-props.interface";
import { APP_NAME } from '../../constants/constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    color: "#303333",
    height: "100%",
    padding: "14% 0"
  },
  main: {},
  basline: {
    fontSize: "8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontFamily: "arial"
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main
  },
  subBasline: {
    fontSize: "1.5rem",
    textAlign: "right",
    color: "#fff",
  }
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  const classes = useStyles();

  return (
    <Fragment key="home">
 
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className={classes.basline}
            >
              {APP_NAME}
              <span className={classes.headerInnerTitlePoint}>_</span>
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.subBasline}
            >
              {" Develop with React, TypeScript and, Easy Peasy"}
            </Typography>
          </Container>
          
        </div>
    </Fragment>
  );
};

export default Home;