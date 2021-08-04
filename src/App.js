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
            <Router basename="/react-website">
                <Switch>
                    <Route path="/projects"   component={Projects} />
                    <Route path="/about"   component={About} />
                    <Route path="/contact"   component={Contact} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
