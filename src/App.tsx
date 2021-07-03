// import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home'
// import { Code } from './pages/Code';
// import { Panel } from './pages/Panel';

function App() {
  return (
    <Home />
    /* <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panel" component={Panel} />
          <Route path="/code" component={Code} />
       </Switch>
      </AuthContextProvider>
    </BrowserRouter>*/
  );
}

export default App;
