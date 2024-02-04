import{
  BrowserRouter as Router,
  Routes,
  Route
}
from "react-router-dom";
import Home from "./screens/Home";



function App() {
  
  return (
    <div>
      <Router>
    <div>
      <Routes>
        <Route exact path ="/" element = {<Home/>} />
       

      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
