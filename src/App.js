import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Tour from './components/pages/Tour';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tour' component={Tour}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
