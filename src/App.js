import './App.css';
import About from './components/About';
import Blog from './components/Blog';
// import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
// import Switcher from './components/Switcher';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blog}/>
          </Routes>
      </Router>
   </>
  );
}

export default App;
