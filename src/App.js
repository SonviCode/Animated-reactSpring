import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Liste from './Pages/Liste/Liste';
import Scroll from './Pages/Scroll/Scroll';
import StateAnim from './Pages/StateAnim/StateAnim'


function App() {
  return (
      <Router>
        <div className="globale-container">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Liste}/>
            <Route path="/stateAnim" exact component={StateAnim}/>
            <Route path="/scroll" exact component={Scroll}/>

          </Switch>
        </div>
      </Router>

  );
}

export default App;
