import {Login, Dashboard} from "./component/"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./hocs/PrivateRoute"


function App() {
  return (
    <div className="app">
    <Router>
    <Switch>
      <AuthProvider>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </AuthProvider>
    </Switch>
    </Router>
    </div>
  );
}

export default App;

