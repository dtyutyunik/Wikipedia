import Home from './pages/Home'
import Error from './pages/Error'
import Search from './pages/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const App=()=> (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Route component={Error}/>

    </Switch>
  </Router>

    
    
)

export default App;
