import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import MyDashborad from './page/home/MyDashborad';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/home' component={MyDashborad} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
