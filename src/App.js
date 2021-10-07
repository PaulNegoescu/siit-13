import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Parent } from './features/Communication/Parent';
import { Counter } from './features/Counter/Counter';
import { TodoList } from './features/Todos/TodoList';
import { Nav } from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/communication" component={Parent} />
        <Route path="/todos" component={TodoList} />
        <Route path="*" component={() => <h1>404 Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
