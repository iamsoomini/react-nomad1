import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
 return (
  <Router>
    <Switch>
    {/* 여기서 설정한 변수명으로 넘겨준 값이 useParam() 넘어옴. */}
      <Route path="/movie/:id">
        <Detail />
      </Route>

      <Route path="/">
        <Home />
      </Route>  

    </Switch>
  </Router>  
 )}
export default App;