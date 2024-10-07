import {fireEvent, render, screen} from '@testing-library/react'
import { Router,  } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from 'history';

test("it expands when the button is clicked", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  fireEvent.click(screen.getByText(/About/i))

  screen.getByText('アバウト')

  console.log(history.location)
});