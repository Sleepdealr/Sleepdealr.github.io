import './Projects.css';
import pfp from "../Content/boygif.gif";


function Projects() {
    return (
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
}

export default Projects;