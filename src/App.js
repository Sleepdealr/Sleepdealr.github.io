import pfp from './Content/boygif.gif';
import './App.css';
import Navbar from "./Components/Navbar";
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
                    <Route path="/about" components={About} />
                    <Route path="/contact" components={Contact} />
                    <Route path="/projects" components={Projects} />
                </Switch>
            </Router>
        </div>
    );
}

const Home = () => (
  <div>
      <div className="App">
          <body className="App-header">
          <p>
              I hate React
          </p>
          <img src={pfp} className={"home-header-img"} alt="pfp"/>
          </body>
      </div>
  </div>
);


export default App;