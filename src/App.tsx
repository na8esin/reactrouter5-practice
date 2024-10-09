import './App.css'
import { Link, Route, BrowserRouter as Router, Switch, useHistory, } from 'react-router-dom';
import Menu from './menu';
import NoMatch from './NoMatch';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/about/:aboutId">
            <About />
          </Route>
          <Route path="/about/:aboutId/detail">
            <AboutDetail />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* ↓にexactをつけないとNoMatch設定しても全部Homeに来ちゃう */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
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
  const history = useHistory();

  console.log(history.location)
  // const { aboutId } = useParams(); // なんか取れない

  return (
    <>
      <h2>About</h2>
      pathname: {history.location.pathname}
      <div>
        <Link to="/about/2">About</Link>
      </div>
      <div>
        <Link to="/about/2/detail">Detail</Link>
      </div>
    </>
  );
}

export function AboutDetail() {
  const history = useHistory();

  console.log(history.location)

  const handleClick = () => {
    history.push('users')
  }

  const handleClick2 = () => {
    history.push('/users')
  }

  return (
    <>
      <h2>About Detail</h2>
      <div>
      <button onClick={() => handleClick()}>relative users</button>
      </div>
      <div>
      <button onClick={() => handleClick2()}>absolute users</button>
      </div>
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}