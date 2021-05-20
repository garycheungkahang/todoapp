import './App.css';
import TODO from './component/list.jsx'
import { LandingPage } from "./component/landing.page";
import { ProtectedRoute } from './component/protected.route'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App" >
        <h1>{'Todo-apps'}</h1>
      <div>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path='/todo' component={TODO} />
        </Router>
      </div>
    </div>
  );
}

export default App;
