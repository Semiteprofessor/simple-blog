import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//PageRenderer
import Home from './pages/Home';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/blog/:id' component={BlogDetails}/>
          <Route path='/create' component={CreateBlog}/>
          <Route path='/about' component={About}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
