import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
      <Route path='/home' exact>
        <Home />
      </Route>

    </Layout>
  );
}

export default App;
