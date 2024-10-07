import {fireEvent, render, screen} from '@testing-library/react'
import { Route, Router, Switch,  } from "react-router-dom";
import { createMemoryHistory, History } from 'history';
import Menu from './menu';
import { ReactNode } from 'react';
import { About } from './App';
import { JSX } from 'react/jsx-runtime';

const createRouter = (
  children: string | number | boolean | Iterable<ReactNode> | JSX.Element | null | undefined,
  history: History<unknown>
): ReactNode => {
  return(
    <Router history={history}>
    {children}

    <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  )
}

test("it expands when the button is clicked", () => {
  const history = createMemoryHistory();
  render(
    createRouter(<Menu />, history)
  );

  fireEvent.click(screen.getByText(/About/i))

  screen.getByText('アバウト')

  console.log(history.location)
});