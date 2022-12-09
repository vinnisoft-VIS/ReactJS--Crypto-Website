import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Overview from './pages/overview/Overview';
import Crypto from './pages/crypto/Crypto';
import Login from './pages/login/Login';
import GetInTouch from './pages/get-in-touch/GetInTouch';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { darkTheme } from './theme/AppTheme';
import { responsiveFontSizes, Theme, ThemeProvider } from '@material-ui/core';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';


const App: React.FC = () => {

    // define custom theme
    let theme: Theme = darkTheme;
    theme = responsiveFontSizes(theme);
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                {/* router settings */}
                <Router>
                    {/* component is used to scroll to top */}
                    <ScrollToTop />
                    <Header />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/get-in-touch">
                            <GetInTouch />
                        </Route>
                        <Route path="/crypto">
                            <Crypto />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/" >
                            <Overview />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
