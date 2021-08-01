import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects"  components={Projects} />
                    <Route path="/about"  components={About} />
                    <Route path="/contact"  components={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;