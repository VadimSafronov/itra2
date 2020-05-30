import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import Admin from './components/Admin';
import Company from './components/Company'
import CreateCompany from './components/CreateCompany'

import { initializeApp } from "./Redux/appReducer";
import LinearProgress from "@material-ui/core/LinearProgress";
import { localeMessages } from "./localizations/index";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { IntlProvider } from "react-intl";
import { GlobalStyles } from "./Themes/GlobalStyles";
import { darkTheme } from "./Themes/dark";
import { lightTheme } from "./Themes/light";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";


const getTheme = (title) => {
  return title === "light" ? lightTheme : darkTheme;
};

const App = (props) => {
  const theme = getTheme(props.theme.title);
  const locale = props.locale.value;

  useEffect(() => {
    props.initializeApp();
  }, []);

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <GlobalStyles />
      <IntlProvider locale={locale} messages={localeMessages[locale]}>
        <CssBaseline />
        {!props.initialized ? (
          <LinearProgress />
        ) : (
          <>
            <Header />
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/registration" exact component={Registration} />
              <Route path="/profile/:userId?" exact component={Profile} />
              <Route path='/company/:companyId' exact component={Company} />
              <Route path='/company/create' exact component={CreateCompany} />
              <Route path='/admin' exact component={Admin} />
            </Switch>
          </>
        )}
      </IntlProvider>
    </ThemeProvider>
  );
};
let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  theme: state.theme,
  locale: state.locale,
});
export default connect(mapStateToProps, { initializeApp })(App);
