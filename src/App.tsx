import './App.css'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import Menu from './menu';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return (
    <>
      <h2>About</h2>
      アバウト
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}