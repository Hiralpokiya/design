

import "./App.css";
import Routing from "./Component/Routing/routing";
import { BrowserRouter as Router } from "react-router-dom";
 function App() {


  return (
    <div className="App">
      <Router>
      <Routing />
      </Router>

    </div>
  );
}

export default App;



