import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';
import EditProfile from "./views/app-views/pages/setting/EditProfile";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
          <Router>
            <DndProvider  backend={HTML5Backend}>
            <Switch>
              <Route path="/setting/edit-profile/:id" component={EditProfile} />
              <Route path="/" component={Views}/>
            </Switch>
            </DndProvider>
          </Router>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}

export default App;
