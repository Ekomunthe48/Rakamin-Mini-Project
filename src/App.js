import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
